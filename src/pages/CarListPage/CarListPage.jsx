import { useEffect, useState } from "react";

import { fetchCars } from "../../service/api/API";

import CarsList from "../../components/CarsList/CarsList";
import PageTitle from "../../components/PageTitle/PageTitle";
import SortInput from "../../components/SortInput/SortInput";

const CarListPage = () => {
  const [cars, setCars] = useState([]);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    const getCars = async () => {
      try {
        const data = await fetchCars();
        setCars(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCars();
  }, []);

  const sortCars = (cars) => {
    const sortedCars = [...cars].sort((a, b) => {
      if (selectValue === "asc") return a.price - b.price;
      else if (selectValue === "desc") return b.price - a.price;
      else if (selectValue === "popular") {
        return b.popular - a.popular;
      } else return 1;
    });
    return sortedCars;
  };

  return (
    <>
      <PageTitle content="Choose your dream car" />
      <SortInput selectValue={selectValue} setSelectValue={setSelectValue} />
      <CarsList cars={sortCars(cars)} />
    </>
  );
};

export default CarListPage;
