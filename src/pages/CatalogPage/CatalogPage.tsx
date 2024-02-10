import './CatalogPage.scss';
import React, { memo, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useActions } from '../../app/hooks';
import { getSearchWith } from '../../helpers/searchHelpers';
import { useGetFilterPetsQuery, useGetPetsQuery } from '../../api/apiSlice';
import { NotificationStatus } from '../../types/Notification';
import { Container } from '../../components/Container';
import { PetsList } from '../../components/PetsList';
import { Filters } from '../../components/Filters';
import { PageSizeContext } from '../../storage/PageSizeContext';
import { Loader } from '../../components/Loader';
import { NoResults } from '../../components/NoResults';

export const CatalogPage: React.FC = memo(() => {
  const { setNotification } = useActions();
  const { isDesktopSize, isLaptopSize } = useContext(PageSizeContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    data: pets,
    isLoading: petsLoading,
    isError: petsLoadError,
  } = useGetPetsQuery();
  const age = searchParams.get('age') || '';
  const gender = searchParams.get('gender') || '';
  const location = searchParams.get('location') || '';
  const animalType = searchParams.get('animalType') || '';
  const isSearch = age || gender || location || animalType;
  const emptySearchParams = new URLSearchParams();
  const data = {
    age, animalType, gender, location,
  };
  const params = getSearchWith(emptySearchParams, data);
  const {
    data: filteredPets,
    isLoading: filterLoading,
  } = useGetFilterPetsQuery(params);

  if (petsLoadError) {
    setNotification({
      message: 'Something went wrong! Try later',
      color: NotificationStatus.Error,
    });
  }

  if (!pets && !filteredPets) {
    return <Loader />;
  }

  const petsForList = isSearch ? filteredPets : pets;
  const petCount = petsForList ? petsForList.length : 0;

  const showAllPets = () => {
    setSearchParams(undefined);
  };

  return (
    <div className="catalog">
      {(petsLoading || filterLoading) && <Loader />}

      <Container>
        {pets && (
          <div className="catalog__content">
            <div className="catalog__top-titles">
              <h2 className="catalog__title">Pick a friend</h2>
              <p className="catalog__available-title">{`${petCount} friends available`}</p>
            </div>

            {(isLaptopSize || isDesktopSize) && (
              <div className="catalog__filters">
                <Filters />
              </div>
            )}

            <div className="catalog__pets">
              {petsForList && <PetsList pets={petsForList} />}

              {!petsForList?.length && isSearch
                && !petsLoading && !filterLoading && (
                <NoResults>
                  <p className="catalog__error-message">
                    Don&apos;t worry, though &ndash;
                    there are plenty more furry friends waiting for you.
                    <br />
                    Please, choose another filters or click button bellow.
                  </p>
                  <button
                    type="button"
                    onClick={showAllPets}
                    className="catalog__reset-filters"
                  >
                    Show all pets
                  </button>
                </NoResults>
              )}

              {!petsForList?.length && !petsLoading && !isSearch && (
                <NoResults>
                  <p className="catalog__error-message">
                    Thank you for considering adoption!
                    <br />
                    Keep checking back for future updates,
                    as new pets may become available.
                  </p>
                </NoResults>
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
});
