import styled from "styled-components";
import { Link } from "react-router-dom";
const CarsListItem = ({ name, photo, id, price }) => {
  return (
    <StyledItem>
      <StyledLink to={id}>
        <StyledText>{name}</StyledText>
        <StyledPrice>From {price}$</StyledPrice>

        <StyledImg src={photo} alt={name} />
      </StyledLink>
    </StyledItem>
  );
};

export default CarsListItem;

const StyledItem = styled.li`
  width: 25%;
  &:hover img {
    transform: scale(1.2);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledText = styled.h3`
  color: #d0d0d0;
  margin-bottom: 15px;
`;

const StyledPrice = styled.p`
  color: #d0d0d0;
  margin-bottom: 15px;
`;

const StyledImg = styled.img`
  width: 90%;
  border-radius: 5px;
  transition: transform 250ms linear;
  background: rgb(208, 208, 208);
  background: linear-gradient(
    180deg,
    rgba(208, 208, 208, 1) 0%,
    rgba(255, 255, 255, 0.5018601190476191) 100%
  );
`;
