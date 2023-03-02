import styled from "styled-components";

const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainContainer;

const Container = styled.div`
  margin: 0 20px;
`;
