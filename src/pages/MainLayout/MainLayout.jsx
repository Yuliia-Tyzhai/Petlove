import React, { useState } from 'react';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div>
      {!loadingComplete ? (
        <Loader onComplete={() => setLoadingComplete(true)} />
      ) : (
        <>
          <Header />
          <main>
            <Outlet />
          </main>
        </>
      )}
    </div>
  );
};

export default MainLayout;
