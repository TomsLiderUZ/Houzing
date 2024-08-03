import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 90vh;
  height: max-content;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-wrap: wrap;
  padding: 35px 0 65px 0;
  box-sizing: border-box;

`;




export const ContainerCardTopAvatarBg = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e9ec;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  position: absolute;
  border-radius: 5000px;
  /* margin-top: -90px; */
  background-color: white;
  font-size: 580%;
  font-weight: 600;
  box-sizing: border-box;
  padding: 20px;
  letter-spacing: 2px;
  overflow: hidden;
  background-position: center;
  background-size: 100%;
  text-shadow: #ffffff 1.41px 1.41px, #ffffff 2px 0px, #ffffff 1.41px -1.41px, #ffffff 0px -2px, #ffffff -1.41px -1.41px, #ffffff -2px 0px, #ffffff -1.41px 1.41px, #ffffff 0px 2px;
  &::selection{
    background-color: transparent;
  }

`;


export const ContainerCardTopAvatarDisableItem = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 5000px;
  background-color: transparent;
  font-size: 70%;
  color: transparent;
  cursor: default;
  opacity: 0;
  transition: all 0.2s linear;
`;




export const ContainerWrapperCard = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  box-sizing: border-box;
  padding: 0px 30px 48px 60px;
  box-sizing: border-box;
  border-radius: 10px;
  /* margin-top: 80px; */
`;



export const ContainerCardRow_1 = styled.div`
  min-width: 250px;
  width: max-content;
  min-height: 500px;
  height: max-content;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-wrap: wrap;
  padding: 0;
  box-sizing: border-box;
  background-color: red;
  display: flex;
  position: absolute;
  margin-right: 1000px;
  
  @media only screen and (max-width: 1396px) {
    left: 0;
    margin-right: 0;
    margin-left: 70px;
  }

  @media only screen and (max-width: 980px) {
    margin-left: 10px;
  }
`;


export const ContainerCardRow_2 = styled.div`
  min-width: 690px;
  width: max-content;
  min-height: 500px;
  height: max-content;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-wrap: wrap;
  padding: 0;
  box-sizing: border-box;
  background-color: red;
  display: flex;
  position: absolute;
  margin-left: 320px;
  
  @media only screen and (max-width: 1396px) {
    right: 0;
    margin-left: 0;
    margin-right: 130px;
  }

  @media only screen and (max-width: 980px) {
    margin-right: 50px;
  }
`;