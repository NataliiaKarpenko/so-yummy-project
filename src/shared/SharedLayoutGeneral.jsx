import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from './components/Loader/Loader';

const SharedLayOutGeneral = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default SharedLayOutGeneral;
