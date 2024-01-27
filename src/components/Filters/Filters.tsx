/* eslint-disable */
import React, { memo } from 'react';
import './Filters.scss';
import { ReactSVG } from 'react-svg';
import { UkrainianDropdown } from '../UkrainianDropdown/UkrainianDropdown';

export const Filters: React.FC = memo(() => {
  return (
    <div className="filters">
      <form
        className="filters__form"
      >
        <div className="filters__type">
          <div className="filters__icon-box">
            <ReactSVG
              src="img/icon/paw.svg"
              className="filters__type-icon"
            />
          </div>
          Animal type
        </div>

        <div className="filters__fields">
          <div className="filters__radio-button">
            <input
              type="radio"
              id="all"
              name="type"
            />
            <label htmlFor="all" className="filters__custom-radio-label">
              <span className="filters__custom-radio" />
              All
            </label>
          </div>

          <div className="filters__radio-button">
            <input
              type="radio"
              id="dog"
              name="type"
            />
            <label htmlFor="dog" className="filters__custom-radio-label">
              <span className="filters__custom-radio" />
              Dog
            </label>
          </div>

          <div className="filters__radio-button">
            <input
              type="radio"
              id="cat"
              name="type"
            />
            <label htmlFor="cat" className="filters__custom-radio-label">
              <span className="filters__custom-radio" />
              Cat
            </label>
          </div>
        </div>
      </form>

      <form
        className="filters__form"
      >
        <div className="filters__type">
          <div className="filters__icon-box">
            <ReactSVG
              src="img/icon/gender.svg"
              className="filters__type-icon"
            />
          </div>
          Gender
        </div>

        <div className="filters__fields">
          <div className="filters__radio-button">
            <input
              type="radio"
              id="all-gender"
              name="gender"
            />
            <label htmlFor="all-gender" className="filters__custom-radio-label">
              <span className="filters__custom-radio" />
              All
            </label>
          </div>

          <div className="filters__radio-button">
            <input
              type="radio"
              id="male"
              name="gender"
            />
            <label htmlFor="male" className="filters__custom-radio-label">
              <span className="filters__custom-radio" />
              Male
            </label>
          </div>

          <div className="filters__radio-button">
            <input
              type="radio"
              id="female"
              name="gender"
            />
            <label htmlFor="female" className="filters__custom-radio-label">
              <span className="filters__custom-radio" />
              Female
            </label>
          </div>
        </div>
      </form>

      <form
        className="filters__form"
      >
        <div className="filters__type">
          <div className="filters__icon-box">
            <ReactSVG
              src="img/icon/calendar.svg"
              className="filters__type-icon"
            />
          </div>
          Age
        </div>

        <div className="filters__fields">
          <div className="filters__radio-button">
      <input
        type="radio"
        id="age-all"
        name="age"
      />
      <label htmlFor="all" className="filters__custom-radio-label">
        <span className="filters__custom-radio" />
        All
      </label>
    </div>

    <div className="filters__radio-button">
      <input
        type="radio"
        id="age-0"
        name="age"
      />
      <label htmlFor="age-0" className="filters__custom-radio-label">
        <span className="filters__custom-radio" />
        0-1 year
      </label>
    </div>

    <div className="filters__radio-button">
      <input
        type="radio"
        id="age-1"
        name="age"
      />
      <label htmlFor="age-1" className="filters__custom-radio-label">
        <span className="filters__custom-radio" />
        1-2 years
      </label>
    </div>

    <div className="filters__radio-button">
      <input
        type="radio"
        id="age-2"
        name="age"
      />
      <label htmlFor="age-2" className="filters__custom-radio-label">
        <span className="filters__custom-radio" />
        2-5 years
      </label>
    </div>

    <div className="filters__radio-button">
      <input
        type="radio"
        id="age-5"
        name="age"
      />
      <label htmlFor="age-5" className="filters__custom-radio-label">
        <span className="filters__custom-radio" />
        5+ years
      </label>
    </div>
        </div>
      </form>

      <UkrainianDropdown />
    </div>
  );
});
