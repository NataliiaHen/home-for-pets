import './PetCard.scss';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import React, { useContext, memo } from 'react';
import { ReactSVG } from 'react-svg';
import { ButtonHeart } from '../ButtonHeart';
import { AdoptBtn } from '../AdoptBtn';

// type Props = {
//   pet?: Product;
// };

export const PetCard: React.FC = memo(() => {
  const itemId = 1;

  return (
    <li className="pet-card">
      <div className="pet-card__img-container">
        <Link to={`/${itemId}`} className="pet-card__link-img">
          <img
            src="img/pets/grinka/image-1.jpg"
            alt="Grinka"
            className="pet-card__img"
          />
        </Link>

        <div className="pet-card__fav-btn">
          <ButtonHeart />
        </div>
      </div>

      <div className="pet-card__detail">
        <Link to={`/${itemId}`}>
          <p className="pet-card__name">Grinka</p>
        </Link>

        <div className="pet-card__info-block">
          <div className="pet-card__info">
            <div className="pet-card__icon-box">
              <ReactSVG src="img/icon/female.svg" className="pet-card__icon" />
            </div>

            <div className="pet-card__info-text">Female</div>
          </div>

          <div className="pet-card__info">
            <div className="pet-card__icon-box">
              <ReactSVG
                src="img/icon/calendar.svg"
                className="pet-card__icon"
              />
            </div>

            <div className="pet-card__info-text">1 year</div>
          </div>
        </div>

        <div className="pet-card__buttons">
          <AdoptBtn>Adopt</AdoptBtn>
        </div>
      </div>
    </li>
  );
});
