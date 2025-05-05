import React from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';

const MainLayout = () => {
  return (
    <div>
      <Loader />
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
