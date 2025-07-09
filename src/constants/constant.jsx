const loadingScreenString = "<Hello.World/>";

const navContents = {
  logoMain: "Nvne.",
  logoSpan: "Dev",
  navItems: ["Home", "About", "Projects", "Contact"],
  navItemsHref: ["#home", "#about", "#projects", "#contact"],
};

const homeSectionContent = {
  Heading: "Hi, I'm Navaneeth",
  Content: "I'm a full-stack developer and UI/UX enthusiast with an ECE background, skilled in Java and front-end technologies. I build scalable, user-centered digital solutions that merge design, performance, and innovation.",
};

const aboutSectionContent = {
  Heading: "About Me",
  Content:
    "Passionate full-stack developer with expertise in building modern web applications. I focus on creating efficient, scalable solutions with clean code architecture and optimal user experiences.",
  Skills: [
    {
      title: "FrontEnd",
      items: ["React", "JavaScript", "HTML/CSS"],
    },
    {
      title: "BackEnd",
      items: ["Java", "Spring Boot", "REST APIs"],
    },
    {
      title: "Database",
      items: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      title: "DevOps & Cloud",
      items: ["Docker", "Git"],
    },
  ],
  Boxes: [
    {
      title: "📚 Education",
      content: [
        "B.E ECE at PSNA College of Enginerring and Technology (2022-2026)",
        "Relevant Course Work: Data Structures, Full Stack Development",
      ],
    },
    {
      title: "💼 Experience",
      content: [        
        "Designed and implemented responsive quiz platform interface",
        "Created user flows and wireframes for optimal navigation experience",
      ],
    },
  ],
};

const projectSectionContent = [
  {
    id: 1,
    title: "Snake Game",
    intro: "Productivity application with real-time updates, Reimagined classic game with modern /UX principles, Developed alternative control schemes based on user testing, Created style guide and design system for consistent visuals",
    repo: "https://github.com/yourusername/ecommerce-project",
  
    skills: ["Java", "JavaFX", "Java-Swing"],
    
  },
  {
    id: 2,
    title: "Algo-Quest",
    intro: "Designed real-time competition interface with clear information architecture, Implemented responsive front-end with React for optimal cross-device experience, Created interactive prototypes for user testing before development",
    repo: "https://github.com/yourusername/task-manager",
    skills: ["Figma", "HTML/CSS", "JavaScript", "React"],
    
  },
];

export {
  aboutSectionContent,
  homeSectionContent,
  loadingScreenString,
  navContents,
  projectSectionContent,
};