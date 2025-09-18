import { Briefcase, Calendar } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "Torp d.o.o.",
      position: "Embedded Developer",
      period: "December 2024 - Present",
      type: "Full-time",
      description: "Developing embedded systems and firmware solutions. Working with microcontrollers, real-time systems, and low-level programming to create efficient and reliable embedded applications.",
      technologies: ["C/C++", "Embedded Systems", "Microcontrollers", "Real-time Systems"]
    },
    {
      company: "INCUBIS d.o.o.",
      position: "Full Stack Developer",
      period: "October 2023 - February 2024",
      type: "Internship",
      description: "Gained hands-on experience in full-stack web development, working on both frontend and backend systems. Collaborated with the development team to build scalable web applications and learn industry best practices.",
      technologies: ["JavaScript", "React", "Node.js", "Database Management", "Web Development"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 section-fade-in">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg">
            Professional journey spanning full-stack web development and embedded systems
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="portfolio-card">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <p className="text-primary font-medium">{exp.company}</p>
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                      {exp.type}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};