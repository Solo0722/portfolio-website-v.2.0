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
    </>
  );
};

export default Main;
