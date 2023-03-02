import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Profile = () => {
  const user = useSelector((state) => state.auth);
  return (
    <Wrapper>
      <ImageWrapper>
        <StyledImg
          src={
            user?.photoURL
              ? user.photoURL
              : "https://i.pinimg.com/originals/ca/52/e6/ca52e6e168595f767c2121a68cc227b0.jpg"
          }
          alt="userphoto"
        />
      </ImageWrapper>
      <StyledText>Name: {user.displayName}</StyledText>
      <StyledText>Email: {user.email}</StyledText>
      <StyledString>Now you can buy your new dream!</StyledString>
      <StyledLink to="/cars">Go to check all available cars!</StyledLink>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  background-color: rgba(20, 20, 20, 0.8);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.p`
  color: white;
`;

const StyledString = styled.p`
  font-size: 20px;
  color: #fff;
  margin-top: 40px;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: #eab676;
  margin-top: 10px;
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid white;
  overflow: hidden;
  margin-bottom: 20px;
`;
