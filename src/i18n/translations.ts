export type Lang = "en" | "hr";

const en = {
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    toggleMenu: "Toggle menu",
  },
  hero: {
    tagline: "// From code to hardware",
    roles: [
      "Embedded Software Engineer",
      "IoT Developer",
      "Firmware Developer",
      "Hardware Enthusiast",
    ],
    repositories: "repositories",
    followers: "followers",
    explore: "Explore my work",
    githubProfile: "GitHub profile",
    linkedinProfile: "LinkedIn profile",
    emailMe: "Send email",
  },
  about: {
    tag: "// About me",
    heading: "About Me",
    subheading: "Firmware development and hardware integration",
    summary:
      "Computer Engineering master's student and embedded developer at Torp d.o.o., contributing to motor-controller hardware, firmware, debugging, and testing alongside the engineering team.",
  },
  stats: {
    repos: "GitHub Repositories",
    languages: "Languages Used",
    mcus: "MCU Platforms",
    years: "Years of Experience",
  },
  contributions: {
    title: "GitHub Activity",
    subtitle: "Last 12 months",
    contributions: "contributions",
    loading: "Loading contributions…",
    less: "Less",
    more: "More",
  },
  experience: {
    tag: "// Experience",
    headingPre: "Work",
    headingAccent: "Experience",
    subheading:
      "Professional journey spanning full-stack web development and embedded systems",
    items: [
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
      },
    ],
  },
  education: {
    tag: "// Education",
    heading: "Education",
    subheading: "Computer Engineering, with a specialization in Computer Systems",
    items: [
      {
        institution: "Faculty of Engineering, University of Rijeka",
        degree: "Master's Degree in Computer Engineering",
        specialization: "Specialization in Computer Systems",
        period: "2025 - 2027 (expected)",
      },
      {
        institution: "Faculty of Engineering, University of Rijeka",
        degree: "Bachelor's Degree in Computer Engineering",
        specialization: "",
        period: "2022 - 2025",
      },
    ],
  },
  projects: {
    tag: "// My projects",
    headingPre: "GitHub",
    headingAccent: "Repositories",
    subheading:
      "A collection of my most significant projects and open-source contributions",
    error: "Error loading repositories.",
    tryAgain: "Try again",
    viewAll: "View all on GitHub",
    all: "All",
    noDescription: "No description",
    conferencePaper: "Conference paper",
  },
  modal: {
    noDescription: "No description available.",
    conferencePaper: "Conference paper",
    viewProgram: "View official conference program",
    readPaper: "Read full paper (PDF)",
    stars: "Stars",
    forks: "Forks",
    watchers: "Watchers",
    language: "Language",
    created: "Created",
    lastUpdated: "Last updated",
    topics: "Topics",
    viewOnGithub: "View on GitHub",
    liveDemo: "Live Demo",
    close: "Close",
  },
  journey: {
    tag: "// My journey",
    headingPre: "The Road",
    headingAccent: "So Far",
    subheading: "Key milestones in my programming journey",
    milestones: [
      {
        year: "2019",
        title: "First lines of code",
        description:
          "Started programming at Salesian Classical Gymnasium, discovering a passion for problem-solving through code.",
      },
      {
        year: "2021",
        title: "Embedded systems & IoT",
        description:
          "Dove into microcontrollers, ESP32 and Arduino projects — connecting the physical world with software.",
      },
      {
        year: "2023",
        title: "First developer role",
        description:
          "Joined INCUBIS d.o.o. as a Full Stack Developer, building real-world web applications.",
      },
      {
        year: "2024",
        title: "Embedded Developer at Torp",
        description:
          "Currently working on embedded systems at Torp d.o.o. while studying at the Technical Faculty, University of Rijeka.",
      },
    ],
  },
  skills: {
    tag: "// Skills",
    headingPre: "Skills &",
    headingAccent: "Technologies",
    subheading:
      "Specialized expertise in embedded systems and hardware programming",
    categories: [
      "Firmware & systems",
      "Platforms & connectivity",
      "Tools & supporting skills",
    ],
    languagesTitle: "Languages",
    languageNames: ["Croatian", "English", "German", "Italian"],
    languageLevels: ["Native", "Fluent", "Beginner", "Beginner"],
  },
  achievements: {
    tag: "// Achievements",
    headingPre: "Certificates &",
    headingAccent: "Achievements",
    subheading: "Publications, awards, and notable milestones",
    items: [
      {
        title: "Conference Paper — MIPRO 2026 / SSE",
        description:
          'Co-authored and presented "Fitness Tracker Connected to the Internet Using a Wi-Fi Network" at the MIPRO 2026 convention in Opatija, Croatia.',
        date: "May 2026",
        pdfLabel: "Read full paper (PDF)",
      },
      {
        title: "Bachelor's Thesis — Connected Fitness Tracker",
        description:
          "Research prototype on nRF7002 DK / Zephyr RTOS with motion sensing, LVGL interface, and MQTT over TLS telemetry.",
        date: "2025",
        pdfLabel: "Read full thesis (PDF)",
      },
    ],
    viewPublication: "View publication",
  },
  testimonials: {
    tag: "// Testimonials",
    headingPre: "What People",
    headingAccent: "Say",
    subheading: "Feedback from mentors, supervisors, and teammates",
    items: [
      {
        quote:
          "Frane quickly picked up our motor-controller toolchain and became a reliable part of the firmware team. His hardware debugging skills are well beyond student level.",
        name: "Engineering Mentor",
        role: "Torp d.o.o.",
      },
      {
        quote:
          "As technical lead of our maze-solver project, Frane kept the team organized and delivered a clean, well-integrated application.",
        name: "Project Teammate",
        role: "University of Rijeka",
      },
      {
        quote:
          "His bachelor's thesis work on the connected fitness tracker showed strong independence — from sensor integration all the way to a published conference paper.",
        name: "Thesis Supervisor",
        role: "Faculty of Engineering, Rijeka",
      },
    ],
  },
  interests: {
    tag: "// Interests",
    headingPre: "Interests &",
    headingAccent: "Hobbies",
    subheading:
      "Beyond coding - exploring hardware innovation and embedded technologies",
    items: [
      {
        title: "Electronics & Hardware",
        description:
          "Exploring circuit design, PCB development, and working with various electronic components and sensors",
      },
      {
        title: "Automation & Connected Systems",
        description:
          "Exploring how devices, control logic, and user interfaces work together to automate everyday processes.",
      },
      {
        title: "DIY Projects",
        description:
          "Building custom embedded solutions, automation systems, and experimenting with new technologies",
      },
      {
        title: "Technical Learning",
        description:
          "Staying current with embedded systems trends, RTOS development, and low-level optimization techniques",
      },
    ],
  },
  contact: {
    tag: "// Contact",
    headingPre: "Get In",
    headingAccent: "Touch",
    subheading: "Let's connect and discuss opportunities",
    email: "Email",
    phone: "Phone",
    location: "Location",
  },
  form: {
    title: "Send me a message",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Your message...",
    send: "Send message",
    sending: "Sending...",
    sentTitle: "Message sent!",
    sentBody: "Thanks for reaching out — I'll get back to you soon.",
    sendAnother: "Send another",
    error: "Something went wrong — please try again or email me directly.",
    nameRequired: "Name is required",
    emailInvalid: "Invalid email address",
    messageRequired: "Message is required",
  },
  footer: {
    tagline:
      "Embedded engineer crafting reliable firmware and IoT solutions for resource-constrained hardware.",
    quickLinks: "Quick Links",
    connect: "Connect",
    rights: "All rights reserved.",
    backToTop: "Back to top",
    terminalHint: "Press ` to open the terminal",
  },
  visits: {
    label: "visits",
  },
  cv: {
    download: "Download CV",
    preparing: "Preparing PDF…",
    error: "The PDF could not be generated. Please try again.",
    generating: "Generating your PDF CV.",
  },
  palette: {
    placeholder: "Type a command or search...",
    empty: "No results found.",
    navigation: "Navigation",
    actions: "Actions",
    links: "Links",
    goTo: "Go to",
    toggleTheme: "Toggle theme",
    switchLanguage: "Switch to Croatian",
    downloadCv: "Download CV",
    openTerminal: "Open terminal",
    open: "Open command palette",
  },
  terminal: {
    title: "visitor@krapic: ~",
    welcome: [
      "Welcome to FK-TERM v1.0",
      "Type 'help' to list available commands.",
    ],
    prompt: "visitor@krapic:~$",
    help: [
      "Available commands:",
      "  help       Show this list",
      "  about      Who is Frane?",
      "  skills     Core skills",
      "  contact    Contact info",
      "  github     Open GitHub profile",
      "  linkedin   Open LinkedIn profile",
      "  cv         Download CV",
      "  theme      Toggle dark/light theme",
      "  lang       Switch language (EN/HR)",
      "  clear      Clear the terminal",
      "  exit       Close the terminal",
    ],
    about: [
      "Frane Krapić — Embedded Software Engineer from Rijeka, Croatia.",
      "Firmware, IoT and hardware-software integration.",
    ],
    skillsOutput: [
      "C/C++ · STM32 · ESP32 · nRF7002 · Zephyr RTOS · FreeRTOS",
      "UART/SPI/I2C · CAN · MQTT/TLS · Git · JTAG · Oscilloscope",
    ],
    contactOutput: ["Email: krapicf@gmail.com", "Phone: +385 91 590 5749"],
    opening: "Opening",
    themeToggled: "Theme toggled.",
    langSwitched: "Language switched to English.",
    cvDownloading: "Generating CV… check your downloads.",
    unknown: "command not found — type 'help'",
    close: "Close terminal",
  },
  notFound: {
    title: "Oops! Page not found",
    back: "Return to Home",
  },
};

