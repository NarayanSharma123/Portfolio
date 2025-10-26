import React from "react";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Policy from "./pages/Policy";
import Footer from "./pages/Footer";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />

      <Contacts />
      <Policy />
      <Footer />
    </div>
  );
};

export default App;
