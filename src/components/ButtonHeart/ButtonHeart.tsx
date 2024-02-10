import React, { memo } from 'react';
import classNames from 'classnames';
import './ButtonHeart.scss';
import { ReactSVG } from 'react-svg';
import { Pet } from '../../types/Pet';
import { checkFav } from './utils';
import { useAppSelector, useActions } from '../../app/hooks';

type Props = {
  pet: Pet;
};

export const ButtonHeart: React.FC<Props> = memo(({ pet }) => {
  const favorites = useAppSelector(state => state.favorites);
  const { addFav, removeFav } = useActions();
  const isFav = checkFav(favorites, pet.id);

  const toggleFav = () => {
    if (!isFav) {
      addFav(pet);
    } else {
      removeFav(pet);
    }
  };

  return (
    <button
      className={classNames(
        'button-fav',
        { 'button-fav--selected': isFav },
      )}
      onClick={toggleFav}
      data-cy="addToFavorite"
      aria-label="toggle favorite"
      type="button"
    >
      <ReactSVG
        src="img/icon/empty-heart.svg"
        className="pet-card__icon"
      />
    </button>
  );
});
