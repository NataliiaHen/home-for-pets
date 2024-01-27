import './NavList.scss';
import { NavLink } from 'react-router-dom';
import React, { memo } from 'react';
import classNames from 'classnames';

const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames(
  'nav-list__item', 'nav-list__item-after',
  { 'nav-list__item--is-active': isActive },
);

export const NavList: React.FC = memo(() => {
  return (
    <div className="nav-list__items">
      <NavLink
        to="/"
        className={getLinkClass}
      >
        About us
      </NavLink>

      <NavLink
        to="/give-for-adoption"
        className={getLinkClass}
      >
        Give for Adoption
      </NavLink>

      <NavLink
        to="/favorites"
        className={getLinkClass}
      >
        Favorited Pets
      </NavLink>

      <NavLink
        to="/contacts"
        className={getLinkClass}
      >
        Contact us
      </NavLink>
    </div>
  );
});
