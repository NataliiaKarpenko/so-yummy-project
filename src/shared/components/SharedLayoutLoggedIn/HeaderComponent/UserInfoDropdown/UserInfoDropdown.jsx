import { useEffect, createRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import icons from '../../../../sprite.svg';
import { StyledUserInfoDropDown } from './UserInfoDropdown.styled';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import LogoutModal from '../LogoutModal/LogoutModal';

const UserInfoDropDown = ({
  setShowUserInfoDropdown,
  showUserInfoDropdown,
}) => {
  const dropdownRef = createRef();
  const [showUserInfoModal, setShowUserInfoModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShowUserInfoDropdown(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowUserInfoDropdown]);

  const showUserInfoModalHandler = () => {
    setShowUserInfoDropdown(false);
    setShowUserInfoModal(true);
  };

  const showLogoutModalHandler = () => {
    setShowUserInfoDropdown(false);
    setShowLogoutModal(true);
  };

  return (
    <>
      <CSSTransition
        ref={dropdownRef}
        in={showUserInfoDropdown}
        timeout={250}
        classNames="dropdown"
        unmountOnExit
      >
        <StyledUserInfoDropDown>
          <div className="EditContainer" onClick={showUserInfoModalHandler}>
            <p className="Text">Edit profile </p>
            <svg width="14" height="14" aria-label="pen">
              <use href={icons + '#edit'}></use>
            </svg>
          </div>
          <button
            type="button"
            className="UserInfoLogoutlBtn"
            onClick={showLogoutModalHandler}
          >
            Log out
            <svg width="18" height="18" aria-label="arrow right">
              <use href={icons + '#arrowNarrowRight'}></use>
            </svg>
          </button>
        </StyledUserInfoDropDown>
      </CSSTransition>

      <UserInfoModal
        setShowUserInfoModal={setShowUserInfoModal}
        showUserInfoModal={showUserInfoModal}
      />

      <LogoutModal
        showLogoutModal={showLogoutModal}
        setShowLogoutModal={setShowLogoutModal}
      />
    </>
  );
};

export default UserInfoDropDown;
