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
import { FloatButton } from "antd";
import { defaultTheme } from "../theme/appTheme";
import IonIcon from "../components/IonIcon";

const Main = () => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    // tl.fromTo(".animation-nav", { opacity: 0 }, { opacity: 1, duration: 1 });
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
      <Blogs />
      <Contact />
      <Footer />
      <FloatButton.BackTop
        style={{
          background: `${defaultTheme.accentColor}`,
          borderRadius: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "40px",
          width: "40px",
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
          color: "#fff",
        }}
        icon={<IonIcon iconName="caret-up-outline" />}
        shape="square"
      />
    </>
  );
};

export default Main;
