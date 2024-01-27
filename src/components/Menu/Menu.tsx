import './Menu.scss';
import React, { memo } from 'react';
import { ReactSVG } from 'react-svg';
import { Link } from 'react-router-dom';
import { NavIcon } from '../NavIcon';
import { Logo } from '../Logo';

type Props = {
  closeMenu: () => void;
};

export const Menu: React.FC<Props> = memo(({ closeMenu }) => (
  <aside className="menu">
    <div className="menu__top">
      <Logo />

      <div className="menu__icon-link menu__icon-link--close">
        <NavIcon>
          <ReactSVG
            src="img/icon/close.svg"
            onClick={closeMenu}
          />
        </NavIcon>
      </div>
    </div>

    <ul className="menu__list">
      <li className="menu__item">
        <Link
          to="/"
          className="menu__link"
          onClick={closeMenu}
        >
          About us
        </Link>
      </li>

      <li className="menu__item">
        <Link
          to="/adoption"
          className="menu__link"
          onClick={closeMenu}
        >
          Give for Adoption
        </Link>
      </li>

      <li className="menu__item">
        <Link
          to="/favorites"
          className="menu__link"
          onClick={closeMenu}
        >
          Favorited Pets
        </Link>
      </li>

      <li className="menu__item">
        <Link
          to="/contacts"
          className="menu__link"
          onClick={closeMenu}
        >
          Contact us
        </Link>
      </li>
    </ul>
  </aside>
));
