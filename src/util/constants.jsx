import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import ts from "../assets/ts.png";
import next from "../assets/next.png";
import framer from "../assets/framer.png";
import stripe from "../assets/stripe.webp";
import node from "../assets/node-js.png";
import mongodb from "../assets/mongodb.png";
import mui from "../assets/mui.png";
import firebase from "../assets/Firebase.png";
import mysql from "../assets/mysql.png";
import { IoLocationOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { LuFacebook, LuGithub, LuInstagram } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import portfolio from "../assets/portfolio.jpeg";
import foodie from "../assets/foodie.jpeg";
import traveler from "../assets/traveler.jpeg";

export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: html,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: css,
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    Image: js,
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: tailwind,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: react,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: redux,
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    Image: ts,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 13",
    Image: next,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    Image: framer,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe Payment",
    Image: stripe,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    Image: node,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    Image: mongodb,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Material UI",
    Image: mui,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    Image: firebase,
    width: 55,
    height: 55,
  },
  {
    skill_name: "MySQL",
    Image: mysql,
    width: 70,
    height: 70,
  },
];

export const socialLinks = [
    {
      icon: <LuGithub />,
      link: "https://github.com/hammadm1r",
    },{
      icon: <LuFacebook/>,
      link:"https://www.facebook.com/hammad.mir.338?mibextid=ZbWKwL"
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://pk.linkedin.com/in/hammadm1r",
    },
    {
      icon: <FaInstagram />,
      link: "https://pk.linkedin.com/in/hammadm1r",
    },
  ];

  export const projects = [
    {
      title: "Personal Portfolio",
      description: "A personal portfolio website built with React, Tailwind CSS, and Vite.js, showcasing projects and development expertise with a fast and responsive design.",
      image: portfolio,
      techStack: [
        "React.js",
        "React Icons",
        "Vite",
        "TailwindCSS",
        "Figma",
        "Git",
      ],
      link: "#",
    },
    {
      title: "Traveler",
      description: "Traveler is a MERN-stack social platform where users can share travel experiences, follow others, and interact through posts. It features secure authentication, profile management, and an engaging feed.",
      image: traveler,
      techStack: [
        "React",
        "Redux Toolkit",
        "Node Js",
        "Express",
        "Cloudinary",
        "Mongo DB",
        "Vite",
        "Axios",
        "Multer",
        "React Icons",
        "TailwindCSS",
        "SweetAlert2",
        "JWT",
        "Git"
      ],
      link: "https://truetraveler.netlify.app/",
    },
    {
      title: "Foodie",
      description: "Foodie is a MERN-stack web app for ordering groceries, fast food, and essentials online. It features secure authentication, a responsive UI, and Stripe-powered payments.",
      image: foodie,
      techStack: [
        "React",
        "Redux Toolkit",
        "Node Js",
        "Express",
        "Stripe",
        "Mongo DB",
        "Cloudinary",
        "Vite",
        "Axios",
        "Multer",
        "React Icons",
        "TailwindCSS",
        "SweetAlert2",
        "JWT",
        "Git",
      ],
      link: "https://github.com/hammadm1r/Foodie-App",
    }
    
  ]
