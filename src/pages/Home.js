import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import HeroBackground from "../components/HeroBackground";
import About from "../components/About";
import Skills from "../components/Skills";
import SocialMediaBanner from "../components/SocialMediaBanner";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

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
