import { jsPDF } from "jspdf";
import { resume } from "../data/resume";

async function fontData(file: string) {
  const response = await fetch(`${import.meta.env.BASE_URL}fonts/${file}`);
  if (!response.ok) throw new Error("Unable to load CV font");
  const bytes = new Uint8Array(await response.arrayBuffer());
  let binary = "";
  for (let i = 0; i < bytes.length; i += 8192)
    binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
  return btoa(binary);
}

// Kept separate from downloading so the exact document can be verified.
export async function createCv() {
  const [regular, bold] = await Promise.all([
    fontData("Lato-Regular.ttf"),
    fontData("Lato-Bold.ttf"),
  ]);
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  doc.addFileToVFS("Lato-Regular.ttf", regular);
  doc.addFont("Lato-Regular.ttf", "Lato", "normal");
  doc.addFileToVFS("Lato-Bold.ttf", bold);
  doc.addFont("Lato-Bold.ttf", "Lato", "bold");
  doc.setProperties({
    title: `${resume.name} - CV`,
    author: resume.name,
    subject: resume.title,
  });
  const margin = 17;
  const width = 176;
  let y = 20;
  const room = (height: number) => {
    if (y + height > 279) {
      doc.addPage();
      y = 20;
    }
  };
  const text = (
    value: string,
    size = 10,
    weight = "normal",
    color = "#334155",
    indent = 0,
  ) => {
    doc.setFont("Lato", weight).setFontSize(size).setTextColor(color);
    const lines = doc.splitTextToSize(value, width - indent) as string[];
    const height = size * 0.3528 * 1.3;
    for (const line of lines) {
      room(height);
      doc.text(line, margin + indent, y);
      y += height;
    }
  };
  const section = (label: string, minimum = 24) => {
    room(minimum);
    y += 4;
    text(label.toUpperCase(), 9, "bold", "#245a96");
    doc.setDrawColor("#d6dfea").line(margin, y - 1, 193, y - 1);
    y += 3;
  };
  const link = (label: string, url: string) => {
    doc.setFont("Lato", "normal").setFontSize(9).setTextColor("#245a96");
    doc.textWithLink(label, margin, y, { url });
    y += 4.5;
  };
  text(resume.name, 25, "bold", "#14232b");
  text(resume.title, 12, "normal", "#245a96");
  y += 2;
  text(`${resume.location}  |  ${resume.phone}`, 9);
  link(resume.email, `mailto:${resume.email}`);
  link("krapic.github.io  /  Portfolio", resume.website);
  link("linkedin.com/in/frane-krapic  /  LinkedIn", resume.linkedin);
  section("Profile");
  text(resume.summary, 9.5);
  section("Experience", 40);
  for (const job of resume.experience) {
    room(32);
    text(`${job.title} | ${job.company}`, 10.5, "bold", "#14232b");
    text(`${job.period}  |  ${job.type}`, 8.5);
    y += 1;
    for (const bullet of job.bullets)
      text(`- ${bullet}`, 9.5, "normal", "#334155", 2);
    y += 2;
  }
  section("Selected projects", 33);
  for (const project of resume.projects) {
    room(project.conference ? 42 : 26);
    text(project.name, 10.5, "bold", "#14232b");
    text(project.cv, 9.5);
    if (project.conference) {
      text(`Conference paper: ${project.conference.title}`, 9);
      text(`${project.conference.authors} | ${project.conference.date}`, 8.5);
      link(`${project.conference.event} - Official conference program`, project.conference.url);
    }
    link(
      `github.com/Krapic/${project.repository}`,
      `${resume.github}/${project.repository}`,
    );
    y += 1;
  }
  section("Technical skills", 28);
  for (const group of resume.skills)
    text(`${group.title}: ${group.items.join(", ")}`, 9);
  section("Education", 38);
  for (const education of resume.education) {
    room(22);
    text(education.degree, 10, "bold", "#14232b");
    if (education.specialization) text(education.specialization, 9);
    text(`${education.institution} | ${education.period}`, 9);
    y += 3;
  }
  for (let page = 1; page <= doc.getNumberOfPages(); page++) {
    doc
      .setPage(page)
      .setFont("Lato", "normal")
      .setFontSize(8)
      .setTextColor("#64748b");
    doc.text(`${resume.name} | Curriculum Vitae`, margin, 288);
    doc.text(`${page} / ${doc.getNumberOfPages()}`, 193, 288, {
      align: "right",
    });
  }
  return doc;
}

export async function downloadCv() {
  const doc = await createCv();
  await doc.save("Frane-Krapic-CV.pdf", { returnPromise: true });
}

