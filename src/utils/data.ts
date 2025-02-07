import image1 from "@/public/Posinove.png";
import image2 from "@/public/renthub.png";
import image3 from "@/public/trendsaf.png";
import image4 from "@/public/e-commerce.png";
import image5 from "@/public/basefood.png";

export const sliders = [
  {
    title: "Posinnove",
    description:
      "A project-based learning platform for front-end and back-end development, built using Node.js, Next.js, Tailwind CSS, and PostgreSQL.",
    link: "https://www.posinnove.com/",
    image: image1,
  },
  {
    title: "Renthub",
    description:
      "Renthub is a platform that provides rental housing solutions in Rwanda, starting its operations in Kigali. It is built using Node.js, React, TypeScript, Tailwind CSS Sequelize, and PostgreSQL to ensure a scalable and efficient experience",
    link: "https://renthub-fe-copy.vercel.app/",
    image: image2,
  },
  {
    title: "TrendsAf",
    description:
      "Modern Data Infrastructure For Emerging Economies, It is built using React and Tailwind CSS",
    link: "https://trendsaf.co/",
    image: image3,
  },
  {
    title: "e-commerce",
    description:
      "An E-commerce platform. It is built using Node.js, Sequelize ORM, Typescript, React.js, Tailwind CSS",
    link: "https://eagles-ec-fe-staging.vercel.app/",
    image: image4,
  },
  {
    title: "baseFood",
    description:
      "Agri-trade with real-time data from farmgate prices to shipping. It is built using React, Tailwind CSS, MUI and Flask",
    link: "#portfolio",
    image: image5,
  },
];

export const faqData = [
  {
    question: "What technologies do you use for full-stack development?",
    answer:
      "I work with modern full-stack technologies like React, Next.js, Node.js, Express, and MongoDB for the back-end, and PostgreSQL for relational data. I also use REST APIs, GraphQL, and other tools like Docker for containerization.",
  },
  {
    question: "How do you ensure the security of the applications you build?",
    answer:
      "I prioritize security by implementing HTTPS, user authentication with JWT or OAuth, role-based access control, and preventing common vulnerabilities like SQL injection, XSS, and CSRF attacks. I also regularly update dependencies to patch security flaws.",
  },
  {
    question:
      "How do you handle both front-end and back-end performance optimization?",
    answer:
      "For front-end, I use techniques like lazy loading, code splitting, and image optimization. On the back-end, I optimize database queries, use caching mechanisms, and apply load balancing to ensure high performance and scalability.",
  },
  {
    question:
      "Can you deploy and manage full-stack applications in production?",
    answer:
      "Yes, I can deploy full-stack applications using platforms like Heroku, AWS, or Vercel. I also manage CI/CD pipelines, monitor the applications, and ensure they run smoothly with auto-scaling and load balancing when needed.",
  },
  {
    question: "What is your approach to integrating and managing databases?",
    answer:
      "I work with both SQL and NoSQL databases depending on project needs. For structured data, I use SQL databases like PostgreSQL or MySQL, while for unstructured data, I use NoSQL databases like MongoDB. I ensure proper integration between databases and the server-side logic using ORMs like Sequelize or Mongoose.",
  },
];

export const navs = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Blogs", link: "#blogs" },
  { name: "FAQs", link: "#faq" },
  { name: "Contacts", link: "#contacts" },
];
