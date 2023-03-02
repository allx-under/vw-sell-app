import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import PageTitle from '../../components/PageTitle/PageTitle';

import { ReactComponent as Logo } from '../../images/logo.svg';
import { addToCart } from '../../redux/actions';
import { fetchOneCar } from '../../service/api/API';
import Loader from '../../components/Loader/Loader';

const CarDetailsPage = () => {
  const [carInfo, setCarInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector(state => state.auth);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickAddToCart = () => {
    const carWithUniqueId = {
      ...carInfo,
      uniqueId: nanoid(),
      userId: auth.uid,
    };
    if (auth.isAuth) {
      dispatch(addToCart(carWithUniqueId));
      return Notify.success(`${carInfo.car} succesfully added to your cart!`, {
        position: 'center-top',
      });
    } else {
      Notify.failure(
        'Sorry, only authorized person can buy a car! In 5 seconds you will be redirect to login page.',
        {
          timeout: 5000,
          position: 'center-top',
        }
      );
      setTimeout(() => {
        navigate('/signin');
      }, 5000);
    }
  };

  useEffect(() => {
    const getCar = async () => {
      try {
        setIsLoading(true);
        const data = await fetchOneCar(id);
        setCarInfo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCar();
  }, [id]);

  return (
    <>
      <PageTitle content="More details you can find here" />
      <Wrapper>
        {' '}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <StyledImgWrapper>
              <StyledImg
                loading="lazy"
                src={carInfo.mainphoto}
                alt={carInfo.car}
              />
            </StyledImgWrapper>
            <ContentWrapper>
              <h3>{carInfo.car}</h3>
              <StyledText>Price: {carInfo.price}$</StyledText>
              <StyledText>Power: {carInfo.horsepower}hp</StyledText>
              <StyledText>
                Fuel consumption: {carInfo.average}l/100km
              </StyledText>
              <StyledBtn onClick={onClickAddToCart}>
                Add to cart
                <StyledLogo width="25px" height="25px" />
              </StyledBtn>
            </ContentWrapper>
          </>
        )}
      </Wrapper>
    </>
  );
};

export default CarDetailsPage;

const Wrapper = styled.div`
  display: flex;

  width: 100%;
  height: calc(100vh-300px);
  background-color: rgba(20, 20, 20, 0.8);
  color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 300px;
`;

const StyledText = styled.p`
  margin-top: 10px;
`;
const StyledImg = styled.img`
  width: 100%;
`;

const StyledImgWrapper = styled.div`
  width: 50%;
`;

const StyledBtn = styled.button`
  margin-top: 20px;
  background: rgb(208, 208, 208);

  background: linear-gradient(
    180deg,
    rgba(208, 208, 208, 1) 0%,
    rgba(255, 255, 255, 0.5018601190476191) 100%
  );
  border: none;
  height: 30px;
  cursor: pointer;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: background-color 250ms linear;
  &:hover {
    background-color: #d0d0d0;
  }
  &:hover svg {
    transform: translateX(100px) scale(1.2) rotate(360deg);
    opacity: 0;
  }
`;

const StyledLogo = styled(Logo)`
  margin-left: 20px;
  transition: transform 500ms linear, opacity 250ms linear;
`;
