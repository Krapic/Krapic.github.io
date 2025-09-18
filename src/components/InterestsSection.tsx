import { Book, Gamepad2, Mountain, Music, Camera, Coffee } from "lucide-react";

export const InterestsSection = () => {
  const interests = [
    {
      title: "Technology & Innovation",
      icon: <Coffee className="w-6 h-6" />,
      description: "Staying up-to-date with the latest tech trends, experimenting with new frameworks and tools"
    },
    {
      title: "Open Source",
      icon: <Book className="w-6 h-6" />,
      description: "Contributing to open-source projects and learning from the developer community"
    },
    {
      title: "Gaming",
      icon: <Gamepad2 className="w-6 h-6" />,
      description: "Exploring game development concepts and enjoying various gaming experiences"
    },
    {
      title: "Outdoor Activities",
      icon: <Mountain className="w-6 h-6" />,
      description: "Hiking, exploring Croatia's beautiful coastline and mountains"
    },
    {
      title: "Music",
      icon: <Music className="w-6 h-6" />,
      description: "Listening to various genres and exploring the intersection of technology and music"
    },
    {
      title: "Photography",
      icon: <Camera className="w-6 h-6" />,
      description: "Capturing moments and exploring digital image processing techniques"
    }
  ];

  return (
    <section id="interests" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 section-fade-in">
          <h2 className="text-3xl font-bold mb-4">Interests & Hobbies</h2>
          <p className="text-muted-foreground text-lg">
            Beyond coding - exploring creativity and continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((interest, index) => (
            <div key={index} className="portfolio-card text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto mb-4">
                <div className="text-primary">{interest.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{interest.title}</h3>
              <p className="text-muted-foreground text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};