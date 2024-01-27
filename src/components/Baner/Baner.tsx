import React from 'react';
import './Baner.scss';
import { Container } from '../Container';

export const Baner: React.FC = () => {
  return (
    <div className="baner page__section">
      <Container>
        <div className="baner__content">
          <div className="baner__container baner__container--img">
            <div className="baner__photo-box">
              <img
                className="baner__photo"
                src="./img/dog-banner.png"
                alt="Banner dog"
              />
            </div>
          </div>

          <div className="baner__container">
            <div className="baner__info">
              <h1 className="baner__title">
                What is “Pets Home”?
              </h1>

              <p className="baner__text">
                We transform lives and foster friendships.
                Our project addresses the issue of stray animals through humane adoption solutions.
                Explore our free online platform to discover your new companion
                or assist a pet in finding its family.
                <br />
                <br />
                Welcome to a community where every paw seeks a joyful future!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
