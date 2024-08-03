import React, { useState, useEffect } from "react";
import {
  AlertUpWrapper,
  AlertBox,
  AlertBoxTextBg,
  AlertBoxText,
  AlertBoxBtnBg,
  AlertBoxButton,
} from "./AlertStyles";

function Alert({ showAlert, showText, onHide }) {
  const [showAlertBox, setShowAlertBox] = useState(showAlert);
  const [showTextBox, setShowTextBox] = useState(showText);
  const [showAlertStyle1, setshowAlertStyle1] = useState("none");
  const [showAlertStyle2, setshowAlertStyle2] = useState("0");
  const [alertBoxMarginTop, setAlertBoxMarginTop] = useState("-500px");

  useEffect(() => {
    setShowAlertBox(showAlert);
    setShowTextBox(showText);

    if (showAlert) {
      setshowAlertStyle1("flex");
      setTimeout(() => {
        setshowAlertStyle2("1");
        setAlertBoxMarginTop("0");
      }, 100);
      document.body.style.overflowY = "hidden";
    } else {
      setshowAlertStyle2("0");
      setTimeout(() => {
        setshowAlertStyle1("none");
        setAlertBoxMarginTop("-1000px");
      }, 500);
      document.body.style.overflowY = "scroll";
    }
  }, [showAlert, showText]);

  const hideAlertBox = () => {
    setshowAlertStyle2("0");
    setAlertBoxMarginTop("-1000px");
    setTimeout(() => {
      setshowAlertStyle1("none");
      onHide();
    }, 100);
  };

  return (
    <>
      <AlertUpWrapper showAlertStyle1={showAlertStyle1} showAlertStyle2={showAlertStyle2}>
        <AlertBox marginTop={alertBoxMarginTop}>
          <AlertBoxTextBg>
            <AlertBoxText>{showTextBox}</AlertBoxText>
          </AlertBoxTextBg>
          <AlertBoxBtnBg>
            <AlertBoxButton onClick={hideAlertBox}>OK</AlertBoxButton>
          </AlertBoxBtnBg>
        </AlertBox>
      </AlertUpWrapper>
    </>
  );
}

export default Alert;
