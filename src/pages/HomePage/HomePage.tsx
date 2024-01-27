import React from 'react';
import './HomePage.scss';
import { Baner } from '../../components/Baner';
import { Services } from '../../components/Services';
import { GivePet } from '../../components/GivePet';
import { QuestionForm } from '../../components/QuestionForm';

export const HomePage = () => {
  return (
    <div className="home-page">
      <Baner />
      <Services />
      <GivePet />
      <QuestionForm
        key="home-page"
      />
    </div>
  );
};
