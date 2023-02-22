import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

import { useAuth } from 'hooks/useAuth';
import { sessionRefreshing } from 'redux/auth/operation';

import { CalculatorPage } from 'pages/Calculator';
import { RegisterPage } from 'pages/Register';
import { LoginPage } from 'pages/Login';
import { DiaryPage } from 'pages/Diary';
import { ErrorPage } from 'pages/ErrorPage';

import { Layout } from './Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();
  const { sid } = useAuth();

  useEffect(() => {
    if (!sid) {
      return;
    }
    dispatch(sessionRefreshing());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CalculatorPage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/diary" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/diary" />
            }
          />
          <Route
            path="/diary"
            element={<PrivateRoute component={DiaryPage} redirectTo="/login" />}
          />
        </Route>
        <Route element={<ErrorPage />} path="*" />
      </Routes>
    </>
  );
};
