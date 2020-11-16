import React from "react";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Projects />
    </div>
  );
}

export default App;
