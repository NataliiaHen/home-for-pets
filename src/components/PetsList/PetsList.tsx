import React, { memo } from 'react';
import './PetsList.scss';
import { PetCard } from '../PetCard';

export const PetsList: React.FC = memo(() => {
  return (
    <ul className="pets-list">
      {Array.from(Array(20)).map((_, index) => {
        return <PetCard key={index} />;
      })}
    </ul>
  );
});
