import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainLayout = React.lazy(() => import('../pages/MainLayout/MainLayout'));
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));

const NotFoundPage = React.lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage')
);

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
