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

import { useTranslation } from "react-i18next";

//create context
export const ThemeContext = createContext();
export const LanguageContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");

  const [language, setLanguage] = useState("en");

  const { i18n } = useTranslation();

  //setting theme
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

  //setting language
  const toggleLanguage = () => {
    //save language to localStorage
    localStorage.setItem(
      "language",
      JSON.stringify(language === "en" ? "vi" : "en")
    );

    i18n.changeLanguage(language === "en" ? "vi" : "en");

    setLanguage((curr) => {
      return curr === "en" ? "vi" : "en";
    });
  };

  //get lang from localStorage
  useEffect(() => {
    const languageLocal = JSON.parse(localStorage.getItem("language"));

    i18n.changeLanguage(languageLocal);

    if (languageLocal) {
      setLanguage(languageLocal);
    }
  }, [i18n]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Container fluid className={`App p-0 ${theme}`}>
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
          <NavBar />
          <Banner />
          <About />
          <Skills />
          <ProjectsList />
          <Contact />
        </LanguageContext.Provider>
        <Footer />
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
