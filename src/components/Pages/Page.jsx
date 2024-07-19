import React from "react";
import Header from "../Header/Header";
import Me from "../Me/Me";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

const Page = () => {
  return (
    <div className="page">
      <Header />
      <Me />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default Page;
