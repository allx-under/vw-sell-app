import { Formik, Form } from "formik";
import * as yup from "yup";
import styled from "styled-components";
import AuthInput from "../AuthInput/AuthInput";

const validationSchema = yup.object().shape({
  email: yup.string().email("Email is not valid").required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .max(32)
    .matches(/^\S{7,32}$/, "Password is not valid")
    .required("Password is required"),
});

const LoginForm = () => {
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, setFieldValue }) => (
        <StyledForm>
          <AuthInput type="email" setFieldValue={setFieldValue} />
          <AuthInput type="password" setFieldValue={setFieldValue} />
          <StyledBtn type="submit" disabled={isSubmitting}>
            Login
          </StyledBtn>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;

const StyledForm = styled(Form)`
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

const StyledBtn = styled.button`
  background: rgba(255, 255, 255, 0.7);
  height: 40px;
  border: none;
  width: 150px;
  font-size: 22px;
  cursor: pointer;
  transition: background-color 250ms linear;
  &:hover,
  :focus {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
