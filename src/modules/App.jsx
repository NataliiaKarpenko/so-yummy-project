import { Routes, Route, Link } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayOutGeneral from 'shared/SharedLayoutGeneral';
import SharedLayOutMain from 'shared/components/SharedLayouts/SharedLayoutMain';

import { RestrictedRoute } from 'shared/routes/RestrictedRoute';
import { PrivateRoute } from 'shared/routes/PrivateRoute';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SigninPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayOutGeneral />}>
        <Route index element={<WelcomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/main" component={<RegisterPage />} />
          }
        />
        <Route
          path="signin"
          element={
            <RestrictedRoute redirectTo="/main" component={<SigninPage />} />
          }
        />
      </Route>

      <Route
        path="/"
        element={
          <PrivateRoute redirectTo="/" component={<SharedLayOutMain />} />
        }
      >
        <Route
          path="main"
          element={<PrivateRoute redirectTo="/" component={<MainPage />} />}
        />
        {/* <Route path="/main/:recipe" element={<RecipePage />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>

      {/* <Route
              path="/tasks"
              element={
                <PrivateRoute redirectTo="/login" component={<TasksPage />} />
              }
            /> */}
    </Routes>
  );
};
