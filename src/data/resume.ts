// Shared source for the portfolio and downloadable CV. Keep claims factual.
export const resume = {
  name: "Frane Krapić",
  title: "Embedded Software Engineer",
  location: "Rijeka, Croatia",
  email: "krapicf@gmail.com",
  phone: "+385 91 590 5749",
  website: "https://krapic.github.io",
  github: "https://github.com/Krapic",
  linkedin: "https://www.linkedin.com/in/frane-krapic/",
  summary:
    "Computer Engineering master's student and embedded developer at Torp d.o.o., contributing to motor-controller hardware, firmware, debugging, and testing alongside the engineering team.",
  experience: [
    {
      company: "Torp d.o.o.",
      title: "Embedded Developer",
      period: "Dec 2024 - Present",
      type: "Student employment",
      bullets: [
        "Contribute to the development, debugging, and testing of FOC-based PMSM/BLDC motor controllers.",
        "Assist with hardware schematics, component soldering, and firmware development using STM32, ESP32, and ArtInChip platforms.",
        "Debug hardware and firmware with oscilloscopes and support functional testing alongside the engineering team.",
        "Help develop supporting devices used in controller development and testing.",
      ],
      technologies: [
        "C/C++",
        "STM32", "ESP32", "ArtInChip", "FOC / PMSM / BLDC", "Hardware testing",
      ],
    },
    {
      company: "INCUBIS d.o.o.",
      title: "Full Stack Developer",
      period: "Oct 2023 - Feb 2024",
      type: "Internship",
      bullets: [
        "Contributed to frontend and backend web development with the development team.",
        "Worked with JavaScript, React, Node.js, and databases to build web applications.",
      ],
      technologies: ["JavaScript", "React", "Node.js", "Databases"],
    },
  ],
  projects: [
    {
      name: "Connected fitness tracker",
      context: "Bachelor's thesis project",
      category: "Embedded systems / IoT",
      number: "01",
      repository: "Fitness-Tracker-With-Wifi6-Connectivity",
      conference: {
        event: "MIPRO 2026 / SSE",
        title: "Fitness Tracker Connected to the Internet Using a Wi-Fi Network",
        authors: "F. Krapić, M. Tomić",
        date: "26 May 2026, Opatija, Croatia",
        url: "https://mipro.hr/MIPRO2026.SSE/ELink.aspx",
      },
      description:
        "An embedded research prototype connecting motion sensing, an on-device interface, and wireless telemetry without a phone gateway.",
      detail:
        "Integrated accelerometer sampling, an LVGL display interface, and MQTT over TLS on the nRF7002 DK with Zephyr RTOS. Firmware includes step detection, remote commands, and a RAM-backed telemetry queue for temporary connection outages.",
      technologies: ["C", "Zephyr RTOS", "nRF7002 DK", "Wi-Fi 6", "MQTT / TLS"],
      cv: "Research prototype on nRF7002 DK / Zephyr RTOS integrating motion sensing, an LVGL interface, and MQTT over TLS. Includes step detection and queued telemetry during connection outages.",
    },
    {
      name: "AI maze solver",
      context: "",
      category: "Algorithms / Software engineering",
      number: "02",
      repository: "AI-Maze-Solver",
      conference: null,
      description:
        "An interactive application for generating mazes and exploring how different search algorithms solve them.",
      detail:
        "Technical lead in a six-student course project. Built the Pygame interface, application integration, and finite state machine for interactive algorithm visualization and performance statistics. The team implemented BFS, DFS, and A* search.",
      technologies: [
        "Python",
        "Pygame",
        "State machines",
        "Algorithm visualization",
      ],
      cv: "Technical lead in a six-student project. Built the Pygame UI, application integration, and state machine for visualizing BFS, DFS, and A* with performance statistics.",
    },
  ],
  skills: [
    {
      title: "Firmware & systems",
      items: [
        "C/C++",
        "Microcontrollers",
        "Real-time programming",
        "Sensor integration",
      ],
    },
    {
      title: "Platforms & connectivity",
      items: [
        "STM32",
        "ESP32",
        "ArtInChip",
        "nRF7002 DK",
        "Zephyr RTOS",
        "FreeRTOS",
        "UART / SPI / I2C",
        "CAN",
        "MQTT / TLS",
      ],
    },
    {
      title: "Tools & supporting skills",
      items: [
        "Git",
        "GCC / Make",
        "JTAG debugging",
        "Oscilloscope",
        "Logic analyzer",
        "Python",
        "Technical documentation",
      ],
    },
  ],
  languages: [
    { name: "Croatian", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "Beginner" },
    { name: "Italian", level: "Beginner" },
  ],
  education: [{
    institution: "Faculty of Engineering, University of Rijeka",
    degree: "Master's Degree in Computer Engineering",
    specialization: "Specialization in Computer Systems",
    period: "2025 - 2027 (expected)",
  }, {
    institution: "Faculty of Engineering, University of Rijeka",
    degree: "Bachelor's Degree in Computer Engineering",
    specialization: "",
    period: "2022 - 2025",
  }],
};
