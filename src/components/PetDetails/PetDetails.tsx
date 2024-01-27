import './PetDetails.scss';
import classNames from 'classnames';
import React, { memo, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { AdoptBtn } from '../AdoptBtn';
import { ButtonHeart } from '../ButtonHeart';

export const PetDetails: React.FC = memo(() => {
  const [selectedImg, setSelectedImg] = useState('img/pets/grinka/image-1.jpg');
  const [current, setCurrent] = useState(0);
  const length = 4;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="pet-details">
      <section
        className="pet-details__section"
      >
        <div className="pet-details__grid">
          <div className="pet-details__photos">
            <div className="pet-details__big-photo-container">
              <div className="pet-details__photo-slide-btns">
                <button
                  type="button"
                  className="pet-details__button-move pet-details__button-move--left"
                  onClick={prevImg}
                  disabled={current === 0}
                >
                  <ReactSVG
                    className="pet-details__slider-arrow"
                    src="img/icon/Arrow-Left.svg"
                  />
                </button>

                <button
                  type="button"
                  className="pet-details__button-move pet-details__button-move--right"
                  onClick={nextImg}
                  disabled={current === 3}
                >
                  <ReactSVG
                    className="pet-details__slider-arrow"
                    src="img/icon/Arrow-Right.svg"
                  />
                </button>
              </div>

              <img
                alt="product"
                className="pet-details__big-img"
                src={selectedImg}
              />
            </div>

            <div className="pet-details__small-photos">
              {[1, 2, 3, 4].map((num) => (
                <>
                  { selectedImg !== `img/pets/grinka/image-${num}.jpg` && (
                    <div
                      key={num}
                      className={classNames(
                        'pet-details__small-photo-container',
                        {
                          'pet-details__small-photo-container--selected':
                            selectedImg === `img/pets/grinka/image-${num}.jpg`,
                        },
                      )}
                      onClick={() => setSelectedImg(`img/pets/grinka/image-${num}.jpg`)}
                      aria-hidden
                    >
                      <img
                        alt="product"
                        className="pet-details__small-img"
                        src={`img/pets/grinka/image-${num}.jpg`}
                      />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>

          <div className="pet-details__info">
            <h2 className="pet-details__name">
              Grinka
            </h2>

            <ul className="pet-details__info-list">
              <li className="pet-details__item">
                <h3 className="pet-details__item-title">
                  Age:
                </h3>
                <p className="pet-details__item-text">
                  8 months
                </p>
              </li>

              <li className="pet-details__item">
                <h3 className="pet-details__item-title">
                  Type:
                </h3>
                <p className="pet-details__item-text">
                  Cat
                </p>
              </li>

              <li className="pet-details__item">
                <h3 className="pet-details__item-title">
                  Gender:
                </h3>
                <p className="pet-details__item-text">
                  Female
                </p>
              </li>

              <li className="pet-details__item">
                <h3 className="pet-details__item-title">
                  Contact details:
                </h3>
                <p className="pet-details__item-text">
                  +38 028 971 89 22
                </p>
              </li>

              <li className="pet-details__item pet-details__item--big">
                <h3 className="pet-details__item-title">
                  Description:
                </h3>
                <p className="pet-details__item-text">
                  Grinka playful and affectionate companion, awaits a forever home. With a charming mix of curiosity and a gentle nature, She brings joy to every moment. Ready to share a lifetime of love, this delightful friend is patiently waiting for someone special. Adopt and brighten your days with boundless happiness.
                </p>
              </li>
            </ul>

            <div className="pet-details__buttons">
              <AdoptBtn>Adopt</AdoptBtn>

              <ButtonHeart />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
});
