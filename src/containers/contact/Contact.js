import React, { useContext } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

const ContactDetail = ({ type, value, href }) => (
  value ? (
    <>
      <a className={`contact-detail contact-detail-${type}`} href={href}>
        {value}
      </a>
      <br />
      <br />
    </>
  ) : null
);

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className={`heading contact-title ${isDark ? 'dark-mode' : ''}`}>
              {contactInfo.title}
            </h1>
            <p className={`subTitle contact-subtitle ${isDark ? 'dark-mode' : ''}`}>
              {contactInfo.subtitle}
            </p>
            <div className={`contact-text-div ${isDark ? 'dark-mode' : ''}`}>
              {/* Render phone number if it exists */}
              <ContactDetail type="phone" value={contactInfo.number} href={"tel:" + contactInfo.number} />

              {/* Render email if it exists */}
              <ContactDetail type="email" value={contactInfo.email_address} href={"mailto:" + contactInfo.email_address} />

              {/* Render Social Media links */}
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
