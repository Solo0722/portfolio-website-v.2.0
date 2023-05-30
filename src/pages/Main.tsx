import React from "react";
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
import ServicesViewportBlock from "../containers/services";

const Main = () => {
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
        icon={<ion-icon name="caret-up-outline"></ion-icon>}
        shape="square"
      />
    </>
  );
};

export default Main;
