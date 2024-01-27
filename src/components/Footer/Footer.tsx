/* eslint-disable */
import React, { memo } from 'react';
import { ReactSVG } from 'react-svg';
import { Logo } from '../Logo';
import './Footer.scss';
import { NavLink } from 'react-router-dom';
import { Container } from '../Container';

export const Footer: React.FC = memo(() => {

  return (
    <footer className="footer">
      <Container >
        <div className="footer__content">
          <div className="footer__item footer__item-logo">
            <Logo />
          </div>

          <div className="footer__item footer__item-nav">
            <div className="footer__nav-list">
              <NavLink
                to="/"
                className="footer__link"
              >
                About us
              </NavLink>

              <NavLink
                to="/adoption"
                className="footer__link"
              >
                Give for Adoption
              </NavLink>

              <NavLink
                to="/favorites"
                className="footer__link"
              >
                Favorited Pets
              </NavLink>

              <NavLink
                to="/contacts"
                className="footer__link"
              >
                Contact us
              </NavLink>
            </div>
          </div>

          <div className="footer__item footer__item-contacts">
            <ul className="footer__contacts-list">
              <li className="footer__contact-info">
                <p className="footer__contact-title">
                  Physical address
                </p>
                <a
                  href="https://maps.app.goo.gl/VhAycvH7Cek52o5a6"
                  target="_blank"
                  className="footer__contact-link"
                >
                  Lviv city, Frankivsk district, Naukova Street 32,
                  <br />
                  Organization for homeless animals "Pets Home"
                </a>
              </li>

              <li className="footer__contact-info">
                <p className="footer__contact-title">
                  Contact phone
                </p>
                <a
                  href="tel:+380669718922"
                  className="footer__contact-link"
                >
                  +38 066 971 89 22
                </a>
              </li>

              <li className="footer__contact-info">
                <p className="footer__contact-title">
                  E-mail address
                </p>
                <a
                  href="mailto:pets_home@gmail.com"
                  className="footer__contact-link"
                >
                  pets_home@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
});
