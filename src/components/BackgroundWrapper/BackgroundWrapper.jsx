import styled from "styled-components";
import bg from "../../images/bgcar.jpeg";

const BackgroundWrapper = ({ children }) => {
  return <Background>{children}</Background>;
};

export default BackgroundWrapper;

const Background = styled.div`
  background: no-repeat center url(${bg});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;
