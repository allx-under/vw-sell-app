import styled from "styled-components";

const PageTitle = ({ content }) => {
  return <StyledTitle>{content}</StyledTitle>;
};

export default PageTitle;

const StyledTitle = styled.h2`
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 20px;
  font-style: italic;
`;
