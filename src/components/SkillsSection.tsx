import { Code, Database, Cpu, Globe, Settings, Zap } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend Development",
      icon: <Database className="w-6 h-6" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Database Design", "SQL", "MongoDB"]
    },
    {
      title: "Embedded Systems",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["C/C++", "Microcontrollers", "Real-time Systems", "Firmware Development", "Hardware Integration"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "C/C++", "Python", "Java", "Assembly"]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Linux", "Docker", "Debugging Tools"]
    },
    {
      title: "Soft Skills",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Problem Solving", "Team Collaboration", "Continuous Learning", "Analytical Thinking", "Communication"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 section-fade-in">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive skill set spanning web development and embedded systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <div className="text-primary">{category.icon}</div>
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};