import {
  javascript,
  html,
  css,
  reactjs,
  vue,
  nuxt,
  next,
  tailwind,
  nodejs,
  git,
  github,
  githubmarquee,
  gmail,
  linkedin,
  figma,
  webdev,
  ecomm,
  microservices,
  marketing,
  cms,
  content,
  contentful,
  netlify,
  directus,
} from "../../public/images";

const navLinks = [
  {
    id: "about",
    title: "About Me",
    link: "/#about",
  },
  {
    id: "work",
    title: "Agency Experience",
    link: "",
    sublink: [
      {
        agency: "T2 Marketing Communications",
        link: "/tmarcom",
      },
      {
        agency: "Thorium Digital",
        link: "/thorium",
      },
    ],
  },
  {
    id: "clients",
    title: "Clients",
    link: "/clients",
  },
  {
    id: "contact",
    title: "Contact",
    link: "/#contact",
  },
  {
    id: "nzr-digital",
    title: "NZR Digital",
    link: "/nzr-digital",
    // sublink: [
    //   {
    //     agency: "T2 Marketing Communications",
    //     link: "",
    //   },
    // ],
  },
  {
    id: "resume",
    title: "Resume",
    link: "/KHosein24.pdf",
  },
];

const footerLinks = [
  {
    id: "google",
    title: "Google",
    icon: gmail,
    link: "mailto:khalid.hosein9@gmail.com",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/khalid-hosein/",
  },
  {
    id: "github",
    title: "Github",
    icon: github,
    link: "https://github.com/KhalidH82",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "Content Engineer / CMS",
    icon: content,
  },
  {
    title: "Design",
    icon: cms,
  },
  {
    title: "API / Microservices",
    icon: microservices,
  },
  {
    title: "Marketing / SEO",
    icon: marketing,
  },
  {
    title: "E Commerce",
    icon: ecomm,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Nuxt JS",
    icon: nuxt,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Contentful",
    icon: contentful,
  },
  {
    name: "Directus",
    icon: directus,
  },
  // {
  //   name: "Nuxt/Content",
  //   // icon: nuxtcontent,
  // },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Netlify",
    icon: netlify,
  },
  {
    name: "Github",
    icon: githubmarquee,
  },
];

const tmarcomExperience = {
  title: "Full Stack Web Developer / Content Engineer",
  company_name: "T2 Marketing Communications",
  company_link: "http://t2marcom.com/",
  date: "June 2020 - September 2020 / August 2022 - Present",
  description:
    "As a full stack web developer at an content marketing agency, I specialize in crafting cutting-edge marketing websites for global industrial technology firms. My role revolves around designing and constructing SEO-optimized, content-driven websites that seamlessly integrate with various CMS platforms like Nuxt Content and Directus. Leveraging the power of Vue/Nuxt 3, Tailwind, Node.js, and the efficiency of Netlify, I architect headless solutions that empower both internal and external stakeholders to effortlessly manage content throughout their digital platforms. Collaborating within a dynamic cross-functional team comprising content creators, email marketers, and designers, I thrive on bringing innovation and precision to every project, ultimately elevating our clients' digital presence.",
  icon: "",
  iconBg: "",
  points: [],
  technologies: [
    "Vue/Nuxt JS",
    "Directus",
    "Nuxt Content",
    "Tailwind CSS",
    "DaisyUI",
    "Netlify",
    "Algolia",
    "SnipCart",
    "Nunjucks",
    "Eleventy",
    "Jotform",
    "Postmark",
    "Zapier",
    "Klaviyo",
  ],
  productivity: ["Slack", "SmartSheet", "Notion", "GitHub"],
};

const thoriumExperience = {
  title: "Full Stack Web Developer",
  company_name: "Thorium Digital",
  company_link: "https://www.thoriumdigital.com/",
  date: "January 2022 - July 2023",
  description:
    "As a web developer at Thorium Digital, I take pride in developing and building user-friendly multi-locale web applications that harness the power of cutting-edge technologies. With a diverse skill set, I utilize HTML, CSS, and JavaScript to create seamless and dynamic user interfaces. My proficiency in jQuery, React/Next.js, and Node/Express enables me to craft interactive and engaging web experiences. I have hands-on experience with PHP/Laravel, Angular, TypeScript, and Tailwind CSS, ensuring the development of scalable and performant applications. At Thorium Digital, I have been actively involved in a variety of responsibilities. From content updates to building new UI features, I work diligently to enhance mobile-responsive layouts and templates, all while refactoring existing code to ensure flexibility, sustainability, and reusability across 40+ multi-locale sites.",
  icon: "",
  iconBg: "",
  points: [],
  technologies: [
    "React/Next JS",
    "Angular",
    "PHP",
    "Laravel",
    "Node/Express",
    "CSS / SCSS",
    "Tailwind CSS",
    "Umbraco",
    "Webflow/ CMS",
    "Shopify",
    "Blade",
    "Handlebars",
    "Gulp",
    "Apache",
    "Bower",
    "Nunjucks",
    "Eleventy",
  ],
  productivity: [
    "Microsoft Teams",
    "Jira",
    "Bitbucket",
    "SourceTree",
    "GitHub",
  ],
};

