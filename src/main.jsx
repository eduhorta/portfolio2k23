import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Nav />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </React.StrictMode>,
  document.getElementById("root")
);
