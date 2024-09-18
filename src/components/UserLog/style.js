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
  width: 180px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e9ec;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  border-radius: 5000px;
  background-color: white;
  font-size: 450%;
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


export const ContainerCardTopProfileInfoBg = styled.div`
  width: 800px;
  height: 180px;
  display: flex;
  align-items: start;
  justify-content: left;
  /* background-color: green; */
  flex-wrap: wrap;
  box-sizing: border-box;
  /* overflow: hidden; */
  margin-left: 20px;
  /* letter-spacing: 1px; */
  
`;

export const ContainerCardTopProfileInfoName = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: left;
  /* background-color: blue; */
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 40px;
  font-weight: 600;
  /* margin-top: 20px; */
  color: var(--bgWrapper);
`;

export const ContainerCardTopProfileInfoActivator = styled.div`
  width: max-content;
  height: max-content;
  margin-left: 10px;
  font-size: 20px;
  color: var(--colorPrimary);
  margin-top: 10px;
`;


export const ContainerCardTopProfileInfoLogName = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: left;
  /* background-color: yellow; */
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 22px;
  font-weight: 600;
  /* margin-top: 20px; */

  
  #ContainerCardTopProfileInfoLogNameLink{
    color: var(--txtColor);
    cursor: pointer;
    border-bottom: 1px solid transparent;
    &:hover{
      color: var(--colorPrimary);
      border-bottom: 1px solid var(--colorPrimary);
    }
    &:focus{
      color: var(--colorPrimary);
      border-bottom: 1px solid var(--colorPrimary);
      outline: 0;
    }
  }
`;

export const ContainerCardTopProfileInfoFollows = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: left;
  /* background-color: red; */
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 18px;
  font-weight: 600;
  gap: 6px;
  cursor: default;

  span{
    font-size: 18px;
    font-weight: 800;
  }

  
  #ContainerCardTopProfileInfoFollowsLink{
    color: black;
    cursor: pointer !important;
    border-bottom: 1px solid transparent;
    &:hover{
      color: var(--colorPrimary);
      border-bottom: 1px solid var(--colorPrimary);
    }
    &:focus{
      color: var(--colorPrimary);
      border-bottom: 1px solid var(--colorPrimary);
      outline: 0;
    }
  }
`;



export const ContainerCardTopProfileFollowUpWarpper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: left;
  /* background-color: pink; */
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow: hidden;
  font-size: 20px;
  font-weight: 600;
`;


export const ContainerCardTopProfileFollowBtn = styled.button`
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--colorPrimary);
  flex-wrap: wrap;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  color: white;
  cursor: pointer;
  transition: all 0.1s linear;
  border-radius: 5px;

  &:hover{
    background-color: var(--bgWrapper);
  }

  &:focus{
    outline-color: var(--bgWrapper);
  }
`;


export const ContainerCardTopProfileUnFollowBtn = styled.button`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: left;
  background-color: red;
  flex-wrap: wrap;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 600;
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
  /* padding: 0px 30px 48px 60px; */
  box-sizing: border-box;
  /* margin-top: 80px; */
`;



export const ContainerCardRow_1 = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  box-sizing: border-box;
  /* background-color: green; */
  display: flex;
`;

export const ContainerCardRow_1_Doc = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  box-sizing: border-box;
  display: flex;

  position: absolute;
  margin-right: 100px;
  /* background-color: red; */
  
@media only screen and (max-width: 1396px) {
  left: 0;
  margin-right: 0;
  margin-left: 130px;
}

@media only screen and (max-width: 980px) {
  margin-left: 50px;
}

@media only screen and (max-width: 750px) {
  margin-left: 10px;
}
`;


export const ContainerCardRow_2 = styled.div`
  width: 100%;
  min-height: 500px;
  height: max-content;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  box-sizing: border-box;
  /* background-color: green; */
  display: flex;
  margin-top: 40px;
  box-sizing: border-box;

@media only screen and (max-width: 750px) {
  padding: 0 20px 0 10px;
}
`;

export const ContainerCardRow_2_Doc = styled.div`
  width: 1080px;
  min-height: 500px;
  height: max-content;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  box-sizing: border-box;
  display: flex;

  position: absolute;
  margin-right: 25px;
  background-color: wheat;
  
@media only screen and (max-width: 1396px) {
  left: 0;
  margin-right: 0;
  margin-left: 130px;
  width: 80%;
}

@media only screen and (max-width: 980px) {
  margin-left: 50px;
  width: 90%;
}

@media only screen and (max-width: 750px) {
  margin-left: 0px;
  width: 100%;
  position: unset;
}
`;








export const HashInfoModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.795);
  backdrop-filter: blur(2px);
  justify-content: center;
  align-items: center;
  z-index: 999999999999999;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const HashInfoModal = styled.div`
  width: 600px;
  height: 95vh;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

export const HashInfoModal_Top = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
`;

export const HashInfoModal_Top_Row1 = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  align-items: start;
  justify-content: center;
  box-sizing: border-box;
  padding: 25px 25px 0 0;
  font-size: 25px;
  color: black;
`;

export const HashInfoModal_Top_Row1Title = styled.p`
  position: absolute;
  margin-left: 25px;
  font-weight: 700;
`;

export const HashInfoModal_Top_Row1Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: start;
  justify-content: right;
`;

export const HashInfoModal_Top_Row1CloseBtn = styled.button`
  cursor: pointer;
  font-size: 25px;
`;

export const HashInfoModal_Top_Row2 = styled.div`
  width: 100%;
  height: 35%;
  /* background-color: red; */
`;


export const HashInfoModal_Top_Row2Links = styled.button`
  width: 33.33%;
  height: 100%;
  /* background-color: green; */
  border-bottom: 2px solid transparent;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
  color: var(--txtColor);
  transition: all 0.1s linear;
`;

export const HashInfoModal_Content = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: green; */
`;
export const HashInfoModal_Content_Row1 = styled.div`
  width: 100%;
  height: 55px;
  /* background-color: red; */
  box-sizing: border-box;
  padding: 7.5px 20px;
`;
export const HashInfoModal_Content_RowSerachWrapper = styled.label`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-top: 6px;
  cursor: text;
`;
export const HashInfoModal_Content_RowSerachIcon = styled.div`
  position: absolute;
  margin-left: 15px;
  color: var(--bgWrapperOnly);
  transition: 0.1s linear;
`;

export const HashInfoModal_Content_RowSerachInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding-left: 38px;
  font-size: 16px;
  font-weight: 500;
  border: 0;
  background-color: #d3d2d2;
  outline: 0;
  box-sizing: border-box;
  padding-right: 10px;
  transition: padding-left 0.1s linear;
  color: var(--bgWrapperOnly);

  &::placeholder{
    color: var(--bgWrapperOnly);
  }

  &:focus{
    padding-left: 15px;
    color: black;
  }
`;

export const HashInfoModal_Content_Row2 = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: red; */
`;

export const HashInfoModal_Content_Card = styled.div`
  width: 100%;
  height: 50px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
