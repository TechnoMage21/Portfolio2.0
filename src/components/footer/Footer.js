import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className={`footer-div ${isDark ? "dark-mode" : ""}`}>
        <p className="footer-text">
          {emoji("Made with ❤️ by Om Gupta")}
        </p>
        <p className="footer-text">
          Theme by{" "}
          <a
            href="https://github.com/TechnoMage21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Om Gupta's GitHub Profile"
          >
            Om Gupta
          </a>
        </p>
      </div>
    </Fade>
  );
}
