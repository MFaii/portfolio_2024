import React from "react";
import CV from "/Maximiliano Failla CV.pdf";
import mail from "../../assets/mail.svg";
import profile from "../../assets/profile.jpg";

const Me = () => {
  return (
    <>
      <div className="me">
        <img src={profile} alt="profile-img" className="me-img" />
        <span className="me-title">Maximiliano Failla</span>
        <span className="me-subtitle">Desarrollador Web</span>
        <p className="me-description">
          ¡Hola, me dicen Fai! Estoy en búsqueda de mi primera oportunidad en el
          mundo IT. Conóceme más ⬇️
        </p>
        <div className="me-btn-cont">
          <button className="me-btn">
            <a href={CV} target="_blank">
              CV 📄
            </a>
          </button>
          <button className="me-btn">
            <a href="mailto:faillamaximiliano@gmail.com">
              Enviar Mail <img src={mail} />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Me;
