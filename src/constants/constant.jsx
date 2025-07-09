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
    intro: "Productivity application with real-time updates, Reimagined classic game with modern UX principles",
    repo: "https://github.com/yourusername/snake-game",
    skills: ["Java", "JavaFX", "Java-Swing"],
    content: [
      "heading Project Overview",
      "para Reimagined classic game with modern UX principles",
      "para Developed alternative control schemes based on user testing",
      "heading Features",
      "list Responsive game controls",
      "list Score tracking system",
      "list Customizable appearance"
    ],
    initNodes: [
      { id: '1', position: { x: 0, y: 0 }, data: { label: 'Game Engine' } },
      { id: '2', position: { x: 200, y: 0 }, data: { label: 'UI Components' } },
      { id: '3', position: { x: 100, y: 100 }, data: { label: 'Score System' } }
    ],
    initEdges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' }
    ]
  },
  {
    id: 2,
    title: "Algo-Quest",
    intro: "Algorithm visualization and learning platform",
    repo: "https://github.com/yourusername/algo-quest",
    skills: ["Figma", "HTML/CSS", "JavaScript", "React"],
    content: [
      "heading Project Overview",
      "para Designed real-time competition interface with clear information architecture",
      "para Implemented responsive front-end with React",
      "heading Features",
      "list Algorithm visualization",
      "list Interactive coding challenges",
      "list User progress tracking"
    ],
    initNodes: [
      { id: '1', position: { x: 0, y: 0 }, data: { label: 'Frontend' } },
      { id: '2', position: { x: 200, y: 0 }, data: { label: 'Backend' } },
      { id: '3', position: { x: 100, y: 100 }, data: { label: 'Database' } }
    ],
    initEdges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' }
    ]
  },
  {
    id: 3,
    title: "OLA-LLD",
    intro: "Low-level design implementation of OLA ride-sharing service",
    repo: "https://github.com/navanee10/OLA-LLD",
    skills: ["Java", "OOP", "SOLID Principles", "Design Patterns"],
    content: [
      "heading Project Overview",
      "para Applied SOLID principles and object-oriented programming to create a scalable architecture",
      "para Utilized design patterns like Strategy and Factory for ride allocation logic",
      "heading Key Features",
      "list Ride matching algorithm",
      "list Dynamic fare calculation",
      "list Driver-rider management system",
      "heading Design Patterns Used",
      "list Strategy Pattern for fare calculation",
      "list Factory Pattern for object creation",
      "list Observer Pattern for notifications"
    ],
    initNodes: [
      { id: '1', position: { x: 0, y: 0 }, data: { label: 'Ride Service' } },
      { id: '2', position: { x: 200, y: 0 }, data: { label: 'Fare Calculator' } },
      { id: '3', position: { x: 100, y: 100 }, data: { label: 'User Manager' } },
      { id: '4', position: { x: 300, y: 100 }, data: { label: 'Driver Manager' } }
    ],
    initEdges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e1-3', source: '1', target: '3' },
      { id: 'e1-4', source: '1', target: '4' },
      { id: 'e3-4', source: '3', target: '4' }
    ]
  }
];

export {
  aboutSectionContent,
  homeSectionContent,
  loadingScreenString,
  navContents,
  projectSectionContent,
};