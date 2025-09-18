export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 section-fade-in">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">
            Passionate developer with a strong foundation in both theoretical and practical aspects of computer science
          </p>
        </div>

        <div className="portfolio-card">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              Passionate embedded systems developer with expertise in C/C++ programming, microcontroller development, and IoT solutions. 
              My computer science background has equipped me with strong analytical skills and deep understanding of 
              hardware-software integration and real-time systems.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Currently working as an embedded developer at Torp d.o.o., I specialize in low-level programming, 
              sensor integration, communication protocols, and firmware development. I enjoy optimizing code for 
              resource-constrained environments and solving complex hardware interfacing challenges.
            </p>
            <p className="text-lg leading-relaxed">
              My journey began with a strong classical education foundation, followed by comprehensive computer science 
              studies. This combination provides me with both theoretical knowledge and practical skills to develop 
              efficient embedded solutions across various industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};