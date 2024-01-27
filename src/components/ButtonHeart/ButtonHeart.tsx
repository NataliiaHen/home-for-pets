import React, { useContext, memo } from 'react';
import classNames from 'classnames';
import './ButtonHeart.scss';
import { ReactSVG } from 'react-svg';
import { FavContext } from '../../storage/FavContext';
import { Product } from '../../types/Product';

type Props = {
  // pet: Pet;
};

export const ButtonHeart: React.FC<Props> = memo(() => {
  // const { favProducts, addFav, removeFav } = useContext(FavContext);
  // const isFav = favProducts.some(prod => prod.itemId === product.itemId);
  const isFav = false;

  // const toggleFav = () => {
  //   if (!isFav) {
  //     addFav(product);
  //   } else {
  //     removeFav(product);
  //   }
  // };

  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <button
      className={classNames(
        'button-fav',
        { 'button-fav--selected': isFav },
      )}
      // onClick={toggleFav}
      data-cy="addToFavorite"
      type="button"
    >
      <ReactSVG
        src="img/icon/empty-heart.svg"
        className="pet-card__icon"
      />
    </button>
  );
});