export type Translations = typeof en;

const hr: Translations = {
  nav: {
    home: "Početna",
    about: "O meni",
    experience: "Iskustvo",
    projects: "Projekti",
    skills: "Vještine",
    contact: "Kontakt",
    toggleMenu: "Otvori izbornik",
  },
  hero: {
    tagline: "// Od koda do hardvera",
    roles: [
      "Embedded softverski inženjer",
      "IoT developer",
      "Firmware developer",
      "Ljubitelj hardvera",
    ],
    repositories: "repozitorija",
    followers: "pratitelja",
    explore: "Istraži moj rad",
    githubProfile: "GitHub profil",
    linkedinProfile: "LinkedIn profil",
    emailMe: "Pošalji email",
  },
  about: {
    tag: "// O meni",
    heading: "O meni",
    subheading: "Razvoj firmvera i integracija hardvera",
    summary:
      "Student diplomskog studija računalnog inženjerstva i embedded developer u Torp d.o.o., gdje s inženjerskim timom sudjelujem u razvoju hardvera, firmvera, otklanjanju pogrešaka i testiranju kontrolera motora.",
  },
  stats: {
    repos: "GitHub repozitoriji",
    languages: "Korišteni jezici",
    mcus: "MCU platforme",
    years: "Godine iskustva",
  },
  contributions: {
    title: "GitHub aktivnost",
    subtitle: "Zadnjih 12 mjeseci",
    contributions: "doprinosa",
    loading: "Učitavanje doprinosa…",
    less: "Manje",
    more: "Više",
  },
  experience: {
    tag: "// Iskustvo",
    headingPre: "Radno",
    headingAccent: "iskustvo",
    subheading:
      "Profesionalni put od full-stack web razvoja do embedded sustava",
    items: [
      {
        company: "Torp d.o.o.",
        title: "Embedded Developer",
        period: "Pro 2024 - danas",
        type: "Studentsko zapošljavanje",
        bullets: [
          "Sudjelujem u razvoju, otklanjanju pogrešaka i testiranju FOC kontrolera PMSM/BLDC motora.",
          "Pomažem u izradi hardverskih shema, lemljenju komponenata i razvoju firmvera na STM32, ESP32 i ArtInChip platformama.",
          "Otklanjam hardverske i firmverske pogreške osciloskopom i podržavam funkcionalno testiranje uz inženjerski tim.",
          "Sudjelujem u razvoju pomoćnih uređaja za razvoj i testiranje kontrolera.",
        ],
      },
      {
        company: "INCUBIS d.o.o.",
        title: "Full Stack Developer",
        period: "Lis 2023 - Velj 2024",
        type: "Stručna praksa",
        bullets: [
          "Sudjelovao sam u frontend i backend web razvoju s razvojnim timom.",
          "Radio sam s JavaScriptom, Reactom, Node.jsom i bazama podataka na izradi web aplikacija.",
        ],
      },
    ],
  },
  education: {
    tag: "// Obrazovanje",
    heading: "Obrazovanje",
    subheading: "Računalno inženjerstvo, sa specijalizacijom u računalne sustave",
    items: [
      {
        institution: "Tehnički fakultet, Sveučilište u Rijeci",
        degree: "Diplomski studij računalnog inženjerstva",
        specialization: "Specijalizacija u računalne sustave",
        period: "2025 - 2027 (očekivano)",
      },
      {
        institution: "Tehnički fakultet, Sveučilište u Rijeci",
        degree: "Preddiplomski studij računalnog inženjerstva",
        specialization: "",
        period: "2022 - 2025",
      },
    ],
  },
  projects: {
    tag: "// Moji projekti",
    headingPre: "GitHub",
    headingAccent: "repozitoriji",
    subheading:
      "Kolekcija mojih najznačajnijih projekata i open-source doprinosa",
    error: "Greška pri učitavanju repozitorija.",
    tryAgain: "Pokušaj ponovno",
    viewAll: "Vidi sve na GitHubu",
    all: "Svi",
    noDescription: "Bez opisa",
    conferencePaper: "Konferencijski rad",
  },
  modal: {
    noDescription: "Opis nije dostupan.",
    conferencePaper: "Konferencijski rad",
    viewProgram: "Pogledaj službeni program konferencije",
    readPaper: "Pročitaj cijeli rad (PDF)",
    stars: "Zvijezde",
    forks: "Forkovi",
    watchers: "Pratitelji",
    language: "Jezik",
    created: "Kreirano",
    lastUpdated: "Zadnje ažurirano",
    topics: "Teme",
    viewOnGithub: "Vidi na GitHubu",
    liveDemo: "Demo uživo",
    close: "Zatvori",
  },
  journey: {
    tag: "// Moj put",
    headingPre: "Dosadašnji",
    headingAccent: "put",
    subheading: "Ključne prekretnice na mom programerskom putu",
    milestones: [
      {
        year: "2019",
        title: "Prve linije koda",
        description:
          "Počeo sam programirati u Salezijanskoj klasičnoj gimnaziji i otkrio strast prema rješavanju problema kroz kod.",
      },
      {
        year: "2021",
        title: "Embedded sustavi i IoT",
        description:
          "Zaronio sam u mikrokontrolere, ESP32 i Arduino projekte — povezujući fizički svijet sa softverom.",
      },
      {
        year: "2023",
        title: "Prva developerska uloga",
        description:
          "Pridružio sam se INCUBIS d.o.o. kao Full Stack Developer, radeći na stvarnim web aplikacijama.",
      },
      {
        year: "2024",
        title: "Embedded Developer u Torpu",
        description:
          "Trenutno radim na embedded sustavima u Torp d.o.o. dok studiram na Tehničkom fakultetu Sveučilišta u Rijeci.",
      },
    ],
  },
  skills: {
    tag: "// Vještine",
    headingPre: "Vještine i",
    headingAccent: "tehnologije",
    subheading:
      "Specijalizirana stručnost u embedded sustavima i hardverskom programiranju",
    categories: [
      "Firmver i sustavi",
      "Platforme i povezivost",
      "Alati i popratne vještine",
    ],
    languagesTitle: "Jezici",
    languageNames: ["Hrvatski", "Engleski", "Njemački", "Talijanski"],
    languageLevels: ["Materinji", "Tečno", "Početna razina", "Početna razina"],
  },
  achievements: {
    tag: "// Postignuća",
    headingPre: "Certifikati i",
    headingAccent: "postignuća",
    subheading: "Publikacije, nagrade i značajne prekretnice",
    items: [
      {
        title: "Konferencijski rad — MIPRO 2026 / SSE",
        description:
          'Suautor sam i prezentirao rad "Fitness Tracker Connected to the Internet Using a Wi-Fi Network" na konvenciji MIPRO 2026 u Opatiji.',
        date: "Svibanj 2026",
        pdfLabel: "Pročitaj cijeli rad (PDF)",
      },
      {
        title: "Završni rad — Connected Fitness Tracker",
        description:
          "Istraživački prototip na nRF7002 DK / Zephyr RTOS s detekcijom pokreta, LVGL sučeljem i MQTT telemetrijom preko TLS-a.",
        date: "2025",
        pdfLabel: "Pročitaj završni rad (PDF)",
      },
    ],
    viewPublication: "Pogledaj publikaciju",
  },
  testimonials: {
    tag: "// Preporuke",
    headingPre: "Što ljudi",
    headingAccent: "kažu",
    subheading: "Povratne informacije mentora, voditelja i kolega",
    items: [
      {
        quote:
          "Frane je brzo savladao naš toolchain za kontrolere motora i postao pouzdan dio tima za firmver. Njegove vještine hardverskog otklanjanja pogrešaka daleko nadmašuju studentsku razinu.",
        name: "Mentor u inženjeringu",
        role: "Torp d.o.o.",
      },
      {
        quote:
          "Kao tehnički voditelj našeg projekta rješavača labirinta, Frane je držao tim organiziranim i isporučio čistu, dobro integriranu aplikaciju.",
        name: "Kolega s projekta",
        role: "Sveučilište u Rijeci",
      },
      {
        quote:
          "Njegov završni rad o povezanom fitness trackeru pokazao je snažnu samostalnost — od integracije senzora do objavljenog konferencijskog rada.",
        name: "Mentor završnog rada",
        role: "Tehnički fakultet, Rijeka",
      },
    ],
  },
  interests: {
    tag: "// Interesi",
    headingPre: "Interesi i",
    headingAccent: "hobiji",
    subheading:
      "Osim programiranja — istraživanje hardverskih inovacija i embedded tehnologija",
    items: [
      {
        title: "Elektronika i hardver",
        description:
          "Istraživanje dizajna sklopova, razvoja PCB-a i rada s raznim elektroničkim komponentama i senzorima",
      },
      {
        title: "Automatizacija i povezani sustavi",
        description:
          "Istraživanje kako uređaji, upravljačka logika i korisnička sučelja zajedno automatiziraju svakodnevne procese.",
      },
      {
        title: "DIY projekti",
        description:
          "Izrada prilagođenih embedded rješenja, sustava za automatizaciju i eksperimentiranje s novim tehnologijama",
      },
      {
        title: "Tehničko usavršavanje",
        description:
          "Praćenje trendova u embedded sustavima, RTOS razvoju i tehnikama niskorazine optimizacije",
      },
    ],
  },
  contact: {
    tag: "// Kontakt",
    headingPre: "Javi",
    headingAccent: "mi se",
    subheading: "Spojimo se i razgovarajmo o prilikama",
    email: "Email",
    phone: "Telefon",
    location: "Lokacija",
  },
  form: {
    title: "Pošalji mi poruku",
    namePlaceholder: "Tvoje ime",
    emailPlaceholder: "Tvoj email",
    messagePlaceholder: "Tvoja poruka...",
    send: "Pošalji poruku",
    sending: "Slanje...",
    sentTitle: "Poruka poslana!",
    sentBody: "Hvala na javljanju — odgovorit ću uskoro.",
    sendAnother: "Pošalji novu",
    error: "Nešto je pošlo po zlu — pokušaj ponovno ili mi piši izravno na email.",
    nameRequired: "Ime je obavezno",
    emailInvalid: "Nevažeća email adresa",
    messageRequired: "Poruka je obavezna",
  },
  footer: {
    tagline:
      "Embedded inženjer koji gradi pouzdan firmver i IoT rješenja za hardver ograničenih resursa.",
    quickLinks: "Brze poveznice",
    connect: "Poveži se",
    rights: "Sva prava pridržana.",
    backToTop: "Natrag na vrh",
    terminalHint: "Pritisni ` za terminal",
  },
  visits: {
    label: "posjeta",
  },
  cv: {
    download: "Preuzmi CV",
    preparing: "Priprema PDF-a…",
    error: "PDF nije moguće generirati. Pokušaj ponovno.",
    generating: "Generiranje TV-a u PDF formatu.",
  },
  palette: {
    placeholder: "Upiši naredbu ili pretraži...",
    empty: "Nema rezultata.",
    navigation: "Navigacija",
    actions: "Radnje",
    links: "Poveznice",
    goTo: "Idi na",
    toggleTheme: "Promijeni temu",
    switchLanguage: "Switch to English",
    downloadCv: "Preuzmi CV",
    openTerminal: "Otvori terminal",
    open: "Otvori paletu naredbi",
  },
  terminal: {
    title: "visitor@krapic: ~",
    welcome: [
      "Dobrodošli u FK-TERM v1.0",
      "Upiši 'help' za popis naredbi.",
    ],
    prompt: "visitor@krapic:~$",
    help: [
      "Dostupne naredbe:",
      "  help       Prikaži ovaj popis",
      "  about      Tko je Frane?",
      "  skills     Ključne vještine",
      "  contact    Kontakt podaci",
      "  github     Otvori GitHub profil",
      "  linkedin   Otvori LinkedIn profil",
      "  cv         Preuzmi CV",
      "  theme      Promijeni tamnu/svijetlu temu",
      "  lang       Promijeni jezik (HR/EN)",
      "  clear      Očisti terminal",
      "  exit       Zatvori terminal",
    ],
    about: [
      "Frane Krapić — embedded softverski inženjer iz Rijeke, Hrvatska.",
      "Firmver, IoT i integracija hardvera i softvera.",
    ],
    skillsOutput: [
      "C/C++ · STM32 · ESP32 · nRF7002 · Zephyr RTOS · FreeRTOS",
      "UART/SPI/I2C · CAN · MQTT/TLS · Git · JTAG · Osciloskop",
    ],
    contactOutput: ["Email: krapicf@gmail.com", "Telefon: +385 91 590 5749"],
    opening: "Otvaranje",
    themeToggled: "Tema promijenjena.",
    langSwitched: "Jezik promijenjen na hrvatski.",
    cvDownloading: "Generiranje CV-a… provjeri preuzimanja.",
    unknown: "naredba nije pronađena — upiši 'help'",
    close: "Zatvori terminal",
  },
  notFound: {
    title: "Ups! Stranica nije pronađena",
    back: "Natrag na početnu",
  },
};

export const translations: Record<Lang, Translations> = { en, hr };
