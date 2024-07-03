import styled from 'styled-components';

export const Page404Wrapper = styled.div`
  width: 100%;
  height: max-content;
`;

export const Page404ContentWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  margin-top: 40px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  margin-bottom: 80px;
`;

export const Page404ContentWallWrapper = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-image: url("../../src/assets/img/Page404HolleWall_1.png");
  background-size: cover;
  background-position: center;
  cursor: default;

  @media only screen and (max-width: 1030px) {
    width: 800px;
    height: 400px;
  }

  @media only screen and (max-width: 900px) {
    width: 700px;
    height: 350px;
  }

  @media only screen and (max-width: 710px) {
    width: 600px;
    height: 300px;
  }

  @media only screen and (max-width: 610px) {
    width: 500px;
    height: 250px;
  }

  @media only screen and (max-width: 510px) {
    width: 400px;
    height: 200px;
  }

  @media only screen and (max-width: 410px) {
    width: 300px;
    height: 150px;
  }

  @media only screen and (max-width: 300px) {
    width: 290px;
    height: 145px;
  }
`;

export const Page404ContentWallCenterTexts = styled.div`
  width: 250px;
  margin-left: -20px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  color: white;

  @media only screen and (max-width: 410px) {
    margin-left: -10px;
  }
`;

export const Page404ContentTextNumber = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 90px;
  font-weight: 800;
  letter-spacing: 2px;

  @media only screen and (max-width: 1030px) {
    font-size: 70px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 60px;
  }

  @media only screen and (max-width: 710px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 510px) {
    font-size: 40px;
  }

  @media only screen and (max-width: 410px) {
    font-size: 30px;
  }
`;

export const Page404ContentTextLorem = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 35px;
  text-wrap: nowrap;

  @media only screen and (max-width: 1030px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 900px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 610px) {
    font-size: 15px;
  }

  @media only screen and (max-width: 510px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 410px) {
    font-size: 9px;
  }
`;
