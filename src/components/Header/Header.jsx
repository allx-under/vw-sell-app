import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";

import { login, logout } from "../../redux/actions";
import { app } from "../../firebase";
import { getAuth } from "firebase/auth";
import { useEffect } from "react";

const Header = () => {
  const currentUserId = useSelector((state) => state.auth.uid);
  const cars = useSelector((state) => state.cars).filter(
    (car) => car.userId === currentUserId
  );
  const isAuth = useSelector((state) => state.auth.isAuth);

  const auth = getAuth(app);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (user !== null) {
        return dispatch(login(user));
      }
    });

    return unsub;
  }, [auth, dispatch]);

  return (
    <>
      <StyledContainer>
        <Wrapper>
          <StyledLogoLink to="/">
            <StyledLogo />
          </StyledLogoLink>

          <StyledLink to="/cars">Our cars</StyledLink>
        </Wrapper>
        <Wrapper>
          {isAuth ? (
            <>
              <StyledAuthLink to="/profile">Profile</StyledAuthLink>
              <StyledAuthLink
                onClick={() => {
                  auth.signOut();
                  dispatch(logout({}));
                }}
              >
                Logout
              </StyledAuthLink>
            </>
          ) : (
            <StyledAuthLink to="/signin">Sign in</StyledAuthLink>
          )}
        </Wrapper>
      </StyledContainer>
      <StyledCartLink amount={cars?.length} to="/cart">
        <StyledCartImg width="100%" />
      </StyledCartLink>
    </>
  );
};

export default Header;

const StyledContainer = styled.div`
  width: 100%;
  height: 80px;
  background: rgb(20, 20, 20);
  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 0.8) 0%,
    rgba(103, 103, 103, 0.1) 100%
  );
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledCartLink = styled(Link)`
  position: absolute;
  top: 60px;
  right: 40px;
  width: 25px;
  height: 25px;
  color: black;
  border-radius: 50%;
  background-color: rgba(103, 103, 103, 0.1);
  padding: 5px;
  transition: color 250ms linear, transform 250ms linear;
  &::after {
    content: "${({ amount }) => (amount ? amount : "")}";
    position: absolute;
    top: -3px;
    right: -3px;
  }
  &:hover,
  :focus {
    color: #d0d0d0;
    transform: scale(0.9);
  }
`;

const StyledCartImg = styled(AiOutlineShoppingCart)`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 50px;
  font-size: 20px;
  transition: transform 250ms linear;
  position: relative;
  &:hover::before,
  :focus::before {
    transform: scaleX(1);
    transform-origin: 0 50%;
    transition-delay: 100ms;
  }
  &::before {
    display: block;
    content: "";
    border-bottom: 2px solid black;
    transform: scaleX(0);
    transform-origin: 0 50%;
    bottom: -3px;
    left: 0;
    position: absolute;
    width: 100%;
    transition: transform 250ms ease-in-out;
  }
`;

const StyledLogoLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 50px;
  font-size: 20px;
  &:hover svg,
  :focus svg {
    transform: rotate(360deg) scale(1.2);
  }
`;

const StyledLogo = styled(Logo)`
  width: 40px;
  height: 40px;
  transition: transform 400ms ease-in-out;
`;

const StyledAuthLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: black;
  margin-right: 50px;

  transition: transform 250ms linear;
  position: relative;
  &:hover::before,
  :focus::before {
    transform: scaleX(1);
    transform-origin: 0 50%;
    transition-delay: 100ms;
  }
  &::before {
    display: block;
    content: "";
    border-bottom: 2px solid black;
    transform: scaleX(0);
    transform-origin: 0 50%;
    bottom: -3px;
    left: 0;
    position: absolute;
    width: 100%;
    transition: transform 250ms ease-in-out;
  }
`;
