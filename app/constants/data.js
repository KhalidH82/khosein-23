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
  figma,
  webdev,
  ecomm,
  microservices,
  marketing,
  cms,
  content

} from "../../public/images";

const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "work",
    title: "Current Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: webdev,
  },
  {
    title: "Content Engineer",
    icon: content,
  },
  {
    title: "CMS",
    icon: cms,
  },
  {
    title: "JAMstack/Microservies",
    icon: microservices,
  },
  {
    title: "Marketing",
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
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Nuxt JS",
    icon: nuxt,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Contentful",
    // icon: contentful,
  },
  {
    name: "Directus",
    // icon: directus,
  },
  {
    name: "Nuxt/Content",
    // icon: nuxtcontent,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Netlify",
    // icon: netlify,
  },
  {
    name: "Github",
    icon: github,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer / Content Engineer",
    company_name: "T2 Marketing Communications",
    icon: "",
    iconBg: "",
    date: "June 2020 - September 2020 / August 2023 - Present",
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
    productivity: [
        "Slack",
        "SmartSheet",
        "Notion",
        "GitHub",
    ]
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Thorium Digital",
    icon: "",
    iconBg: "",
    date: "January 2022 - Present",
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
    ]
  },
];

export { navLinks, services, technologies, experiences };
