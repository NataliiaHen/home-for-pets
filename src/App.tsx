import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Notification } from './components/Notification';
import { PickUpForm } from './components/PickUpForm';
import { Modal } from './components/Modal';

const App = () => {
  return (
    <div className="page">
      <Container>
        <Header />
      </Container>

      <Notification />

      <div className="page__content">
        <Outlet />
      </div>

      <Modal>
        <PickUpForm />
      </Modal>

      <Footer />
    </div>
  );
};

export default App;
