import { useState } from "react";
import {
  FormContainer,
  StyledForm,
  StyledInput,
  InputAndLabelContainer,
  FormRow,
  StyledLabel,
  StyledInputContainer,
  FormHeader,
} from "./styles.form";

const defaultUserInfo = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Form() {
  const [userInfo, setUserInfo] = useState({ ...defaultUserInfo });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ ...defaultUserInfo });
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormHeader>Sign Up</FormHeader>
        <FormRow>
          <InputAndLabelContainer>
            <StyledLabel>First Name</StyledLabel>
            <StyledInputContainer>
              <StyledInput
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
            </StyledInputContainer>
          </InputAndLabelContainer>
          <InputAndLabelContainer>
            <StyledLabel>Last Name</StyledLabel>
            <StyledInputContainer>
              <StyledInput
                onChange={handleChange}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </StyledInputContainer>
          </InputAndLabelContainer>
        </FormRow>

        <FormRow>
          <InputAndLabelContainer>
            <StyledLabel>Email</StyledLabel>

            <StyledInputContainer>
              <StyledInput
                onChange={handleChange}
                name="email"
                type="text"
                placeholder="Email"
              />
            </StyledInputContainer>
          </InputAndLabelContainer>
        </FormRow>

        <FormRow>
          <InputAndLabelContainer>
            <StyledLabel>Password</StyledLabel>
            <StyledInputContainer>
              <StyledInput
                onChange={handleChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </StyledInputContainer>
          </InputAndLabelContainer>
        </FormRow>
      </StyledForm>
    </FormContainer>
  );
}
