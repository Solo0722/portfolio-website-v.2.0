import styled from "styled-components";

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
    url:"#home",
  },
  {
    name: "About",
    url:"#about",
  },
  {
    name: "Projects",
    url:"#projects",
  },
  {
    name: "Blogs",
    url:"#blogs",
  },
  {
    name: "Contact",
    url:"#contact",
  },
]

export const socialMedia = [
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/solomon-owusu-ansah-a68668223",
    icon: <ion-icon name="logo-linkedin"></ion-icon>,
  },
  {
    name: "Github",
    link: "https://github.com/solo0722",
    icon: <ion-icon name="logo-github"></ion-icon>,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/@KhobbySolo",
    icon: <ion-icon name="logo-twitter"></ion-icon>,
  },
];
export const servicesData = [
  {
    image: <ion-icon name="trophy-outline"></ion-icon>,
    name: "awards",
    startValue: "00",
    endValue: "02",
  },
  {
    image: <ion-icon name="people-outline"></ion-icon>,
    name: "clients",
    startValue: "00",
    endValue: "50",
  },
  {
    image: <ion-icon name="code-working-outline"></ion-icon>,
    name: "years experience",
    startValue: "00",
    endValue: "03",
    endIcon: "+",
  },
  {
    image: <ion-icon name="laptop-outline"></ion-icon>,
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
        <p>November 2022 - January 2022</p>
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
        <p>November 2022 - January 2022</p>
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
        <p>November 2022 - January 2022</p>
      </ExperienceBox>
    ),
  },
];
