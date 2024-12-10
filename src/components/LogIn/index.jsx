import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Alert from "../Alert/Index.jsx";
import { useActiveInfo } from '../../hooks/ActiveInfo.js';
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
  ContainerNavigateWrapper,
  ContainerNavigateLinksCard,
  ContainerNavigateLink,

  ContainerCardChekWrapper,
  ContainerCardChekWrapperLeftItem,
  ContainerCardChekWrapperRightItem,
  ContainerCardChekBox,
  ContainerCardChekTitle,
  ContainerCardChekLinkBg
} from "./style";

function LogIn() {
  useActiveInfo("@BOT_10")



  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const [focusState, setFocusState] = useState({
    login: false,
    password: false,
  });

  const [errorState, setErrorState] = useState({
    login: false,
    password: false,
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const inputs = [
    { name: "login", type: "text", label: "Login", mode: "input" },
    { name: "password", type: "password", label: "Password", mode: "input" },
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
          <ContainerNavigateWrapper>
            <ContainerNavigateLinksCard>
              <ContainerNavigateLink style={{ borderBottom: location.pathname === "/user/login" ? "2px solid var(--colorPrimary)" : "0" }}>
                <Link to={"/user/login"} style={{ color: location.pathname === "/user/login" ? "var(--colorPrimary)" : "var(--bgWrapper)" }}>Login</Link>
              </ContainerNavigateLink>
              <ContainerNavigateLink style={{ borderBottom: location.pathname === "/user/register" ? "2px solid var(--colorPrimary)" : "0" }}>
                <Link to={"/user/register"} style={{ color: location.pathname === "/user/register" ? "var(--colorPrimary)" : "var(--bgWrapper)" }}>Register</Link>
              </ContainerNavigateLink>
            </ContainerNavigateLinksCard>
          </ContainerNavigateWrapper>

          <ContainerCard>
            <ContainerCardTitle>Sign in</ContainerCardTitle>
            <form>
              <ContainerCardInpsWrapper>
                {inputs.map((input) => (
                  <ContainerCardInpLabel key={input.name}>
                    <ContainerCardInpLabelText isFocused={focusState[input.name] || formData[input.name]?.length > 0}>
                      {input.label}
                    </ContainerCardInpLabelText>
                    <ContainerCardInput
                      type={input.type}
                      value={formData[input.name]}
                      onChange={(e) => handleChange(input.name, e.target.value)}
                      onFocus={() => handleFocus(input.name)}
                      onBlur={() => handleBlur(input.name)}
                      className={errorState[input.name] ? "error" : ""}
                    />
                  </ContainerCardInpLabel>
                ))}
              </ContainerCardInpsWrapper>

              <ContainerCardChekWrapper>
                <ContainerCardChekWrapperLeftItem>
                  <ContainerCardChekBox type="checkbox" />
                  <ContainerCardChekTitle>Remember me</ContainerCardChekTitle>
                </ContainerCardChekWrapperLeftItem>
                <ContainerCardChekWrapperRightItem>
                  <ContainerCardChekLinkBg>
                    <Link to={"/user/login/forgot"}>Forgot</Link>
                  </ContainerCardChekLinkBg>
                </ContainerCardChekWrapperRightItem>
              </ContainerCardChekWrapper>

              <ContainerCardSubButton type="submit" disabled={true}>Login</ContainerCardSubButton>
            </form>
          </ContainerCard>
        </ContainerMine>
      </Container>
      <Footer />
      <Alert showAlert={alertVisible} showText={alertText} onHide={hideAlert} />
    </>
  );
}

export default LogIn;
