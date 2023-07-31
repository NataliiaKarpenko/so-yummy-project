import { useEffect, createRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import icons from '../../../../sprite.svg';
import {
  EditContainer,
  StyledInfoBtn,
  StyledUserInfoDropDown,
  StyledText,
} from './UserInfoDropdown.styled';
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
    if (showUserInfoModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showUserInfoModal]);

  useEffect(() => {
    if (showLogoutModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showLogoutModal]);

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
          <EditContainer onClick={showUserInfoModalHandler}>
            <StyledText>Edit profile </StyledText>
            <svg width="14" height="14" aria-label="pen">
              <use href={icons + '#edit'}></use>
            </svg>
          </EditContainer>
          <StyledInfoBtn type="button" onClick={showLogoutModalHandler}>
            Log out
            <svg width="18" height="18" aria-label="arrow right">
              <use href={icons + '#arrowNarrowRight'}></use>
            </svg>
          </StyledInfoBtn>
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
