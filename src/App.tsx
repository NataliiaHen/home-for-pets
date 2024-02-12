import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Notification } from './components/Notification';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { useGetPetsQuery } from './api/apiSlice';
import { Loader } from './components/Loader';
import { useActions, useAppSelector } from './app/hooks';
import { checkFav } from './helpers/checkFav';

const App: React.FC = () => {
  const favorites = useAppSelector(state => state.favorites);
  const { clearFav } = useActions();
  const {
    data: pets,
    isLoading: petsLoading,
  } = useGetPetsQuery();

  if (favorites.length && pets?.length) {
    const needClearFav = checkFav(pets, favorites[0]);

    if (needClearFav) {
      clearFav();
    }
  }

  return (
    <div className="page">
      {petsLoading && (
        <Loader />
      )}
      <Container>
        <Header />
      </Container>

      <Notification />

      <div className="page__content">
        <Outlet />
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
