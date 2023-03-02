import styled from "styled-components";
import CarsListItem from "../CarsListItem/CarsListItem";

const CarsList = ({ cars }) => {
  return (
    <StyledList>
      {cars.map((item) => (
        <CarsListItem
          key={item.id}
          name={item.car}
          photo={item.photo}
          id={item.id}
          price={item.price}
        />
      ))}
    </StyledList>
  );
};

export default CarsList;

const StyledList = styled.ul`
  background-color: rgba(20, 20, 20, 0.8);
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-wrap: wrap;
  height: calc(100vh - 300px);
`;
