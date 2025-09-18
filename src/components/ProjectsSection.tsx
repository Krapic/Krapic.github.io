import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI-Maze-Solver",
    description: "Interaktivna aplikacija za generiranje i rješavanje labirinata pomoću AI algoritama (BFS, DFS, A*) razvijena u sklopu kolegija Programsko inženjerstvo.",
    technologies: ["Python", "AI Algorithms", "BFS/DFS", "A*"],
    github: "https://github.com/Krapic/AI-Maze-Solver",
    featured: true
  },
  {
    title: "KantaShop",
    description: "Studentski projekt e-trgovine razvijen korištenjem .NET 9 i React 19 tehnologija s osnovnim funkcionalnostima online trgovine.",
    technologies: ["React 19", ".NET 9", "TypeScript", "E-commerce"],
    github: "https://github.com/Krapic/KantaShop",
    featured: true
  },
  {
    title: "AddressBook",
    description: "Jednostavan telefonski imenik razvijen s React (TypeScript) i C# ASP.NET Core s Entity Framework Core i SQLite bazom podataka.",
    technologies: ["React", "TypeScript", "ASP.NET Core", "Entity Framework", "SQLite"],
    github: "https://github.com/Krapic/AddressBook",
    featured: false
  },
  {
    title: "Fitness Tracker with WiFi6 Connectivity",
    description: "Najnoviji projekt fitness trackera s naprednom WiFi6 povezivošću za praćenje aktivnosti i zdravlja.",
    technologies: ["IoT", "WiFi6", "Embedded Systems", "Health Tracking"],
    github: "https://github.com/Krapic/Fitness-Tracker-With-Wifi6-Connectivity",
    featured: true
  },
  {
    title: "Infobip Reservations WebApp",
    description: "Web aplikacija za rezervacije razvijena kao dio Infobip projekta s naprednim sustavom upravljanja rezervacijama.",
    technologies: ["C#", "Web Development", "Reservations System"],
    github: "https://github.com/Krapic/Infobip-Project-ReservationsWebApp",
    featured: false
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Projekti
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 bg-background border-border ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs bg-secondary/50 hover:bg-secondary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild
                    className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild className="hover:bg-primary hover:text-primary-foreground transition-colors">
            <a 
              href="https://github.com/Krapic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              aria-label="View all projects on GitHub profile"
            >
              <ExternalLink className="w-4 h-4" />
              Pogledaj sve projekte na GitHubu
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};