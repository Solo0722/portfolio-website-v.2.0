import React, { useLayoutEffect } from "react";
import Home from "../containers/home";
import About from "../containers/about";
import MainNav from "../components/MainNav";
import Projects from "../containers/projects";
import Blogs from "../containers/blogs";
import Contact from "../containers/contact";
import Services from "../containers/services";
import Experience from "../containers/experience";
import Footer from "../containers/footer";
import { Button, FloatButton } from "antd";
import { defaultTheme } from "../theme/appTheme";
import IonIcon from "../components/IonIcon";
import { gsap } from "gsap";

const Main = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    tl.fromTo(
      ".animation-text",
      { y: "100%", opacity: 0 },
      { y: "0%", opacity: 1, duration: 1, stagger: 0.25 },
      "-=1"
    );

    let sections = gsap.utils.toArray(".animation-section");

    sections.forEach((section: any) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "+=400 center",
          },
        })
        .fromTo(
          ".section-animation-text",
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, stagger: 0.25 },
          "-=1"
        );
    });
  }, []);

  return (
    <>
      <MainNav />
      <Home />
      <Services />
      <About />
      <Experience />
      <Projects />
      {/* <Blogs /> */}
      <Contact />
      <Footer />
      <FloatButton.BackTop
        style={{
          backgroundColor: "transparent",
          height: "40px",
          width: "40px",
        }}
        icon={<IonIcon iconName="caret-up-outline" />}
        shape="circle"
      />
    </>
  );
};

export default Main;
