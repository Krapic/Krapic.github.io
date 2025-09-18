import { GraduationCap, Award } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      institution: "Technical Faculty, University of Rijeka",
      degree: "Bachelor's Degree in Computer Science",
      period: "2020 - 2023",
      grade: "3.75 GPA",
      description: "Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and system design."
    },
    {
      institution: "Salezijanska klasična gimnazija",
      degree: "Classical Gymnasium",
      period: "2016 - 2020",
      grade: "4.5 GPA",
      description: "Classical education with strong emphasis on analytical thinking, languages, and foundational academic skills."
    }
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 section-fade-in">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground text-lg">
            Strong academic foundation in computer science and classical studies
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-accent font-medium">{edu.grade}</span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};