import { ColorRing } from 'react-loader-spinner';
import { StyledLoader } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoader>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#3cbc81', '#e74a3b', '#f6c23e', '#dc2222', '#41e73b']}
      />
    </StyledLoader>
  );
};

export default Loader;
