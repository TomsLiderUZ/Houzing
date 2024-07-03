import styled from "styled-components";

export const CardItemBg = styled.div`
  width: 370px;
  height: 429px;
  display: flex;
  justify-content: left;
  align-items: start;
  flex-wrap: wrap;
  border: 1px solid #e6e9ec;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s linear;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 8px 15px 0px #0000000f, 0px 7px 46px 0px #0000000f,
      0px 20px 38px 0px #0000000f;
  }

  @media only screen and (max-width: 759px) {
    width: 343px;
  }

  @media only screen and (max-width: 350px) {
    width: 300px;
  }

  @media only screen and (max-width: 300px) {
    width: 250px;
  }

`;

export const CardItemTopItemsBg = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  position: relative;
  background-position: center;
`;

export const CardItemTopImgTopTitlesWrapper = styled.div`
  width: 370px;
  height: max-content;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 20px;

  @media only screen and (max-width: 759px) {
    width: 343px;
  }
  @media only screen and (max-width: 350px) {
    width: 300px;
  }
  @media only screen and (max-width: 300px) {
    width: 250px;
  }
`;

export const CardItemTopImgTopTitlesWrapperLeftItem = styled.div`
  width: 50%;
  height: max-content;
  display: flex;
  justify-content: left;
  align-items: start;
  box-sizing: border-box;
  padding: 0 0 0 20px;
`;

export const CardItemTopImgTopTitlesWrapperRightItem = styled.div`
  width: 50%;
  height: max-content;
  display: flex;
  justify-content: right;
  align-items: start;
  box-sizing: border-box;
  padding: 0 20px 0 0;
`;

export const CardItemTopImgTopTitleBg_1 = styled.div`
  width: 73px;
  height: 23px;
  border-radius: 3px;
  background-color: var(--colorPrimary);
  font-size: 10px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardItemTopImgTopTitleBg_2 = styled.div`
  width: 71px;
  height: 23px;
  border-radius: 3px;
  background-color: var(--bgWrapper);
  font-size: 10px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const CardItemBottomItemsRowUserLogoWrapper = styled.div`
  width: 370px;
  height: max-content;
  position: absolute;
  display: flex;
  justify-content: right;
  align-items: start;
  margin-top: 199px;
  box-sizing: border-box;
  padding: 0 20px 0 0;

  @media only screen and (max-width: 759px) {
    width: 343px;
  }
  @media only screen and (max-width: 350px) {
    width: 300px;
  }
  @media only screen and (max-width: 300px) {
    width: 250px;
  }
`;


export const CardItemBottomItemsRowUserLogo = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  border: 2px solid white;
  overflow: hidden;
  
  box-shadow: 0px 0px 10px 0px #0d263b33;
`;

export const CardItemBottomItemsBg = styled.div`
  width: 100%;
  height: 209px;
`;

export const CardItemBottomItemsRow_1 = styled.div`
  width: 100%;
  height: 52px;
  row-gap: 2px;
  margin-top: 20px;
`;

export const CardItemBottomItemsRow_1_Title = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 24px;
  box-sizing: border-box;
  padding: 0 0 0 20px;
  font-size: 16px;
  font-weight: 600;
  color: var(--bgWrapper);
`;

export const CardItemBottomItemsRow_1_About = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  padding: 0 0 0 20px;
  font-size: 14px;
  font-weight: 400;
  color: var(--txtColor);
`;

export const CardItemBottomItemsRow_2 = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 14px;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  gap: 35px;
  display: flex;
  justify-content: left;
  align-items: center;
  
  @media only screen and (max-width: 759px) {
    gap: 25px;
  }
  @media only screen and (max-width: 350px) {
    gap: 15px;
  }
  @media only screen and (max-width: 300px) {
    gap: 10px;
  }
`;


export const CardItemBottomItemsRow_3 = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 14px;
  border-top: 1px solid #e6e9ec;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
`;

export const CardItemBottomItemsRow_3LeftItmesBg = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 8px 0 8px 16px;
`;

export const CardItemBottomItemsRow_3RightItmesBg = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 20px 0 0;
`;

export const CardItemBottomItemsRow_3RightItmesBtnBg = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.C-C-U-B-E-C-B-I-R-3-R-I-B-B__2 {
    background-color: #f6f8f9;
    border-radius: 50%;
  }
`;

export const CardItemBottomItemsRow_3_OldMony = styled.div`
  width: 100%;
  height: 20px;
  font-size: 12px;
  font-weight: 400;
  color: var(--txtColor);
  text-decoration: line-through;
`;

export const CardItemBottomItemsRow_3_NewMony = styled.div`
  color: var(--bgWrapper);
  width: 100%;
  height: 24px;
  font-size: 16px;
  font-weight: 600;
`;

export const CardItemBottomItemsRow_2_ItemBg = styled.div`
  width: max-content;
  height: 100%;
  max-width: 75px;
  overflow: hidden;
`;

export const CardItemBottomItemsRow_2_ItemIcon = styled.div`
  width: 48px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 5px;
`;

export const CardItemBottomItemsRow_2_ItemText = styled.div`
  min-width: 48px;
  width: max-content;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: var(--txtColor);
`;
