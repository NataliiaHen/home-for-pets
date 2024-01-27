import React, {
  memo, useContext, useEffect, useState,
} from 'react';
import './CatalogPage.scss';
import { Container } from '../../components/Container';
import { PetsList } from '../../components/PetsList';
import { Filters } from '../../components/Filters';
import { PageSizeContext } from '../../storage/PageSizeContext';
import { getPets } from '../../api/pets';
import { Pet } from '../../types/Pet';

export const CatalogPage: React.FC = memo(() => {
  const {
    isDesktopSize, isLaptopSize,
  } = useContext(PageSizeContext);
  const [pets, setPets] = useState<Pet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getPets()
      .then(setPets)
      .finally(() => setIsLoading(false));
  }, []);

  console.log('pets', pets);

  return (
    <div className="catalog">
      <Container>
        <div className="catalog__content">
          <div className="catalog__top-titles">
            <h2 className="catalog__title">Pick a friend</h2>

            <p className="catalog__available-title">9 friends available</p>
          </div>

          {(isLaptopSize || isDesktopSize) && (
            <div className="catalog__filters">
              <Filters />
            </div>
          )}

          <div className="catalog__pets">
            <PetsList />
          </div>
        </div>
      </Container>
    </div>
  );
});
