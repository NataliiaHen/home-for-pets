import './PetsCarousel.scss';
import React, { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetPetsQuery } from '../../api/apiSlice';
import { getRandomArray } from '../../helpers/getRandomArray';
import { Loader } from '../Loader';
import { CardSwiper } from '../Swiper';
import { Pet } from '../../types/Pet';
import { Container } from '../Container';

export const PetsCarousel: React.FC = memo(() => {
  const {
    data: pets = [] as Pet[],
    isLoading: petsLoading,
  } = useGetPetsQuery();
  const randomPets = useMemo(() => pets && getRandomArray(pets, 20), [pets]);
  const { pathname } = useLocation();

  if (petsLoading) {
    return <Loader />;
  }

  return (
    <div className="pets-carousel">
      <Container>
        <div className="pets-carousel__top">
          {pathname === '/' ? (
            <>
              <h2 className="pets-carousel__title">
                Pick a friend
              </h2>

              <p className="pets-carousel__count">
                {`${pets.length} available`}
              </p>
            </>
          ) : (
            <h2 className="pets-carousel__title">
              They are also looking for homes
            </h2>
          )}
        </div>
      </Container>

      <CardSwiper
        pets={randomPets}
      />
    </div>
  );
});
