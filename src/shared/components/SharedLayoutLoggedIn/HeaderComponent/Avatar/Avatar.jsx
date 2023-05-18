import { StyledAvatar } from './Avatar.styled';

const Avatar = ({ userName, avatarURL }) => {
  return (
    <StyledAvatar label={userName}>
      {avatarURL !==
      'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1679336722/images_s8wrdd.jpg' ? (
        <img src={avatarURL} alt="avatar" />
      ) : (
        <p>{userName[0].toUpperCase()}</p>
      )}
    </StyledAvatar>
  );
};

export default Avatar;
