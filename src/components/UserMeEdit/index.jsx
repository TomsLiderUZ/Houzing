import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Alert from "../Alert/Index.jsx";
import {
  Container,
  ContainerMine,
  ContainerCard,
  ContainerCardTitle,
  ContainerCardInpsWrapper,
  ContainerCardInput,
  ContainerCardInpLabel,
  ContainerCardInpLabelText,
  ContainerCardSubButton,
  ContainerCardSelect
} from "./style.js";

function UserMeEdit() {
  const [formData, setFormData] = useState({
    login: "",
    firstName: "",
    lastName: "",
    email: "",
    userRole: "",
    password: "",
    reEnterPassword: ""
  });

  const [focusState, setFocusState] = useState({
    login: false,
    firstName: false,
    lastName: false,
    email: false,
    userRole: false,
    password: false,
    reEnterPassword: false
  });

  const [errorState, setErrorState] = useState({
    login: false,
    firstName: false,
    lastName: false,
    email: false,
    userRole: false,
    password: false,
    reEnterPassword: false
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const inputs = [
    { name: "login", type: "text", label: "Login", mode: "input" },
    { name: "firstName", type: "text", label: "First name", mode: "input" },
    { name: "lastName", type: "text", label: "Last name", mode: "input" },
    { name: "email", type: "email", label: "Email", mode: "input" },
    { name: "userRole", label: "User role", mode: "select", options: { coder: "Coder", gamer: "Gamer", youtuber: "Youtuber" } },
    { name: "password", type: "password", label: "Password", mode: "input" },
    { name: "reEnterPassword", type: "password", label: "Re-enter password", mode: "input" }
  ];

  const handleFocus = (field) => {
    setFocusState((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    if (formData[field].length === 0) {
      setFocusState((prev) => ({ ...prev, [field]: false }));
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrorState((prev) => ({ ...prev, [field]: false }));
  };

  const hideAlert = () => {
    setAlertVisible(false);
  };

  return (
    <>
      <Container>
        <ContainerMine>
          <ContainerCard>
            <ContainerCardTitle>Profile</ContainerCardTitle>
            <form>
              <ContainerCardInpsWrapper>
                {inputs.map((input) => (
                  <ContainerCardInpLabel key={input.name}>
                    <ContainerCardInpLabelText isFocused={focusState[input.name] || formData[input.name]?.length > 0}>
                      {input.label}
                    </ContainerCardInpLabelText>
                    {input.mode === "input" ? (
                      <ContainerCardInput
                        type={input.type}
                        value={formData[input.name]}
                        onChange={(e) => handleChange(input.name, e.target.value)}
                        onFocus={() => handleFocus(input.name)}
                        onBlur={() => handleBlur(input.name)}
                        className={errorState[input.name] ? "error" : ""}
                      />
                    ) : (
                      <ContainerCardSelect
                        value={formData[input.name]}
                        onChange={(e) => handleChange(input.name, e.target.value)}
                        onFocus={() => handleFocus(input.name)}
                        onBlur={() => handleBlur(input.name)}
                        className={errorState[input.name] ? "error" : ""}
                      >
                        <option value=""></option>
                        {input.options && Object.entries(input.options).map(([key, value]) => (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        ))}
                      </ContainerCardSelect>
                    )}
                  </ContainerCardInpLabel>
                ))}
              </ContainerCardInpsWrapper>

              <ContainerCardSubButton disabled={true}>Register</ContainerCardSubButton>
            </form>
          </ContainerCard>
        </ContainerMine>
      </Container>
      <Footer />
      <Alert showAlert={alertVisible} showText={alertText} onHide={hideAlert} />
    </>
  );
}

export default UserMeEdit;
