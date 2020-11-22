import React, { useEffect, useState } from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import "./App.scss";

function App() {
  const [visibleNav, setVisibleNav] = useState(false);
  const [hideNav, sethideNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 650) {
        setVisibleNav(true);
        sethideNav(true);
      } else {
        setVisibleNav(false);
        sethideNav(false);
      }
    });
  }, []);
  return (
    <div className="App">
      <Header />
      <Nav style visible={visibleNav} />
      <Nav hide={hideNav} />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
