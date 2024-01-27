import './Nav.scss';
import { Link, useLocation } from 'react-router-dom';
import React, {
  memo, useCallback, useContext, useState,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactSVG } from 'react-svg';
import { Logo } from '../Logo';
import { NavList } from '../NavList';
import { PageSizeContext } from '../../storage/PageSizeContext';
import { Menu } from '../Menu';
import { FiltersModal } from '../FiltersModal';

export const Nav: React.FC = memo(() => {
  const { pathname } = useLocation();
  const {
    isMobileSize, isTabletSize, isDesktopSize, isLaptopSize,
  } = useContext(PageSizeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const closeFilters = useCallback(() => setIsFiltersOpen(false), []);

  return (
    <nav
      className="header_navbar navbar"
      data-cy="nav"
      role="navigation"
      aria-label="main navigation"
    >
      {(isMobileSize || isTabletSize) && (
        <>
          <Logo />

          <div className="navbar__top-buttons">
            {pathname === '/pets-for-adoption' ? (
              <button
                type="button"
                onClick={() => setIsFiltersOpen(true)}
                className="navbar__filters-btn"
              >
                <ReactSVG
                  src="img/icon/filter.svg"
                />

                Filters
              </button>
            ) : (
              <div className="navbar__adopt-link">
                <Link to="/pets-for-adoption">Adoption</Link>
              </div>
            )}

            <ReactSVG
              src="img/icon/Burger.svg"
              className="navbar__open-menu-btn"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </>
      )}

      <CSSTransition
        in={isMenuOpen}
        timeout={1000}
        classNames="menu"
        mountOnEnter
        unmountOnExit
      >
        <Menu closeMenu={closeMenu} />
      </CSSTransition>

      <CSSTransition
        in={isFiltersOpen}
        timeout={300}
        classNames="filters-modal"
        mountOnEnter
        unmountOnExit
      >
        <FiltersModal closeMenu={closeFilters} />
      </CSSTransition>

      {(isDesktopSize || isLaptopSize) && (
        <>
          <Logo />

          <NavList />

          <div className="navbar__adopt-link">
            <Link to="/pets-for-adoption">Adoption</Link>
          </div>
        </>
      )}
    </nav>
  );
});
