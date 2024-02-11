import './FavoritesPage.scss';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../components/Container';
import { useAppSelector } from '../../app/hooks';
import { PetsList } from '../../components/PetsList';
import { PetsCarousel } from '../../components/PetsCarousel';
import { NoResults } from '../../components/NoResults';
import { useGetPetsQuery } from '../../api/apiSlice';
import { Pet } from '../../types/Pet';
import { Loader } from '../../components/Loader';

export const Favourites: React.FC = memo(() => {
  const favorites = useAppSelector(state => state.favorites);
  const {
    data: pets = [] as Pet[],
    isLoading: petsLoading,
  } = useGetPetsQuery();

  return (
    <div className="favorites">
      {petsLoading && (
        <Loader />
      )}

      <Container>
        <div className="favorites__content">

          {favorites.length > 0 ? (
            <>
              <div className="favorites__top">
                <h1 className="favorites__title">
                  Favourites
                </h1>

                <p className="favorites__text">
                  {`${favorites.length} items`}
                </p>
              </div>

              <PetsList
                pets={favorites}
              />
            </>
          ) : (
            <NoResults>
              <div className="favorites__error-message">
                <p>
                  Looks like you haven&apos;t added
                  any pets to your favorites yet.
                </p>

                <p>
                  Don&apos;t worry, you can find some adorable companions
                  waiting for you.
                  <br />
                  Simply click the button below to start exploring
                  and adding your favorites!
                </p>
              </div>

              <Link
                to="/pets"
                className="favorites__find-link"
              >
                Find Pets
              </Link>
            </NoResults>
          )}
        </div>
      </Container>

      {pets.length && (
        <PetsCarousel
          pets={pets}
        />
      )}
    </div>
  );
});
