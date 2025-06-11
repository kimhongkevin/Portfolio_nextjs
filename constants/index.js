import {facebook,telegram,github,instagram,linkedin,hero,bootstrap,cpp,csharp,css,figma,git,html,javascript,
  msql,nextjs,python,reactjs,tailwindcss,typescript,php,dotnet,portfolio,modern_bank,starbuck,deplacemaison,laravel} from '../assets/assets'

export const socialMedia = [
    {
        title: 'facebook',
        link: 'https://www.facebook.com/Ph.B.Kimhong',
        icon: facebook
    },
    {
        title: 'github',
        link: 'https://github.com/kimhongkevin',
        icon: github
    },
    {
        title: 'telegram',
        link: 'https://t.me/ph_kimhong',
        icon: telegram
    },
    {
        title: 'linkedin',
        link: 'https://www.linkedin.com/in/phoung-bophakimhong/',
        icon: linkedin
    }
]

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
]

export const heroData =  {
        name: "Kimhong",
        subtitle: "A Frontend Developer",
        description: "Welcome to my digital playground, where I'm exploring the world of frontend development and web design with curiosity and determination. As a junior developer and designer, I'm passionate about building clean, responsive interfaces and continuously improving my skills in both design and code. This portfolio showcases the projects I've worked on so far—each one a step forward in my journey to create user-friendly, visually engaging web experiences.",
        image: hero,
        buttonPortfolio: {text:'View My Work',link:'/portfolio'},
        buttonCV:{text:'Download My CV',link:'/PHOUNGBOPHAKIMHONG-CV-Internship.pdf'}
}

export const aboutData = {
  description: "Hi, I'm a Computer Science student at Western University and junior frontend developer with a background in Civil Engineering. I specialize in building responsive web interfaces using Next.js, React, and Tailwind CSS. Passionate about creating accessible digital experiences, I combine technical skills with creative problem-solving to develop clean, user-friendly applications. I'm constantly expanding my programming toolkit while applying my multicultural experience to deliver thoughtful solutions.",
  
  technologies: [
    {
      name: "HTML",
      logo: html, // Replace with your logo path or CDN link
    },
    {
      name: "CSS",
      logo: css,
    },
    {
      name: "JavaScript",
      logo: javascript,
    },
    {
      name: "TypeScript",
      logo: typescript,
    },
    {
      name: "Bootstrap",
      logo: bootstrap,
    },
    {
      name: "Tailwind CSS",
      logo: tailwindcss,
    },
    {
      name: "ReactJS",
      logo: reactjs,
    },
    {
      name: "Next.js",
      logo: nextjs,
    },
    {
      name: "C++",
      logo: cpp,
    },
    {
      name: "C#",
      logo: csharp,
    },
    {
      name: "PHP",
      logo: php,
    },
    {
      name: "Laravel",
      logo: laravel,
    },
    {
      name: "Python",
      logo: python,
    },
    {
      name: "SQL",
      logo: msql,
    },
    {
      name: "Figma",
      logo: figma,
    },
    {
      name: "Git",
      logo: git,
    },
  ],
  jobExperience: [
    {
      company: "Chip Mong Trading",
      period: "Jan-2024 to Sep-2024",
      jobTitle: "Steel Sales Executive",
    },
    {
      company: "HGB Auto Group - Mazda Cambodia",
      period: "August-2023 to Dec-2023",
      jobTitle: "Auto Service Advisor",
    },
    {
      company: "China State Construction Company Division 3",
      period: "Jan-2023 to June-2023",
      jobTitle: "Assistant of Production Manager",
    },
    {
      company: "China State Construction Company Division 4",
      period: "Jan-2022 to Dec-2022",
      jobTitle: "QA/QC Engineer",
    },
    {
      company: "Peng Hout Construction Company",
      period: "June-2021 to Dec-2021",
      jobTitle: "Structural Evaluation Engineer",
    },
    {
      company: "China Railway Construction Company",
      period: "August-2020 to April-2021",
      jobTitle: "QA/QC Engineer",
    },
    
  ],
  education: [
    {
      institution: "Western University (Cambodia)",
      period: "2024-present",
      degree: "Bachelor of Computer Science"
    },
    // {
    //   institution: "Wuhan University (China)",
    //   period: "2016-2020",
    //   degree: "Bachelor of Civil Engineering"
    // },
    // {
    //   institution: "Tongji University (China)",
    //   period: "2015-2016",
    //   degree: "Chinese Language Pre-University"
    // },
    {
      institution: "Institute of Technology of Cambodia",
      period: "2014-2017",
      degree: "Foundation Year of Bachelor"
    },
    {
      institution: "Cheasim Samaky High School",
      period: "2009-2014",
      degree: "High School Education"
    },
    {
      institution: "Steung Meanchey Primary School",
      period: "2003-2009",
      degree: "Primary Education"
    }
  ]
};

export const projectData = [
  {
    id:1,
    title:"Portfolio Website",
    desc: "This portfolio website is a showcase of my skills and projects as a frontend developer. It features a clean, responsive design built with Next.js and Tailwind CSS, highlighting my work in web development and design.",
    img: portfolio,
    link:"https://portfolio-nextjs-eight-self.vercel.app/",
  },
  {
    id:2,
    title:"Modern Bank",
    desc: "This modern banking application is designed to provide users with a seamless and intuitive banking experience. Built with ReactJS and Tailwind CSS, it features a clean interface and responsive design, making it easy to manage finances on any device.",
    img: modern_bank,
    link:"https://kimhongkevin.github.io/bank_modern_app/",
  },
  {
    id:3,
    title:"Starbuck Reward Website",
    desc: "This small project is a rewards program website for Starbucks customers. It is a static website built with Bootstrap.",
    img: starbuck,
    link:"https://kimhongkevin.github.io/starbuck_reward_website/",
  },
  {
    id:4,
    title:"Deplace Maison",
    desc: "This small project is a website for a clothes store called Deplace Maison. It is a static website built with Bootstrap.",
    img: deplacemaison,
    link:"https://kimhongkevin.github.io/deplacemaison/",
  },
]

// SVG Icons for Contact Page
export const ContactInfoItems = [
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-4' fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21z" />
          </svg>,
    title: "Phone",
    value: "015-366-268 / 017-790-886",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-4' viewBox="0 0 512 512">
            <path fill="currentColor" d="M470.435 45.423L16.827 221.249c-18.254 8.188-24.428 24.585-4.412 33.484l116.37 37.173l281.368-174.79c15.363-10.973 31.091-8.047 17.557 4.024L186.053 341.075l-7.591 93.076c7.031 14.371 19.905 14.438 28.117 7.295l66.858-63.589l114.505 86.187c26.595 15.826 41.066 5.613 46.788-23.394l75.105-357.47c7.798-35.705-5.5-51.437-39.4-37.757"/>
          </svg>,
    title: "Telegram",
    value: "@ph_kimhong / 017-790-886",
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-4' viewBox="0 0 24 24">
              <path fill="currentColor" d="M2 20V4h20v16zm10-7l8-5V6l-8 5l-8-5v2z"/>
          </svg>,
    title: "Email",
    value: "kimhongphb96@gmail.com",
  }
]

export const SuccessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

  