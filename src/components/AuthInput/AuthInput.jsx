import styled from "styled-components";
import { ErrorMessage, Field } from "formik";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const AuthInput = ({ setFieldValue, type }) => {
  return (
    <StyledInputWrapper>
      <StyledLabel htmlFor={type}>{capitalizeFirstLetter(type)}</StyledLabel>
      <StyledInput
        autoComplete="off"
        id={type}
        type={type}
        name={type}
        onChange={(e) => setFieldValue(type, e.target.value)}
      />
      <StyledError name={type} component="div" />
    </StyledInputWrapper>
  );
};

export default AuthInput;

const StyledInput = styled(Field)`
  background: rgba(255, 255, 255, 0.7);
  width: 500px;
  height: 40px;
  border: 1px solid white;
  font-size: 22px;
  outline: none;
  margin-bottom: 10px;
  padding: 0 5px;
  &:hover,
  :focus {
    border: 1px solid black;
  }
`;

const StyledError = styled(ErrorMessage)`
  color: red;
  text-transform: uppercase;
`;

const StyledLabel = styled.label`
  color: white;
  margin-bottom: 5px;
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;
