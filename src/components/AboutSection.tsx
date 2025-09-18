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
              I'm a dedicated developer from Rijeka, Croatia, with a comprehensive educational background 
              and hands-on experience in both web development and embedded systems. My journey began at 
              Salezijanska klasična gimnazija, where I developed strong analytical and problem-solving skills.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              After completing my bachelor's degree in Computer Science at the Technical Faculty of the 
              University of Rijeka, I've gained valuable industry experience working as a Full Stack 
              Developer and currently as an Embedded Developer, allowing me to bridge the gap between 
              software and hardware development.
            </p>
            <p className="text-lg leading-relaxed">
              I'm passionate about creating efficient, scalable solutions and constantly learning new 
              technologies to stay at the forefront of the ever-evolving tech landscape. My diverse 
              experience enables me to approach problems from multiple perspectives and deliver 
              comprehensive solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};