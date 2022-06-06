import React from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HeroBackground from "../components/HeroBackground";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import SocialMediaBanner from "../components/SocialMediaBanner";

const Home = () => {
  return (
    <>
      <HeroBackground />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <SocialMediaBanner />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
