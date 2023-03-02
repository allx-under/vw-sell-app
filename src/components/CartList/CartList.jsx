import styled from "styled-components";

import CartListItem from "../CartListItem/CartListItem";

const CartList = ({ cars }) => {
  return (
    <List>
      {cars.map((car) => (
        <CartListItem
          key={car.uniqueId}
          name={car.car}
          price={car.price}
          img={car.photo}
          id={car.uniqueId}
        />
      ))}
    </List>
  );
};

export default CartList;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
