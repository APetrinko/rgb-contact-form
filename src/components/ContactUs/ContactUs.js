import React from 'react';
import worldLogo from '../../styles/icons/world-icon.svg';
import coach from '../../styles/icons/coach.png';
import bonus from '../../styles/icons/bonus.png';
import '../ContactUs/ContactUs.scss';

export const ContactUs = () => {
  return (
    <section className="contact">
      <div className="blur-circle-left"></div>

      <div className="blur-circle-right"></div>

      <div className="container">
        <div className="information">
          <div className="information__name">
            <img className="information__name-logo" src={worldLogo} alt="world-icon" />
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

          <div className="information__additional">
            <div className="information__additional-coach">
              <img src={coach} className="information__additional-coach-img"/>
              <div className="information__additional-couch-info">
                <h4>Кирило КАСАТОНОВ</h4>
                <p>6 років комерційного досвіду з такими команіями як Mercedes-Benz і іншими великими компаніями</p>
              </div>
            </div>

            <div className="information__additional-bonus">
              <img className="information__additional-bonus-img" src={bonus} alt="bonus"/>
              <div className="information__additional-bonus-info">
                <h4>Бонус за реєстрацію</h4>
                <p>PDF-файл "5 переваг фронтенд розробника"</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}
