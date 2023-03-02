import axios from "axios";

const instance = axios.create({
  baseURL: "https://631cde274fa7d3264cb85f44.mockapi.io/api/",
});

export const fetchCars = async () => {
  const { data } = await instance.get("/cars");

  return data;
};

export const fetchOneCar = async (id) => {
  const { data } = await instance.get(`/cars/${id}`);

  return data;
};
