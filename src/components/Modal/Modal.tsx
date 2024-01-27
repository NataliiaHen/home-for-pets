import './Modal.scss';
import { ReactSVG } from 'react-svg';
import React,
{
  useEffect,
  useState,
  memo,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { NavIcon } from '../NavIcon';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setIsModalShow } from '../../features/modal';

export const Modal: React.FC = memo(({ children }) => {
  const dispatch = useAppDispatch();
  const { isModalShow } = useAppSelector((state) => state.isModalShow);
  const [showForm, setShowForm] = useState(false);
  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target === event.currentTarget) {
      dispatch(setIsModalShow(false));
    }
  };

  useEffect(() => {
    if (isModalShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isModalShow]);

  return (
    <CSSTransition
      timeout={300}
      in={isModalShow}
      onEntering={() => setShowForm(true)}
      unmountOnExit
    >
      <div className="modal" onDoubleClick={handleModalClick} aria-hidden>
        <CSSTransition
          in={showForm}
          timeout={300}
          classNames="modal-fade"
          onExiting={() => setIsModalShow(false)}
          unmountOnExit
        >
          <div className="modal__content">
            <div className="modal__top">
              <h3 className="modal__title">Pick up your animal</h3>
              <div className="modal__cross">
                <NavIcon>
                  <ReactSVG
                    src="img/icon/close.svg"
                    className="modal__btn-cross"
                    onClick={() => setShowForm(false)}
                  />
                </NavIcon>
              </div>
            </div>

            {children}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  );
});
