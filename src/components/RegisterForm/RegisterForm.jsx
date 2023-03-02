import styled from "styled-components";

import { useNavigate } from "react-router-dom";

import { getAuth, signInWithPopup } from "firebase/auth";
import { app, googleAuthProvider } from "../../firebase";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";

const RegisterForm = () => {
  const auth = getAuth(app);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onClickGoogleAuth = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((creds) => {
        dispatch(login(creds.user));
        navigate("/profile");
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <Wrapper>
      <StyledText>
        For login or register with Google you can click the link below:
      </StyledText>

      <div>
        <StyledBtn onClick={onClickGoogleAuth}>
          <StyledGoogleIcon />
        </StyledBtn>
      </div>
    </Wrapper>
  );
};

export default RegisterForm;

const Wrapper = styled.div`
  background-color: rgba(20, 20, 20, 0.8);
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  height: 400px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.p`
  font-size: 20px;
  color: #eab676;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const StyledGoogleIcon = styled(FcGoogle)`
  width: 40px;
  height: 40px;
`;

const StyledBtn = styled.button`
  width: 80px;
  height: 80px;
  border: 1px solid #fff;
  background: rgb(208, 208, 208);
  transition: background 250ms linear;
  background: linear-gradient(
    180deg,
    rgba(208, 208, 208, 1) 0%,
    rgba(255, 255, 255, 0.5018601190476191) 100%
  );
  &:hover, : focus {
    background-color: rgb(208, 208, 208);
  }
  cursor: pointer;
`;
