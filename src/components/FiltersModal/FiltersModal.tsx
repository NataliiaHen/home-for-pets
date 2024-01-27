import './FiltersModal.scss';
import React, { memo, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ReactSVG } from 'react-svg';
import { Filters } from '../Filters/Filters';
import { NavIcon } from '../NavIcon';

type Props = {
  closeMenu: () => void;
};

export const FiltersModal: React.FC<Props> = memo(({ closeMenu }) => {
  const [showForm, setShowForm] = useState(false);

  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      setShowForm(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    setShowForm(true);

    return () => {
      document.body.style.overflow = 'initial';
    };
  }, []);

  return (
    <div
      className="filters-modal"
      onClick={handleModalClick}
      aria-hidden
    >
      <CSSTransition
        in={showForm}
        timeout={300}
        classNames="modal-fade"
        onExiting={closeMenu}
        unmountOnExit
      >
        <div className="filters-modal__content">
          <div className="filters-modal__top">
            <h3 className="filters-modal__title">Filters:</h3>

            <div className="filters-modal__icon-link filters-modal__icon-link--close">
              <NavIcon>
                <ReactSVG
                  src="img/icon/close.svg"
                  onClick={() => setShowForm(false)}
                />
              </NavIcon>
            </div>
          </div>

          <Filters />
        </div>
      </CSSTransition>

    </div>
  );
});
