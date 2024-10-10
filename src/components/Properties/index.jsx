import React from 'react';
import Footer from '../Footer/Footer.jsx';
import ContentTopMenu from '../ContentTopMenu/ContentTopMenu.jsx';
import TitleText from '../TitleText/TitleText.jsx';
import Card from '../Card/Card.jsx';
import {
  PropContentWrapper,
  PropContents,
  PropContentCardsFilterBg,
  PropContentAllCardsNumber,
  PropContentAllCardsNumberBold,
  PropContentCardsFilterOptionsWrapper,
  PropContentCardsFilterSelectWrapper,
  PropContentCardsFilterSelectTitle,
  PropContentCardsFilterSelectBg,
  PropContentShowMoreBg,
  PropContentShowMoreButton,
  PropContentCardsWrapper,
  PropContentCardsWrapperAllMin
} from './style';

function Properties() {
  const cardsAbut = [
    { id: "1", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_1.png" },
    { id: "2", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_2.png" },
    { id: "3", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_3.png" },
    { id: "4", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_1.png" },
    { id: "5", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_2.png" },
    { id: "6", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_3.png" },
    { id: "7", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_1.png" },
    { id: "8", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_2.png" },
    { id: "9", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_3.png" },
    { id: "10", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_1.png" },
    { id: "11", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_2.png" },
    { id: "12", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_3.png" },
    { id: "13", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_1.png" },
    { id: "14", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_2.png" },
    { id: "15", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "/assets/img/avatar_3.png" },
  ];


  return (
    <PropContentWrapper>
      <ContentTopMenu />
      <PropContents>
        <TitleText
          title="Properties"
          about="Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
          minAbout="112 Glenwood Ave Hyde Park, Boston, MA"
        />
        <PropContentCardsFilterBg>
          <PropContentAllCardsNumber>
            <PropContentAllCardsNumberBold>13,474</PropContentAllCardsNumberBold>
            results
          </PropContentAllCardsNumber>
          <PropContentCardsFilterOptionsWrapper>
            <PropContentCardsFilterSelectWrapper>
              <PropContentCardsFilterSelectTitle>Sort by:</PropContentCardsFilterSelectTitle>
              <PropContentCardsFilterSelectBg>
                <option value="">Newest Listings</option>
                <option value="Custom">Custom</option>
                <option value="Custom">Custom</option>
                <option value="Custom">Custom</option>
                <option value="Custom">Custom</option>
              </PropContentCardsFilterSelectBg>
            </PropContentCardsFilterSelectWrapper>
          </PropContentCardsFilterOptionsWrapper>
        </PropContentCardsFilterBg>
        < PropContentCardsWrapperAllMin>
          <PropContentCardsWrapper>
            {cardsAbut.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </PropContentCardsWrapper>
        </PropContentCardsWrapperAllMin>
        <PropContentShowMoreBg>
          <PropContentShowMoreButton>Show more</PropContentShowMoreButton>
        </PropContentShowMoreBg>
      </PropContents>
      <Footer />
    </PropContentWrapper>
  );
}

export default Properties;
