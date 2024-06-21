import React from "react";
import Footer from "../Footer/Index.jsx";
import ContentTopMenu from "../ContentTopMenu/ContentTopMenu.jsx";
import "./style.css";

function Properties() {


  const cardsAbut = [
    { id: "1", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_1.png"},
    { id: "2", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_2.png"},
    { id: "3", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_3.png"},
    { id: "4", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_1.png"},
    { id: "5", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_2.png"},
    { id: "6", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_3.png"},
    { id: "7", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_1.png"},
    { id: "8", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_2.png"},
    { id: "9", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_3.png"},
    { id: "10", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_1.png"},
    { id: "11", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_2.png"},
    { id: "12", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_3.png"},
    { id: "13", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_1.png"},
    { id: "14", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_2.png"},
    { id: "15", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_3.png"},
  ];

  return (
    <div className="propContentWrapper">
      <ContentTopMenu />
      <div className="propContents">
        <div className="CardCaruselUpTopBg">
          <div className="CardCaruselUpTopTitle">Properties</div>
          <div className="CardCaruselUpTopAbout">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </div>
        </div>
        <div className="propContentCardsFilterBg">
          <p className="propContentAllCardsNumber">
            <p className="propContentAllCardsNumberBlod">13,474</p>
            results
          </p>
          <div className="propContentCardsFilterOptionsWrapper">
            <div className="propContentCardsFilterSellectWrapper">
              <p className="propContentCardsFilterSellectTitle">Sort by:</p>
              <select className="propContentCardsFilterSellectBg">
                <option value="">Newest Listings</option>
                <option value="Custom">Custom</option>
                <option value="Custom">Custom</option>
                <option value="Custom">Custom</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
          </div>
        </div>

        <div className="propContentCardsWrapper">
          {/* -- */}
          {cardsAbut.map((card) => (
            <div key={card.id} className="propContentCardItemBg">
              <div className="propContentCardItemTopItemsBg">
                <div className="propContentCardItemTopImgTopTitleBg_1">
                  FEATURED
                </div>
                <div className="propContentCardItemTopImgTopTitleBg_2">
                  FOR SALE
                </div>
                <img src={card.img} alt="img" className="propContentCardItemTopImg" />
              </div>
              <div className="propContentCardItemBottomItemsRowUserLogo">
                <img src={card.logo} alt="avatar" className="CardUserLogo" />
              </div>
              <div className="propContentCardItemBottomItemsBg">
                <div className="propContentCardItemBottomItemsRow_1">
                  <div className="propContentCardItemBottomItemsRow_1_Title">
                    {card.name}
                  </div>
                  <div className="propContentCardItemBottomItemsRow_1_About">
                    {card.about}
                  </div>
                </div>
                <div className="propContentCardItemBottomItemsRow_2">
                  <div className="propContentCardItemBottomItemsRow_2_ItemBg">
                    <div className="propContentCardItemBottomItemsRow_2_ItemIcon">
                      <img src="./src/assets/icons/bed.svg" alt="icon" />
                    </div>
                    <div className="propContentCardItemBottomItemsRow_2_ItemText">
                      {card.beds} Beds
                    </div>
                  </div>
                  <div className="propContentCardItemBottomItemsRow_2_ItemBg">
                    <div className="propContentCardItemBottomItemsRow_2_ItemIcon">
                      <img src="./src/assets/icons/bath.svg" alt="icon" />
                    </div>
                    <div className="propContentCardItemBottomItemsRow_2_ItemText">
                      {card.baths} Baths
                    </div>
                  </div>
                  <div className="propContentCardItemBottomItemsRow_2_ItemBg">
                    <div className="propContentCardItemBottomItemsRow_2_ItemIcon">
                      <img src="./src/assets/icons/car.svg" alt="icon" />
                    </div>
                    <div className="propContentCardItemBottomItemsRow_2_ItemText">
                      {card.garage} Garage
                    </div>
                  </div>
                  <div className="propContentCardItemBottomItemsRow_2_ItemBg">
                    <div className="propContentCardItemBottomItemsRow_2_ItemIcon">
                      <img src="./src/assets/icons/ruler.svg" alt="icon" />
                    </div>
                    <div className="propContentCardItemBottomItemsRow_2_ItemText">
                      {card.sqft} Sq Ft
                    </div>
                  </div>
                </div>
                <div className="propContentCardItemBottomItemsRow_3">
                  <div className="propContentCardItemBottomItemsRow_3LeftItmesBg">
                    <div className="propContentCardItemBottomItemsRow_3_OldMony">
                      ${card.oldmony}/mo
                    </div>
                    <div className="propContentCardItemBottomItemsRow_3_NewMony">
                      ${card.nevmony}/mo
                    </div>
                  </div>

                  <div className="propContentCardItemBottomItemsRow_3RightItmesBg">
                    <div className="propContentCardItemBottomItemsRow_3RightItmesBtnBg C-C-U-B-E-C-B-I-R-3-R-I-B-B__1">
                      <img src="./src/assets/icons/resize.svg" alt="icon" />
                    </div>
                    <div className="propContentCardItemBottomItemsRow_3RightItmesBtnBg C-C-U-B-E-C-B-I-R-3-R-I-B-B__2">
                      <img src="./src/assets/icons/love.svg" alt="icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* -- */}
        </div>

        <div className="propContentShowMoreBg">
          <div className="propContentShowMoreButton">Show more</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Properties;
