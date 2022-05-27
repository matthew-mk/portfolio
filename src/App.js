import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import HeroBackground from "./components/HeroBackground";

const App = () => {
  return (
    <>
      <HeroBackground />
      <Nav />
      <Hero />
    </>
  );
};

export default App;
