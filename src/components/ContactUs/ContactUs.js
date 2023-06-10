import React from 'react';
import worldLogo from '../../styles/icons/world-icon.svg';
import '../ContactUs/ContactUs.scss';

export const ContactUs = () => {
  return (
    <section className="contact">
      <div className="blur-circle-left"></div>
      
      <div className="blur-circle-right"></div>
      
      <div className="container">
        <div className="information">
          <div className="information__name">
            <img className="information__name-logo" src={worldLogo} alt="world-icon"/>
            <p className="information__name-text">Вебінар</p>
          </div>

          <div className="information__description">
            <h1 className="information__destcription-title">Front-end</h1>
            <h3 className="information__destcription-subtitle">
              <span className="rotate-span">
                <span className="unrotate-text">З нуля</span>
              </span>
              легкий старт в IT професії
            </h3>
            <p className="information__destcription-text">
              Дізнайтеся якими навичками повинен володіти <span className="bold-text">фронтенд розробник в 2022 році</span>
              і як розпочати кар'єру в затребуваній професії <span className="bold-text">із зарплатою</span>
              <div className="highlighted-text"> <span className="bold-text">від 1000$</span></div>
            </p>
          </div>

          
        </div>
          
      </div>
    </section >
  )
}
