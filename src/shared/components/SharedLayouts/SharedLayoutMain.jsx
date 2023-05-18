import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../SharedLayoutLoggedIn/HeaderComponent/Header/Header';

const SharedLayOutMain = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   function handleResize() {
  //     setWindowWidth(window.innerWidth);
  //   }
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, [windowWidth]);

  return (
    <div>
      <Header />

      {/* {isMounted && (
        <UserInfoDropDown
          toggle={toggle}
          className={`basic-transition ${status}`}
        />
      )} */}
      {/* <LogOutModal /> */}
      {/* <UserInfoModal /> */}

      {/* {windowWidth <= 1439 && isMounted && ( */}
      {/* <Menu
        toggle={toggle}
        // isMounted={isMounted}
        className={`basic-transition ${status}`}
      /> */}
      {/* )} */}

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayOutMain;
