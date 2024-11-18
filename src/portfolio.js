/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

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
  username: "Gourav Chahar",
  title: "Hi all, I'm Gourav",
  subTitle: emoji(
    "Passionate Full-Stack Developer and Cloud Enthusiast with a strong background in MERN stack development,cloud computing, and data visualization. Skilled in building scalable web applications, deploying solutions on Google Cloud,and creating insightful dashboards using Power BI and Tableau. Excellent problem-solving, collaboration, and project management abilities. Seeking a challenging role to drive innovation in web development, cloud solutions, and data analytics."  
  ),
  resumeLink:
    "https://drive.google.com/file/d/1yKsQb6IEPHEmwZnzXifWJHbLrkLCTa94/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/gouravchahar13",
  linkedin: "https://www.linkedin.com/in/gourav-chahar/",
  gmail: "gouravchahar1111@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop fully functional websites and Web Interfaces."
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ GCP / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Army Public School",
      logo: require("./assets/images/Aps.png"),
      subHeader: "Basic Education",
      duration: "April 2010 - June 2022",
      desc: "Actively participated in various activities and events.",
      descBullets: [
        "Graduted 12 with aggregate of 95%",
        "Graduated 10 with aggregate of 90%"
      ]
    },
    {
      schoolName: "Bangalore Institute Of Technology",
      logo: require("./assets/images/BIT.png"),
      subHeader: "Bachelor of Science in Computer Science : Data science",
      duration: "November 2022 - June 2026",
      desc: "Actively participated in various hackathons and events.",
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance web developer",
      company: "Self Employed",
      companylogo: require("./assets/images/freelance.png"),
      date: "June 2023 – Present",
      desc: "Made websites for various clients and worked on various projects. ",
      descBullets: [
        "Troubleshooted and resolved critical issues causing a WordPress website to crash, successfully bringing it back online.",
        "Built 5 websites for clients in the e-commerce, business, and personal blog sectors, increasing client sales by an average of 42%."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "HighOnSwift",
      companylogo: require("./assets/images/intern1.png"),
      date: "Oct 2023 – Nov 2023",
      desc: " Developed a e-commerce website for the company and worked on various projects which helped me to learn new technologies and frameworks.",
    },
    {
      role: "Software Engineer Intern",
      company: "Bharat Intern",
      companylogo: require("./assets/images/intern2.png"),
      date: "Sept 2023 – Oct 2023",
      desc: "Built 3 intricate web applications, demonstrating my expertise in web development and programming with React, Node.js, and MongoDB.", 
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ferrus.png"),
      projectName: "Ferrus Golf",
      projectDesc: "A clothing brand that sells golf clothing and accessories.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://ferrusgolf.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/snappyb.png"),
      projectName: "SnappyB",
      projectDesc: "A gen z clothing brand that sells clothing and accessories.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://snappyb.com/"
        }
      ]
    },
    {
      image: require("./assets/images/saree.png"),
      projectName: "Shreemati Sarees",
      projectDesc: "A saree brand that sells sarees and accessories.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://shreematisarees.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Cloud Certified",
      subtitle:
        "Completed the Cloud Fundamentals and General AI track  along with Machine Learning track on Google Cloud Platform. I have also added my profile link of google cloud skill boost below.",
      image: require("./assets/images/gcp.png"),
      imageAlt: "GCP Logo",
      footerLink: [
        {
          name: "GCP Profile",
          url: "https://www.cloudskillsboost.google/public_profiles/80a2fab3-8c6c-4d61-8ef0-7fd1609b6882"
        },
        
      ]
    },
    {
      title: "Postman Student Expert",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/postman.png"),
      imageAlt: "postman Logo",
      footerLink: [
        
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};





// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me "),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8073422047",
  email_address: "gouravchahar1111@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
