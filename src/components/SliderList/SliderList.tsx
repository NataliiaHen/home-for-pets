import React, { memo } from 'react';
import { Product } from '../../types/Product';
import { PetCard } from '../PetCard';
import './SliderList.scss';

type Props = {
  products: Product[];
};

export const SliderList: React.FC<Props> = memo(({ products }) => {
  return (
    <ul
      className="product-slider__list"
      data-cy="cardsContainer"
    >
      {products.map(product => (
        <PetCard
          product={product}
          key={product.id}
        />
      ))}
    </ul>
  );
});
