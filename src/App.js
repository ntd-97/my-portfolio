import { useState, createContext, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import "./App.scss";
import { Container } from "react-bootstrap";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    //save theme to localStorage
    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "light" ? "dark" : "light")
    );

    setTheme((curr) => {
      return curr === "light" ? "dark" : "light";
    });
  };

  //get theme from localStorage
  useEffect(() => {
    const themeLocal = JSON.parse(localStorage.getItem("theme"));
    if (themeLocal) {
      setTheme(themeLocal);
    }
  }, []);

  useEffect(() => {
    const themeLocal = JSON.parse(localStorage.getItem("theme"));
    if (themeLocal) {
      setTheme(themeLocal);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Container fluid className={`App p-0 ${theme}`}>
        <NavBar />
        <Banner />
        <About />
        <Skills />
        <ProjectsList />
        <Contact />
        <Footer />
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
