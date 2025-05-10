import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainLayout = React.lazy(() => import('../pages/MainLayout/MainLayout'));
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = React.lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const NotFoundPage = React.lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage')
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
