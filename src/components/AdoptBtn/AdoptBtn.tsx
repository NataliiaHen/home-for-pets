import React, { memo } from 'react';
import './AdoptBtn.scss';
import { useAppDispatch } from '../../app/hooks';
import { setIsModalShow } from '../../features/modal';

export const AdoptBtn: React.FC = memo(({ children }) => {
  // const { setIsModalShow } = useContext(ModalContext);
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      className="adopt-btn"
      onClick={() => dispatch(setIsModalShow(true))}
    >
      {children}
    </button>
  );
});
