import './PetDetailPage.scss';
import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../components/Container';
import { PetDetails } from '../../components/PetDetails';
import { PetsCarousel } from '../../components/PetsCarousel';

export const PetDetailPage: React.FC = memo(() => {
  const { petId } = useParams();

  return (
    <div className="pet-page">
      <Container>
        <div className="pet-page__content">
          <h2 className="pet-page__title">Meet</h2>

          {petId && (
            <PetDetails
              key={petId}
              petId={+petId}
            />
          )}
        </div>
      </Container>

      <PetsCarousel />
    </div>
  );
});
