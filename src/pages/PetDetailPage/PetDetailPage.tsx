import React, { memo } from 'react';
import './PetDetailPage.scss';
import { Container } from '../../components/Container';
import { PetDetails } from '../../components/PetDetails';

export const PetDetailPage: React.FC = memo(() => {
  return (
    <div className="pet-page">
      <Container>
        <div className="pet-page__content">
          <h2 className="pet-page__title">Meet</h2>

          <PetDetails />
        </div>
      </Container>
    </div>
  );
});