const thorium = [
  {
    name: "Ciroc",
    link: "https://www.ciroc.com/en-us/",
    image: "/images/thorium/ciroc.png",
    featured: true,
  },
  {
    name: "Don Julio",
    link: "https://www.donjulio.com/en-us",
    image: "/images/thorium/donjulio.png",
    featured: true,
  },
  {
    name: "Casamigos",
    link: "https://www.casamigos.com/en-us",
    image: "/images/thorium/casamigos.png",
    featured: true,
  },
  {
    name: "Buchanans",
    link: "https://www.buchananswhisky.com/en-us/",
    image: "/images/thorium/buchanans.png",
    featured: true,
  },
  {
    name: "Belsazar",
    link: "https://www.belsazar.com/",
    image: "/images/thorium/belsazar.png",
    featured: false,
  },
  {
    name: "Mortlach",
    link: "https://www.mortlach.com/",
    image: "/images/thorium/mortlach.png",
    featured: false,
  },
  {
    name: "Orphan Barrel",
    link: "https://www.orphanbarrel.com/",
    image: "/images/thorium/orphanbarrel.png",
    featured: false,
  },
  {
    name: "JB Scotch",
    link: "https://www.jbscotch.com/en/",
    image: "/images/thorium/jbscotch.png",
    featured: false,
  },
  {
    name: "Cascade Moon",
    link: "https://www.cascademooneditions.com/",
    image: "/images/thorium/cascademoon.png",
    featured: false,
  },
  {
    name: "Copper Dog",
    link: "https://www.copperdogwhisky.com/en-us/",
    image: "/images/thorium/copperdog.png",
    featured: false,
  },
  {
    name: "Deleon",
    link: "https://www.deleontequila.com/",
    image: "/images/thorium/deleon.png",
    featured: false,
  },
  {
    name: "Bulleit",
    link: "https://www.bulleit.com/",
    image: "/images/thorium/bulleit.png",
    featured: false,
  },
  {
    name: "Guinness Brewery Baltimore",
    link: "https://www.guinnessbrewerybaltimore.com/",
    image: "/images/thorium/guinnessopengate.png",
    featured: false,
  },
  {
    name: "Seedlip",
    link: "https://www.seedlipdrinks.com/en-us/",
    image: "/images/thorium/seedlip.png",
    featured: false,
  },
  {
    name: "Stitzel Weller",
    link: "https://www.stitzelwellerdistillery.com/",
    image: "/images/thorium/stitzelweller.png",
    featured: false,
  },
];

const tmarcom = [
  {
    name: "MENNEKES",
    link: "https://www.mennekes.com/",
    image: "/images/t2/mennekes.png",
    featured: true,
  },
  {
    name: "World Water Works",
    link: "https://www.worldwaterworks.com/",
    image: "/images/t2/www.png",
    featured: true,
  },
  {
    name: "HandyTube",
    link: "https://www.handytube.com/",
    image: "/images/t2/handytube.png",
    featured: true,
  },
  {
    name: "168 Manufacturing",
    link: "https://168mfg.com/",
    image: "/images/t2/168.png",
    featured: true,
  },
  {
    name: "Hunter Products",
    link: "https://www.hunterproducts.com/",
    image: "/images/t2/hunter.png",
    featured: false,
  },
  {
    name: "Sigmanetics",
    link: "https://www.sigmanetics.com/",
    image: "/images/t2/sigmanetics.png",
    featured: false,
  },
  {
    name: "Magnaplate",
    link: "https://www.magnaplate.com",
    image: "/images/t2/generalmagnaplate.png",
    mobileImage: "/images/t2/generalmagnaplate-mobile.png",
    featured: true,
  },
  {
    name: "Akribis",
    link: "https://akribis-sys.com/",
    image: "/images/t2/akribis.png",
    featured: false,
  },
];

const clients = [
  {
    name: "Mastermind Construction SXM",
    date: "September 2023",
    description: `I had the privilege of collaborating with a valued client, a prominent construction business based in Saint Martin, FWI., as a web developer on an existing WordPress website. My role encompassed customizing and expanding the site's layout to enhance its visual appeal and functionality. From crafting engaging content to guiding the overall direction of the project, I was deeply involved in every aspect of the website's evolution. It was a rewarding experience, and I'm proud to have played a pivotal role in bringing my client's digital vision to life.`,
    link: "https://mastermindsxm.com/",
    icon: "/images/clients/mastermind.png",
    testimonials: [
      "What can I say? Or better yet, what can't I say? It was a pleasure working with Khalid. Our previous website developer left us with an unfished product, and we didn't know what to do. Thankfully, Khalid was able to take on our project and give us a finished product that me and my team and I were proud of! He listened, advised, and executed. He was also EXTREMELY patient with us and the many changes and tweaks we needed for our finished piece. It was good to work with someone that gave us expert advice on what our website needed and what would make our website appealing to clients. We will DEFINITELY trust Khalid with additional projects in the future. -Hydie - MastermindSXM",
    ],
  },
];

export {
  navLinks,
  footerLinks,
  services,
  technologies,
  thoriumExperience,
  tmarcomExperience,
  thorium,
  tmarcom,
  clients,
};
