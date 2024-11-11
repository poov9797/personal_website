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
  username: "Poovarasan Rajedniran",
  title: "Hi ,I'm Poov",
  subTitle: emoji(
    "A passionate Data Science professional 🚀 having an experience of building and deploying production grade machine learning applications with Langchain, Tensorflow, Docker, Kubernetes and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://s3.us-east-1.amazonaws.com/poovarasan.rajendiran/Poovarasan_Rajendiran.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/poov9797",
  linkedin: "https://www.linkedin.com/in/poovarasan-rajendiran/",
  gmail: "poovarasan9797@gmail.com",
  // gitlab: "https://github.com/poov9797",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crazy enthusist of Machine Intelligence who wants to make great AI products",
  skills: [
    emoji(
      "⚡ Design and develope robust and scalable machine learning pipelines to automate the end-to-end ML workflow, from data ingestion to model deployment."
    ),
    emoji("⚡ Deliver tailored data science solutions"),
    emoji(
      "⚡ Automate, integrate and maintain multiple-cloud infrastructure in AWS, Google cloud and Azure."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }, 
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Sussex",
      logo: require("./assets/images/Uni_Sussex.png"),
      subHeader: "Master of Science in Data Science",
      duration: "September 2022 - November 2023",
      desc: "Coursework:",
      descBullets: [
        "Algorithmic Data Science, Machine Learning, Applied Natural Language Processing, Data Analytics, Data Visualization, Advanced NLP, Image Processing, Data Science Research Methods, Mathematics and Computational Method."
      ]
    },
    {
      schoolName: "RMK College of Engineering and Technology",
      logo: require("./assets/images/RMKCET.jpeg"),
      subHeader: "Bachelor of Engineering in Mechanical Engineering",
      duration: "May 2015 - May 2019",
      desc: "Coursework:",
      descBullets: [
        "Principle of Management, Computer Graphics, Data Structures and Algorithms, Professional Ethics, ProcessPlanning and Cost Estimation, Computer Integrated Manufacturing Systems, Total Quality Management, Computer Aided Design, Engineering Economics and Project Maintenance."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Systems Engineer",
      company: "Infosys Ltd",
      companylogo: require("./assets/images/infy_logo_wb.jpg"),
      date: "June 2020 - September 2021",
      desc: "Developed recommendation and fraud detection systems, boosting engagement by 25% and reducing fraud by 40% with advanced models. Built real-time analytics with Kafka and Spark, optimized ML pipelines, and scaled solutions to handle high request volumes with minimal latency."
    },
    {
      role: "Systems Engineer",
      company: "Infosys Ltd",
      companylogo: require("./assets/images/infy_logo_wb.jpg"),
      date: "May 2019 - June 2020",
      desc: "Built a distributed training framework, cutting model training time by 40% and enhancing resource efficiency by 35% through infrastructure scaling. Streamlined model deployment and monitoring, improved pipeline throughput with Spark, and optimized GPU usage, reducing compute costs by 30%."
    },
    {
      role: "Artificial Intelligence Intern",
      company: "PANTECH.AI",
      companylogo: require("./assets/images/PS.jpeg"),
      date: "March 2024 – June 2024",
      desc: "Developed scalable ML pipelines for automated workflows, integrating tools like TensorFlow, PyTorch, and MLFlow for training, evaluation, and deployment. Optimized and monitored production models with Prometheus, Grafana, and Kubernetes, ensuring efficient, low-latency performance."
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
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Data Engineer - Associate",
      // subtitle:
      //   "poov",
      image: require("./assets/images/AWS_Data_Eng.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/6c9d26b1-ea72-4e57-9ec2-4a1585b61571/public_url"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Confluent Fundamentals Accreditation",
      image: require("./assets/images/Confluent_badge.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://certificates.confluent.io/01a47618-7781-4245-88a7-7de199ca14f9#acc.Qv63MHFN"
        },
      ]
    },
    {
      title: "IBM Data Analysis with Python",
      image: require("./assets/images/Data_Analysis_Badge.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/PBQQFFVR2DV5"
        },
      ]
    },
    {
      title: "DeepLearning.AI TensorFlow Developer",
      image: require("./assets/images/Deeplearning_logo.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/HC4A35PWMWD7"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44 07774955403",
  email_address: "poovarasan9797@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "poovarasan__r", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
