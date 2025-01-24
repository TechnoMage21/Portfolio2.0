/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Om Gupta",
  title: "Hi all, I'm Om Gupta",
  subTitle: emoji(
    "A passionate aspiring Full Stack Software Developer 🚀, recently graduated with an M.C.A., with a strong foundation in building Web Apps. Eager to apply my knowledge and continuously learn while contributing to the growth and success of an organization."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1RGQsL3LruFCvyf4vDHDBt_hMIITsJR4c/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/TechnoMage21/Portfolio2.0",
  linkedin: "https://www.linkedin.com/in/om-gupta-a54747319/",
  display: true
};

const skillsSection = {
  title: "About",
  subTitle: "CRAZY DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
    "⚡ Progressive Web Applications Stacks",
    "⚡ Integration of Learning",
    "⚡ Eager to continuously learn and apply new technologies to real-world projects"
  ],

  softwareSkills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "ReactJS",
    "PHP",
    "Git",
    "SQL Database",
    "Python"
  ],
  display: true, // Set false to hide this section, defaults to true
  style: {
    marginTop: "30px" // This adds space before the title
  }
};


// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maulana Abul Kalam Azad University of Technology, West Bengal",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Computer Application",
      duration: "August 2022 - August 2024",
      desc: "Department of Computer Applications, School of Information Science & Technology, MAKAUT, WB."
    },
    {
      schoolName: "Techno India (Hooghly Campus)",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Computer Application",
      duration: "July 2019 - July 2022",
      desc: "Department of Computer Application, Techno India (Hooghly Campus)"
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, // Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", // Insert stack or technology you have experience in
      progressPercentage: "70%" // Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section, need to change your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "FrontEnd Developer Intern",
      company: "Code Alpha",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Dec 2024 – Jan 2015"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects */
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "My Projects",
  projects: [
    {
      image: require("./assets/images/Om.jpg"),
      projectName: "DoctoPro",
      projectDesc: "DoctoPro Medical Data Authentication is a secure and robust process designed to ensure the integrity and authenticity of medical data within the DoctoPro system.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/TechnoMage21/DoctoPro"
        }
      ]
    },
    {
      image: require("./assets/images/Om.jpg"),
      projectName: "panval_ChromeExtension",
      projectDesc: "Panval Chrome Extension is a browser extension designed to focus on the study without distraction of social media.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/TechnoMage21/panval_ChromeExtension"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle: "Achievements",
  achievementsCards: [
    {
      title: "Microsoft Learn Student Ambassador",
      subtitle: "Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities and develop technical and career skills for the future.",
      image: require("./assets/images/Microsoft.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1ss0e65hWdVu_9MoBZskhHlIWYvo-vU2A/view"
        }
      ]
    },
    {
      title: "Flipkart GRiD 6.0 ",
      subtitle: "Participation in Flipkart GRiD 6.0 - Software Development Track (Quiz-Round)",
      image: require("./assets/images/flipkart.jpg"),
      imageAlt: "Flipkart GRiD 6.0",
      footerLink: [
        {
          name: "Certificate",
          url: "https://unstop.com/certificate-preview/b4168882-524a-46aa-8bc5-d8f50121bc5a"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "My Inbox is open for all.",
  email_address: "omgupta564@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "twitter", // Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be displayed as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
