import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import SharedLayOutGeneral from 'shared/SharedLayoutGeneral';
import SharedLayOutMain from 'shared/components/SharedLayouts/SharedLayoutMain';

import { RestrictedRoute } from 'shared/routes/RestrictedRoute';
import { PrivateRoute } from 'shared/routes/PrivateRoute';
import { Flip, ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/reduxAuth/authOperations';
import { useAuth } from 'shared/hooks/useAuth';
import { GlobalStyle } from 'Styles/GlobalStyles';
import Loader from 'shared/components/Loader/Loader';

const WelcomePage = lazy(() => import('../pages/WelcomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const SigninPage = lazy(() => import('../pages/SigninPage'));
const MainPage = lazy(() => import('../pages/MainPage'));
const CategoriesPage = lazy(() => import('../pages/CategoriesPage'));
const RecipePage = lazy(() => import('../pages/RecipePage'));
const AddRecipePage = lazy(() => import('../pages/AddRecipePage'));
const ShoppingListPage = lazy(() => import('../pages/ShoppingListPage'));
const FavoritePage = lazy(() => import('../pages/FavoritePage'));
const SearchPage = lazy(() => import('../pages/SearchPage'));
const PageNotFound = lazy(() => import('../pages/PageNotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <GlobalStyle />

      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
        transition={Flip}
      />

      <Routes>
        <Route path="/" element={<SharedLayOutGeneral />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
            }
          />

          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/main"
                component={<RegisterPage />}
              />
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
          <Route
            path="categories/:categoryName"
            element={
              <PrivateRoute redirectTo="/" component={<CategoriesPage />} />
            }
          />
          <Route
            path="recipe/:id"
            element={<PrivateRoute redirectTo="/" component={<RecipePage />} />}
          />
          <Route
            path="add"
            element={
              <PrivateRoute redirectTo="/" component={<AddRecipePage />} />
            }
          />
          <Route
            path="shopping-list"
            element={
              <PrivateRoute redirectTo="/" component={<ShoppingListPage />} />
            }
          />
          <Route
            path="favorite"
            element={
              <PrivateRoute redirectTo="/" component={<FavoritePage />} />
            }
          />
          <Route
            path="search"
            element={<PrivateRoute redirectTo="/" component={<SearchPage />} />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
