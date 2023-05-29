import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
  StyledCancelBtn,
  StyledLogoutBtn,
  StyledLogoutModalBtnContainer,
  StyledLogoutModal,
} from './LogoutModal.styled';
import { logout } from 'redux/reduxAuth/authOperations';
import CloseBtn from '../../CloseBtn/CloseBtn';
import Backdrop from '../Backdrop/Backdrop';

const LogoutModal = ({ setShowLogoutModal, showLogoutModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        setShowLogoutModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowLogoutModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      setShowLogoutModal(false);
    }
  };

  const logoutBtnHandler = () => {
    dispatch(logout());
    setShowLogoutModal(false);
  };

  const closeBtnHandler = () => {
    setShowLogoutModal(false);
  };

  return (
    <CSSTransition
      in={showLogoutModal}
      timeout={250}
      classNames="backdrop"
      unmountOnExit
    >
      <Backdrop handleBackdropClick={handleBackdropClick}>
        <StyledLogoutModal>
          <CloseBtn modalCloseBtn={true} closeBtnHandler={closeBtnHandler} />
          <p>Are you sure you want to log out?</p>
          <StyledLogoutModalBtnContainer>
            <StyledLogoutBtn type="button" onClick={logoutBtnHandler}>
              Log out
            </StyledLogoutBtn>
            <StyledCancelBtn type="button" onClick={closeBtnHandler}>
              Cancel
            </StyledCancelBtn>
          </StyledLogoutModalBtnContainer>
        </StyledLogoutModal>
      </Backdrop>
    </CSSTransition>
  );
};

export default LogoutModal;
