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
    image: <IonIcon iconName="people-outline" />,
    name: "clients",
    startValue: "00",
    endValue: "50",
  },
  {
    image: <IonIcon iconName="code-working-outline" />,
    name: "years experience",
    startValue: "00",
    endValue: "03",
    endIcon: "+",
  },
  {
    image: <IonIcon iconName="laptop-outline" />,
    name: "projects",
    startValue: "00",
    endValue: "80",
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
        <h4>
          (Remote Work - Internship) Frontend developer Intern, JLS Trading Co.
          USA
        </h4>
        <p>
          Worked as an intern where I worked on fixing bugs in the console and
          on the responsiveness of the application. I also contributed to the
          creation of other important components in the application.
        </p>
        <p>November 2022 - January 2023</p>
      </ExperienceBox>
    ),
  },
  {
    children: (
      <ExperienceBox>
        <h4>
          (Remote Work - Internship) Frontend developer Intern, JLS Trading Co.
          USA
        </h4>
        <p>
          Worked as an intern where I worked on fixing bugs in the console and
          on the responsiveness of the application. I also contributed to the
          creation of other important components in the application.
        </p>
        <p>November 2021 - January 2022</p>
      </ExperienceBox>
    ),
  },
  {
    children: (
      <ExperienceBox>
        <h4>Bachelor's Degree in Computer Engineering, KNUST</h4>
        <p>
          I am currently pursuing BSc. Computer Engineering in Kwame Nkrumah
          University of Science and Technology.
        </p>
        <p>January 2021 - September 2024</p>
      </ExperienceBox>
    ),
  },
];
