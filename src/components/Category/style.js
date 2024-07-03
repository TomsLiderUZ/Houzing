import styled from "styled-components";

export const CategoryCardCarouselWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 96px;
`;

export const CategoryCardCarouselCardsBg = styled.div`
  margin-top: 32px;
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

export const CategoryAllCardItemsBg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const CategoryAllCardWrapper = styled.div`
  width: 260px;
  height: 350px;
  border-radius: 3px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: hidden;
  position: relative;
`;

export const CategoryAllCardAsIcon = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 145px;
`;

export const CategoryAllCardWrapperItems = styled.div`
  background: hsla(0, 0%, 0%, 0.651);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  color: white;
  flex-wrap: wrap;
  transition: all 0.2s linear;

  &:hover {
    background-color: transparent;
  }
`;

export const CategoryAllCardAsTitle = styled.p`
  width: max-content;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: start;
  position: absolute;
  font-size: 18px;
  font-weight: 600;
  margin-top: 229px;
`;


export const CardCaruselUpBottomElement_BtnBG = styled.div`
  height: 100%;
  width: max-content;
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardCaruselUpBottomElementButton = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #e6e9ec;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5000px;
  cursor: pointer;
  transition: all 0.2s linear;
  box-shadow: 0px 8px 15px 0px #0000000f, 0px 7px 46px 0px #0000000f, 0px 20px 38px 0px #0000000f;

  &:hover {
    background-color: #00000028;
  }
`;




export const CardCaruselUpNuberBtmsWrapper = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  margin-top: 32px;
`;


export const CardCaruselUpNuberButtonItemBg = styled.div`
  width: 8px;
  height: 8px;
  background-color: var(--colorPrimary);
  border-radius: 5000px;
  cursor: pointer;
`;