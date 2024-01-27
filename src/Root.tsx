import React from 'react';
import {
  Route, Routes, Navigate,
} from 'react-router-dom';
import App from './App';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { AdoptionPage } from './pages/AdoptionPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { PetDetailPage } from './pages/PetDetailPage';
import { CatalogPage } from './pages/CatalogPage';

export const Root = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/give-for-adoption" element={<AdoptionPage />} />
      <Route path="/contacts" element={<ContactUsPage />} />
      <Route path="/pet" element={<PetDetailPage />} />
      <Route path="/pets-for-adoption" element={<CatalogPage />} />
    </Route>

    <Route path="*" element={<ErrorPage />} />
  </Routes>
);
