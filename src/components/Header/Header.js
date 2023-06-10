import React from 'react';
import '../Header/Header.scss';
import logo from '../../styles/icons/powercode-icon.svg';
import powercode from '../../styles/icons/POWERCODE.png';
import academy from '../../styles/icons/ACADEMY.png';
import calendar from '../../styles/icons/calendar-icon.svg';
import clock from '../../styles/icons/clock-icon.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="nav">
        <div className="nav__logo">
          <a href="/" className="nav__link-logo">
            <img src={logo} alt="Powercode logo" />
          </a>

          <div className="nav__name">
            <a href="/" className="nav__name-logo">
              <img src={powercode} alt="Powercode logo" />
            </a>
            <a href="/" className="nav__name-logo">
              <img src={academy} alt="Powercode logo" />
            </a>
          </div>
        </div>

        <div className="nav__meeting">
          <div className="nav__meeting-date">
            <img className="nav__meeting-date-img" src={calendar} alt="calendar" />
            <p className="nav__meeting-date-text">28 грудня</p>
          </div>

          <div className="nav__meeting-date">
            <img className="nav__meeting-date-img" src={clock} alt="clock" />
            <p className="nav__meeting-date-text">3.5 години</p>
          </div>
        </div>
      </div>
    </header>
  )
}
