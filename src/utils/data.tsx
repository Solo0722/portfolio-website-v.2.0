import styled from "styled-components";
import IonIcon from "../components/IonIcon";

export const ExperienceBox = styled.div`
  display: flex;
  flex-direction: column;

  p,
  h4 {
    line-height: 1.6rem;
  }
`;

export const navLinks = [
  {
    name: "Home",
    url: "#home",
  },
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Projects",
    url: "#projects",
  },
  {
    name: "Blogs",
    url: "#blogs",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

export const socialMedia = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/solomon-owusu-ansah-a68668223",
    icon: <IonIcon iconName="logo-linkedin" />,
  },
  {
    name: "Github",
    link: "https://github.com/solo0722",
    icon: <IonIcon iconName="logo-github" />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/@KhobbySolo",
    icon: <IonIcon iconName="logo-twitter" />,
  },
];

export const servicesData = [
  {
    image: <IonIcon iconName="trophy-outline" />,
    name: "awards",
    startValue: "00",
    endValue: "02",
  },
  {
    image: <IonIcon iconName="code-working-outline" />,
    name: "years experience",
    startValue: "00",
    endValue: "03",
    endIcon: "+",
  },
  {
    image: <IonIcon iconName="people-outline" />,
    name: "clients",
    startValue: "00",
    endValue: "04",
  },
  {
    image: <IonIcon iconName="laptop-outline" />,
    name: "projects",
    startValue: "00",
    endValue: "10",
    endIcon: "+",
  },
];

export const skillsets = [
  "Javascript",
  "React",
  "Typescript",
  "React Native",
  "Nextjs",
  "Electronjs",
  "Python",
  "Sanity.io",
  "Firebase",
  "Mongodb",
  "Nodejs",
  "Git",
];

export const experienceData = [
  {
    children: (
      <ExperienceBox>
        <h4 className="experience-animation-text">
          (Remote Work - Internship) Frontend developer Intern, JLS Trading Co.
          USA
        </h4>
        <p className="experience-animation-text">
          Worked as an intern where I worked on fixing bugs in the console and
          on the responsiveness of the application. I also contributed to the
          creation of other important components in the application.
        </p>
        <p className="experience-animation-text">
          November 2022 - January 2023
        </p>
      </ExperienceBox>
    ),
  },
  {
    children: (
      <ExperienceBox>
        <h4 className="experience-animation-text">
          (Remote Work - Internship) Frontend developer Intern, JLS Trading Co.
          USA
        </h4>
        <p className="experience-animation-text">
          Worked as an intern where I worked on fixing bugs in the console and
          on the responsiveness of the application. I also contributed to the
          creation of other important components in the application.
        </p>
        <p className="experience-animation-text">
          November 2021 - January 2022
        </p>
      </ExperienceBox>
    ),
  },
  {
    children: (
      <ExperienceBox>
        <h4 className="experience-animation-text">
          Bachelor's Degree in Computer Engineering, KNUST
        </h4>
        <p className="experience-animation-text">
          I am currently pursuing BSc. Computer Engineering in Kwame Nkrumah
          University of Science and Technology.
        </p>
        <p className="experience-animation-text">
          January 2021 - September 2024
        </p>
      </ExperienceBox>
    ),
  },
];

export const projects = [
  {
    name: "Streamline",
    description: "Streamline is a tech blog website",
    tools: ["React", "Sanity"],
    url: "https://streamline-one.vercel.app",
    github_repo: "https://github.com/solo0722",
    image_url:
      "https://ik.imagekit.io/5kwcgtj3iv/images/streamline.png?updatedAt=1685980343905",
    projectType: "web",
  },
  {
    name: "Moviemix",
    description:
      "Information, Ratings, Reviews and Where to watch the best movies and tv shows.",
    tools: ["React", "TMDB Api"],
    url: "https://moviemix.vercel.app",
    github_repo: "https://github.com/solo0722",
    image_url:
      "https://ik.imagekit.io/5kwcgtj3iv/images/moviemix.png?updatedAt=1685980275617",
    projectType: "web",
  },
  {
    name: "Contaxts",
    description: "Contacts listing mobile app made with expo",
    tools: ["React Native", "Sanity", "Expo", "NativeBase"],
    url: "",
    github_repo: "https://github.com/solo0722",
    image_url: "/assets/contaxts.jpg",
    projectType: "mobile",
  },

  {
    name: "Deliveroo 2.0",
    description: "Deliveroo clone mobile application",
    tools: ["React Native", "Sanity", "Expo", "NativeBase"],
    url: "",
    github_repo: "https://github.com/solo0722",
    image_url: "/assets/deliveroo2.jpg",
    projectType: "mobile",
  },
  {
    name: "Word Finder",
    description:
      "Word Finder is a dictionary web application with speech recognition features",
    tools: ["ReactJs", "WordApi"],
    url: "https://wordfinder-gh.netlify.app/",
    github_repo: "https://github.com/solo0722",
    image_url:
      "https://ik.imagekit.io/5kwcgtj3iv/images/wordfinder.png?updatedAt=1685980347937",
    projectType: "web",
  },
  {
    name: "Ripple",
    description:
      "Ripple is an ecommerce web app for selling phone and its accessories.",
    tools: ["NextJS", "CommerceJS"],
    url: "https://ripple-sigma.vercel.app/",
    github_repo: "https://github.com/solo0722",
    image_url:
      "https://ik.imagekit.io/5kwcgtj3iv/images/ripple.png?updatedAt=1685980331800",
    projectType: "web",
  },
  {
    name: "Dotty",
    description:
      "Dotty is a news application where users can read about the latest news in the world of sports,politics,entertainment, etc",
    tools: ["React Native", "NewsApi", "Expo", "NativeBase"],
    url: "",
    github_repo: "https://github.com/solo0722",
    image_url: "/assets/newsapp.jpg",
    projectType: "mobile",
  },
  {
    name: "Image Resizer",
    description:
      "Image Resizer, as the name suggests, is a desktop application built with electronjs for resizing images to any dimensions you want.",
    tools: ["Electron", "Html", "Resizer package", "CSS"],
    url: "",
    github_repo: "https://github.com/solo0722",
    image_url: "/assets/newsapp.jpg",
    projectType: "desktop",
  },
];

export const blogs = [];
