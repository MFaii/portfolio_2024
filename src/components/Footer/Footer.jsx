import React from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/tw.svg";
import mail from "../../assets/email.svg";

const items = [
  {
    icon: github,
    link: "https://github.com/MFaii",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/maximilianofailla/",
  },
  {
    icon: twitter,
    link: "https://x.com/FaillaMaxi",
  },
  {
    icon: mail,
    link: "mailto:faillamaximiliano@gmail.com",
  },
];
const Footer = () => {
  return (
    <section className="footer">
      <div className="social_media">
        {items.map((item, index) => {
          return (
            <a href={item.link} key={index} target="_blank">
              <img src={item.icon} alt={item.icon} />
            </a>
          );
        })}
      </div>
      <div className="footer_txt_mask">
        <p>&copy; 2024 Maximiliano Failla</p>
      </div>
    </section>
  );
};

export default Footer;
