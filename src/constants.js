// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.webp';  
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import netlifylogo from './assets/tech_logo/netlify.webp';


// Experience Section Logo's
import CDACLogo from './assets/company_logo/CDAC-Noida-Logo.png';


// Education Section Logo's
import knitlogo from './assets/education_logo/KNIT-logo.png';
import board from './assets/education_logo/board.jpeg';

// // Project Section Logo's
import bgremover from './assets/work_logo/bgremover.jpg';
import jarvis from './assets/work_logo/jarvis.png';
import calci from './assets/work_logo/calci.png';
import todo from './assets/work_logo/todo.png';
import tictactoe from './assets/work_logo/tictactoe.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifylogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: CDACLogo,
      role: "Virtual Intern & Trainee - Ethical Hacking",
      company: "CDAC Noida",
      date: "April 2024 - June 2024",
      desc: "Completed a virtual internship at CDAC Noida focused on Ethical Hacking and Penetration Testing. Gained hands-on experience with various security tools and techniques such as footprinting, scanning, vulnerability assessment, and exploitation. Worked on real-world case studies and simulated environments to understand and mitigate cyber threats.",
      skills: [
        "Ethical Hacking",
        "Penetration Testing",
        "Kali Linux",
        "Wireshark",
        "Burp Suite",
        "Network Security",
        "Cybersecurity"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: knitlogo,
      school: "Kamla Nehru Institute Of Technology , Sultanpur",
      date: "Nov 2022 - Aug 2026",
      grade: "9.15 CGPA",
      desc: "I am currently pursuing a Bachelor of Technology (B.Tech) in Information Technology from Kamla Nehru Institute of Technology, Sultanpur. Throughout my academic journey, I have built a strong foundation in programming, data structures, algorithms, databases, and full-stack web development. My coursework and hands-on projects have equipped me with the skills to develop scalable web applications using the MERN stack.",
      degree: "Bachelor Of Technology - B.Tech",
    },
     {
      id: 1,
      img: board,
      school: "Sun Valley Public School , Varanasi",
      date: "Apr 2020 - Aug 2021",
      grade: "76.8%",
      desc: "Completed Intermediate from Sun Valley Public School, Varanasi with a strong academic record in the science stream. Developed a solid foundation in Physics, Chemistry, and Mathematics, which laid the groundwork for my interest in technology and problem-solving. Actively participated in academic competitions and school events.dditionally, I was known for maintaining discipline and curiosity in class. ",
      degree: "Intermediate",
    },  
  ];
  
  export const projects = [
    {
      id: 0,
      title: "To Do Alarm",
      description:
        "The To-Do Alarm is a feature that allows users to set reminders for their tasks or activities. It functions as a smart alarm system integrated within a task management interface, helping users stay organized and punctual.",
      image: todo,
      tags: [ "React","Tailwind CSS", "JavaScript"],
      github: "https://github.com/The-Rishabh-Mishra/To-Do-Alarm",
      webapp: "https://resplendent-gumdrop-e730b5.netlify.app/",
    },
    {
      id: 1,
      title: "Background Remover",
      description:
        "The Background Remover Website is a sleek and user-friendly web application that allows users to remove the background of images with just a few clicks. Built using HTML, CSS, and JavaScript, and powered by an external Background Removal API, this tool simplifies image editing for everyone—from content creators to designers.",
      image: bgremover,
      tags: [ "API","HTML5", "CSS", "JavaScript"],
      github: "https://github.com/The-Rishabh-Mishra/BackGround-Remover-Website",
      webapp: "https://lucent-phoenix-798b4a.netlify.app/",
    },
    {
      id: 2,
      title: "Virtual Assistant-Jarvis",
      description:
        "J.A.R.V.I.S (Just A Rather Very Intelligent System) is a voice-powered virtual assistant web application inspired by the iconic AI from the Iron Man movies. Built using HTML, CSS, and JavaScript, this assistant is designed to interact with users through voice commands and provide intelligent responses or actions in real time.",
      image: jarvis,
      tags: ["HTML5", "CSS", "JavaScript"],
      github: "https://github.com/The-Rishabh-Mishra/Virtual-Assistant-JARVIS",
      webapp: "https://lovely-rabanadas-563464.netlify.app/",
    },
    {
      id: 3,
      title: "Scientific Calculator",
      description:
        " The Scientific Calculator is a powerful and user-friendly web application developed using HTML, CSS, and JavaScript. It goes beyond basic arithmetic operations by offering advanced scientific functions such as trigonometric calculations (sin, cos, tan), logarithmic functions, square roots, exponentiation, and more.",
      image: calci,
      tags: [  "JavaScript","HTML5", "CSS",],
      github: "https://github.com/The-Rishabh-Mishra/Calculator",
      webapp: "https://whimsical-lebkuchen-ca416f.netlify.app/",
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      description:
        " The Scientific Calculator is a powerful and user-friendly web application developed using HTML, CSS, and JavaScript. It goes beyond basic arithmetic operations by offering advanced scientific functions such as trigonometric calculations (sin, cos, tan), logarithmic functions, square roots, exponentiation, and more.",
      image: tictactoe,
      tags: [  "HTML5","JavaScript", "CSS",],
      github: "https://github.com/The-Rishabh-Mishra/Tic-Tac-Toe",
      webapp: "https://heroic-biscotti-fffbad.netlify.app/",
    },
  ];  