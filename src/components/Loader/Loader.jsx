import styled, { keyframes } from 'styled-components';
import { ReactComponent as Logo } from '../../images/logo.svg';

const Loader = () => {
  return (
    <LoaderWrapper>
      <StyledLoader />
    </LoaderWrapper>
  );
};

export default Loader;

const rotate = keyframes`
  from {
    transform: rotateX(0deg);
  }

  to {
    transform: rotateX(360deg);
  }
`;

const StyledLoader = styled(Logo)`
  width: 100%;
  height: 100%;
`;

const LoaderWrapper = styled.div`
  width: 80px;
  height: 80px;
  animation: ${rotate} 2s linear infinite;
  align-self: center;
  background-color: rgba(171, 171, 171, 0.5018601190476191);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
