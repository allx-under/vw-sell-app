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
  0% {
    transform: scale(0.8);
  }

  50% {
    transform: scale(1.1)
  }

  100% {
    transform: scale(0.8);
  }
`;

const StyledLoader = styled(Logo)`
  width: 100%;
  height: 100%;
`;

const LoaderWrapper = styled.div`
  width: 80px;
  height: 80px;
  animation: ${rotate} 1s linear infinite;
  align-self: center;
  border-radius: 50%;
  position: absolute;
  top: 40px;
  left: 48%;
  transform: translate(-50%, -50%);
`;
