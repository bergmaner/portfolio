import React from "react";
import styled from "styled-components";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNpm,
  FaPhoneAlt,
  FaDiscord
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { GrGatsbyjs } from "react-icons/gr";

const Image = styled.img`
  width: 48px;
  height: 48px;
`;

export const menuOptions = [
  { content: "#about" },
  { content: "#skills" },
  { content: "#projects" },
  { content: "#contact" },
];

export const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#e34f26",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#264de4",
  },
  {
    name: "Sass",
    icon: <FaSass />,
    color: "#CD6799",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F0DB4F",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DBFB",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#3E2C00",
  },
  {
    name: "Npm",
    icon: <FaNpm />,
    color: "#CC3534",
  },
  {
    name: "Gatsby",
    icon: <GrGatsbyjs />,
    color: "#663399",
  },
  {
    name: "Firebase",
    icon: <Image src={require("../assets/images/firebase.svg")} />,
  },
  {
    name: "Redux",
    icon: <Image src={require("../assets/images/redux.svg")} />,
  },
];

export const contacts = [
  {
    icon: <FaPhoneAlt/>,
    text: "785167617",
    color: "#43cc08",
    path: "tel:+48785167617"
  },
  {
    icon: <FaDiscord/>,
    text: "Bergu#0813",
    color: "#7289DA",
    path: "https://discord.com/",
    target: "_blank"
  },
  {
    icon: <GrMail/>,
    text: "Bergkacper@gmail.com",
    color: "#D44638",
    path: "mailto:bergkacper@gmail.com"
  }
];

export const projects = [
  {
    title: "LearnEnglish",
    description: "learnEnglish_description",
    image: require("../assets/images/LearnEnglish.png"),
  },
  {
    title: "MovieFinder",
    description: "movieFinder_description",
    image: require("../assets/images/MovieFinder.png"),
  },
  {
    title: "Tetris",
    description: "tetris_description",
    image: require("../assets/images/Tetris.png"),
  },
  {
    title: "Portfolio",
    description: "portfolio_description",
    image: require("../assets/images/Portfolio.png"),
  },
];
