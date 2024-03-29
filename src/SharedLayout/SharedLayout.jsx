import { Routes, Route, Navigate } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import SingInPage from '../pages/SignInPage/SignInPage';
import PrivateRoute from '../helpers/PrivateRoute/PrivateRoute';
import PublicRoute from '../helpers/PublicRoute/PublicRoute';

const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const CarDetailsPage = lazy(() =>
  import('../pages/CarDetailsPage/CarDetailsPage')
);
const CarListPage = lazy(() => import('../pages/CarListPage/CarListPage'));
const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const CartPage = lazy(() => import('../pages/CartPage/CartPage'));

const SharedLayout = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cars" element={<CarListPage />} />
        <Route path="/cars/:id" element={<CarDetailsPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<UserPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signin" element={<SingInPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
};

export default SharedLayout;
