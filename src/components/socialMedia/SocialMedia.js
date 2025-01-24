import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

const iconMapping = {
  github: "fab fa-github",
  linkedin: "fab fa-linkedin-in",
  gmail: "fas fa-envelope",
  gitlab: "fab fa-gitlab",
  facebook: "fab fa-facebook-f",
  instagram: "fab fa-instagram",
  twitter: "fab fa-twitter",
  medium: "fab fa-medium",
  stackoverflow: "fab fa-stack-overflow",
  kaggle: "fab fa-kaggle"
};

export default function SocialMedia() {
  if (!socialMediaLinks.display) return null;

  return (
    <div className="social-media-div">
      {Object.keys(socialMediaLinks).map((key) => {
        if (socialMediaLinks[key] && key !== "display") {
          return (
            <a
              key={key}
              href={key === "gmail" ? `mailto:${socialMediaLinks[key]}` : socialMediaLinks[key]}
              className={`icon-button ${key}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={iconMapping[key]}></i>
              <span></span>
            </a>
          );
        }
        return null;
      })}
    </div>
  );
}
