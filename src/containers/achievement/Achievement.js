import React, { useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { achievementSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const { isDark } = useContext(StyleContext);

  if (!achievementSection.display) {
    return null;
  }

  const getClassNames = (type) => {
    return isDark ? `dark-mode ${type}` : type;
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className={getClassNames("heading achievement-heading")}>
              {achievementSection.title}
            </h1>
            <p className={getClassNames("subTitle achievement-subtitle")}>
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card) => (
              <AchievementCard
                key={card.title} // Use a unique identifier for the key
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
