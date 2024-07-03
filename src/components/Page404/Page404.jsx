import React from 'react';
import Footer from '../Footer/Footer.jsx';
import {
  Page404Wrapper,
  Page404ContentWrapper,
  Page404ContentWallWrapper,
  Page404ContentWallCenterTexts,
  Page404ContentTextNumber,
  Page404ContentTextLorem,
} from './style';

function Page404() {
  return (
    <Page404Wrapper>
      <Page404ContentWrapper>
        <Page404ContentWallWrapper>
          <Page404ContentWallCenterTexts>
            <Page404ContentTextNumber>404</Page404ContentTextNumber>
            <Page404ContentTextLorem>Not Found</Page404ContentTextLorem>
          </Page404ContentWallCenterTexts>
        </Page404ContentWallWrapper>
      </Page404ContentWrapper>
      <Footer />
    </Page404Wrapper>
  );
}

export default Page404;
