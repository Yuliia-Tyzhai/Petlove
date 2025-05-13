import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const MainLayout = React.lazy(() => import('../pages/MainLayout/MainLayout'));
const HomePage = React.lazy(() => import('../pages/HomePage/HomePage'));
const RegistrationPage = React.lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = React.lazy(() => import('../pages/LoginPage/LoginPage'));
const ProfilePage = React.lazy(() =>
  import('../pages/ProfilePage/ProfilePage')
);
const AddPetPage = React.lazy(() => import('../pages/AddPetPage/AddPetPage'));
const NewsPage = React.lazy(() => import('../pages/NewsPage/NewsPage'));
const PrivateRoute = React.lazy(() =>
  import('../components/PrivateRoute/PrivateRoute')
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/add-pet" element={<AddPetPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
