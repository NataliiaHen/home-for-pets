import React, { memo } from 'react';
import './PetsList.scss';
import { PetCard } from '../PetCard';
import { Pet } from '../../types/Pet';

type Props = {
  pets: Pet[],
};

export const PetsList: React.FC<Props> = memo(({ pets }) => {
  return (
    <ul className="pets-list">
      {pets.map((pet) => (
        <PetCard
          key={pet.id}
          pet={pet}
        />
      ))}
    </ul>
  );
});
