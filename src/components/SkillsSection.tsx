import { Code, Database, Cpu, Globe, Settings, Zap } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Embedded Programming",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["C/C++", "Assembly", "Real-time Programming", "Memory Management", "Debugging Tools", "Cross-compilation"]
    },
    {
      title: "Microcontrollers & Hardware",
      icon: <Settings className="w-6 h-6" />,
      skills: ["ARM Cortex", "AVR", "PIC", "ESP32", "Arduino", "STM32", "Hardware Interfacing", "PCB Design"]
    },
    {
      title: "Communication Protocols",
      icon: <Zap className="w-6 h-6" />,
      skills: ["UART", "SPI", "I2C", "CAN", "Ethernet", "WiFi", "Bluetooth", "LoRa", "Modbus"]
    },
    {
      title: "Development Tools",
      icon: <Code className="w-6 h-6" />,
      skills: ["Eclipse IDE", "Keil uVision", "GCC", "Makefile", "JTAG", "Oscilloscope", "Logic Analyzer"]
    },
    {
      title: "IoT & Systems",
      icon: <Globe className="w-6 h-6" />,
      skills: ["RTOS", "FreeRTOS", "Linux Embedded", "Sensor Integration", "Data Acquisition", "Edge Computing"]
    },
    {
      title: "Additional Skills",
      icon: <Database className="w-6 h-6" />,
      skills: ["Python", "MATLAB", "Git", "Version Control", "Technical Documentation", "System Architecture"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 section-fade-in">
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground text-lg">
            Specialized expertise in embedded systems and hardware programming
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