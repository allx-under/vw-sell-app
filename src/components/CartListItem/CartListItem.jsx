import { useDispatch } from "react-redux";

import styled from "styled-components";
import { SlClose } from "react-icons/sl";

import { removeFromCart } from "../../redux/actions";

const CartListItem = ({ img, name, price, id }) => {
  const dispatch = useDispatch();

  return (
    <StyledItem>
      <ContentWrapper>
        <StyledText>{name}</StyledText>
        <StyledText>{price}$</StyledText>
      </ContentWrapper>
      <StyledImage src={img} alt={name} />

      <StyledDeleteIcon onClick={() => dispatch(removeFromCart(id))} />
    </StyledItem>
  );
};

export default CartListItem;

const StyledText = styled.p`
  color: white;
  &:last-child {
    margin-top: 10px;
  }
`;

const StyledItem = styled.li`
  position: relative;
  display: flex;
  border-radius: 10px;
  background: rgb(208, 208, 208);
  background: linear-gradient(
    180deg,
    rgba(208, 208, 208, 1) 0%,
    rgba(255, 255, 255, 0.5018601190476191) 100%
  );
  width: 500px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const StyledImage = styled.img`
  margin-left: auto;
  width: 300px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 10px;
`;

const StyledDeleteIcon = styled(SlClose)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: -10px;
  right: -10px;
  color: rgb(0, 30, 80);
  border-radius: 50%;
  background: rgba(208, 208, 208, 1);

  cursor: pointer;
  transition: color 250ms linear, transform 250ms linear;
  &:hover {
    color: red;
    transform: scale(1.1);
  }
`;
