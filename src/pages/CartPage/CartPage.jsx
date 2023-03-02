import { useSelector } from "react-redux";
import styled from "styled-components";
import CartList from "../../components/CartList/CartList";
import PageTitle from "../../components/PageTitle/PageTitle";

const CartPage = () => {
  const currentUserId = useSelector((state) => state.auth.uid);
  const cars = useSelector((state) => state.cars).filter(
    (car) => car.userId === currentUserId
  );

  const getTotal = (cars) => {
    const arrayOfSum = cars.map((car) => car.price);
    return arrayOfSum.reduce((a, b) => {
      return a + b;
    }, 0);
  };
  return (
    <>
      <PageTitle content="Your cart" />
      <Wrapper>
        {cars.length ? (
          <CartList cars={cars}></CartList>
        ) : (
          <StyledEmpty>Your cart is empty.</StyledEmpty>
        )}
        <StyledTotal>Total spent: {getTotal(cars)}$</StyledTotal>
      </Wrapper>
    </>
  );
};

export default CartPage;

const Wrapper = styled.div`
  background-color: rgba(20, 20, 20, 0.8);
  width: 100%;
  height: 600px;
  border-radius: 10px;
  position: relative;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  overflow-y: scroll;
`;

const StyledEmpty = styled.p`
  margin-top: 50px;
  text-align: center;
  color: #eab676;
  text-transform: uppercase;
`;

const StyledTotal = styled.p`
  color: white;
  font-size: 25px;
  position: fixed;
  bottom: 160px;
  right: 40px;
`;
