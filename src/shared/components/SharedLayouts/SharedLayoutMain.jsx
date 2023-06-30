import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../SharedLayoutLoggedIn/HeaderComponent/Header/Header';
import Footer from '../SharedLayoutLoggedIn/FooterComponent/Footer';
import Loader from '../Loader/Loader';

const SharedLayOutMain = () => {
  return (
    <div id="root">
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayOutMain;
