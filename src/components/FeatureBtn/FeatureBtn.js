import { useContext } from "react";

import { BsSunFill, BsMoonFill } from "react-icons/bs";

import { ThemeContext } from "../../App";

import { LanguageContext } from "../../App";

const FeatureBtn = ({ onclickLinkHandler }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div
      className={`${theme} feature d-flex justify-content-between mt-3 mb-5 mt-md-0 mb-md-0`}
    >
      <div className="feature__theme-btn d-flex flex-column justify-content-center align-items-center">
        <BsSunFill
          style={{
            opacity: `${theme === "dark" ? "1" : "0"}`,
            height: `${theme === "dark" ? "100%" : "0"}`,
            transition: "all 1s ease",
          }}
          onClick={() => {
            onclickLinkHandler();
            toggleTheme();
          }}
        />
        <BsMoonFill
          style={{
            fontSize: "2rem",
            opacity: `${theme === "light" ? "1" : "0"}`,
            height: `${theme === "light" ? "100%" : "0"}`,
            transition: "all 1s ease",
          }}
          onClick={() => {
            onclickLinkHandler();
            toggleTheme();
          }}
        />
      </div>

      <div className="feature__language-btn d-flex flex-column justify-content-center align-items-center ms-3">
        <p
          className="m-0"
          style={{
            opacity: `${language === "en" ? "1" : "0"}`,
            lineHeight: `${language === "en" ? "auto" : "0"}`,
            transition: "all 0.6s ease",
          }}
          onClick={() => {
            onclickLinkHandler();
            toggleLanguage();
          }}
        >
          EN
        </p>
        <p
          className="m-0"
          style={{
            opacity: `${language === "vi" ? "1" : "0"}`,
            lineHeight: `${language === "vi" ? "auto" : "0"}`,
            transition: "all 0.6s ease",
          }}
          onClick={() => {
            onclickLinkHandler();
            toggleLanguage();
          }}
        >
          VI
        </p>
      </div>
    </div>
  );
};

export default FeatureBtn;
