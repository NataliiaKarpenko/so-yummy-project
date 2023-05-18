import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAvatarURL, selectUserName } from 'redux/reduxAuth/authSelectors';

import { StyledUserInfo, StyledContainer } from './UserInfo.styled';
import Avatar from '../Avatar/Avatar';
import UserInfoDropDown from '../UserInfoDropdown/UserInfoDropdown';

const UserInfo = () => {
  const userName = useSelector(selectUserName);
  const avatarURL = useSelector(selectAvatarURL);
  const userInfoRef = useRef();
  const [showUserInfoDropdown, setShowUserInfoDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = e => {
      if (!userInfoRef.current.contains(e.target)) {
        setShowUserInfoDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowUserInfoDropdown]);

  const showUserInfoDropDownHandler = () => {
    setShowUserInfoDropdown(!showUserInfoDropdown);
  };

  return (
    <StyledContainer ref={userInfoRef}>
      <StyledUserInfo onClick={showUserInfoDropDownHandler}>
        <Avatar userName={userName} avatarURL={avatarURL} />
        <p>{userName}</p>
      </StyledUserInfo>

      <UserInfoDropDown
        setShowUserInfoDropdown={setShowUserInfoDropdown}
        showUserInfoDropdown={showUserInfoDropdown}
      />
    </StyledContainer>
  );
};

export default UserInfo;
