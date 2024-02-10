import React from 'react';
import './HomePage.scss';
import { Baner } from '../../components/Baner';
import { Services } from '../../components/Services';
import { GivePet } from '../../components/GivePet';
import { QuestionForm } from '../../components/QuestionForm';
import { PetsCarousel } from '../../components/PetsCarousel';

export const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Baner />
      <Services />
      <PetsCarousel />
      <GivePet />
      <QuestionForm
        key="home-page"
      />
    </div>
  );
};
