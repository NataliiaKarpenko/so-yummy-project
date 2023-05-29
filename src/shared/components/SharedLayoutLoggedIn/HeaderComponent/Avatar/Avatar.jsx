import { StyledAvatarImg, StyledAvatar } from './Avatar.styled';

const Avatar = ({ userName, avatarURL }) => {
  return (
    <StyledAvatar label={userName} defaultColor="#8baa36">
      {avatarURL !==
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1679336722/images_s8wrdd.jpg' ? (
        <StyledAvatarImg src={avatarURL} alt="avatar" />
      ) : (
        <p>{userName[0].toUpperCase()}</p>
      )}
    </StyledAvatar>
  );
};

export default Avatar;
