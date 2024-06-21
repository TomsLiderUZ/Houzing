import React from 'react';
import "./style.css";

function Index({ title, about }) {

  const DarkRightBtnSvg = <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.33355 5.53176L3.9934 0.191706C3.86989 0.068097 3.70501 0 3.5292 0C3.3534 0 3.18852 0.068097 3.06501 0.191706L2.67175 0.584873C2.41585 0.841066 2.41585 1.25745 2.67175 1.51326L7.156 5.99751L2.66677 10.4867C2.54326 10.6104 2.47507 10.7751 2.47507 10.9508C2.47507 11.1267 2.54326 11.2915 2.66677 11.4152L3.06004 11.8083C3.18365 11.9319 3.34843 12 3.52423 12C3.70003 12 3.86491 11.9319 3.98842 11.8083L9.33355 6.46336C9.45735 6.33936 9.52535 6.1738 9.52496 5.99781C9.52535 5.82112 9.45735 5.65566 9.33355 5.53176Z" fill="#0D263B"/> </svg>
  const DarkLeftBtnSvg = <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.66642 6.46824L8.00657 11.8083C8.13008 11.9319 8.29496 12 8.47076 12C8.64657 12 8.81144 11.9319 8.93496 11.8083L9.32822 11.4151C9.58412 11.1589 9.58412 10.7425 9.32822 10.4867L4.84396 6.00249L9.3332 1.51326C9.45671 1.38965 9.5249 1.22487 9.5249 1.04916C9.5249 0.873261 9.45671 0.708482 9.3332 0.584775L8.93993 0.191706C8.81632 0.0680971 8.65154 0 8.47574 0C8.29994 0 8.13506 0.0680971 8.01155 0.191706L2.66642 5.53664C2.54262 5.66064 2.47462 5.8262 2.47501 6.00219C2.47462 6.17888 2.54262 6.34434 2.66642 6.46824Z" fill="#0D263B"/> </svg>



  const cardsAbut = [
    { id: "1", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_4.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_1.png"},
    { id: "2", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_2.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_2.png"},
    { id: "3", name: "New Apartment Nice View", about: "Quincy St, Brooklyn, NY, USA", img: "./src/assets/img/carusel_img_5.png", beds: "4", baths: "5", garage: "1", sqft: "1200", oldmony: "2.800", nevmony: "7.500", logo: "./src/assets/img/avatar_3.png"},
  ];

  return (
    <div className='CardCaruselUpBg'>
      <div className="CardCaruselUpTopBg">
        <div className="CardCaruselUpTopTitle">{title}</div>
        <div className="CardCaruselUpTopAbout">{about}</div>
      </div>
      <div className="CardCaruselUpBottomBg">
        <div className="CardCaruselUpBottomElement_BtnBG">
          <div className="CardCaruselUpBottomElementButton">{DarkLeftBtnSvg}</div>
        </div>
        <div className="CardCaruselUpBottomElement_Cards">
          {/* -- */}
          {cardsAbut.map(card => (
            <div key={card.id} className="CardCaruselUpBottomElementCardBg">
              <div className="CardCaruselUpBottomElementCardTopItemsBg">
                <div className="CardCaruselUpBottomElementCardTopImgTopTitleBg_1">FEATURED</div>
                <div className="CardCaruselUpBottomElementCardTopImgTopTitleBg_2">FOR SALE</div>
                <img src={card.img} alt="img" className="CardCaruselUpBottomElementCardTopImg" />
              </div>
              <div className="CardCaruselUpBottomElementCardBottomItemsRowUserLogo">
                <img src={card.logo} alt="avatar" className="CardUserLogo" />
              </div>
              <div className="CardCaruselUpBottomElementCardBottomItemsBg">
                <div className="CardCaruselUpBottomElementCardBottomItemsRow_1">
                  <div className="CardCaruselUpBottomElementCardBottomItemsRow_1_Title">{card.name}</div>
                  <div className="CardCaruselUpBottomElementCardBottomItemsRow_1_About">{card.about}</div>
                </div>
                <div className="CardCaruselUpBottomElementCardBottomItemsRow_2">
                  <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemBg">
                    <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemIcon"><img src="./src/assets/icons/bed.svg" alt="icon" /></div>
                    <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemText">{card.beds} Beds</div>
                  </div>
                  <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemBg">
                    <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemIcon"><img src="./src/assets/icons/bath.svg" alt="icon" /></div>
                    <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemText">{card.baths} Baths</div>
                  </div>
                  <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemBg">
                    <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemIcon"><img src="./src/assets/icons/car.svg" alt="icon" /></div>
                    <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemText">{card.garage} Garage</div>
                  </div>
                  <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemBg">
                    <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemIcon"><img src="./src/assets/icons/ruler.svg" alt="icon" /></div>
                    <div className="CardCaruselUpBottomElementCardBottomItemsRow_2_ItemText">{card.sqft} Sq Ft</div>
                  </div>
                </div>
                <div className="CardCaruselUpBottomElementCardBottomItemsRow_3">
                    <div className="CardCaruselUpBottomElementCardBottomItemsRow_3LeftItmesBg">
                        <div className="CardCaruselUpBottomElementCardBottomItemsRow_3_OldMony">${card.oldmony}/mo</div>
                        <div className="CardCaruselUpBottomElementCardBottomItemsRow_3_NewMony">${card.nevmony}/mo</div>
                    </div>

                    <div className="CardCaruselUpBottomElementCardBottomItemsRow_3RightItmesBg">
                      <div className="CardCaruselUpBottomElementCardBottomItemsRow_3RightItmesBtnBg C-C-U-B-E-C-B-I-R-3-R-I-B-B__1"><img src="./src/assets/icons/resize.svg" alt="icon" /></div>
                      <div className="CardCaruselUpBottomElementCardBottomItemsRow_3RightItmesBtnBg C-C-U-B-E-C-B-I-R-3-R-I-B-B__2"><img src="./src/assets/icons/love.svg" alt="icon" /></div>
                    </div>

                </div>
              </div>
            </div>
          ))}
          {/* -- */}
        </div>
        <div className="CardCaruselUpBottomElement_BtnBG">
          <div className="CardCaruselUpBottomElementButton">{DarkRightBtnSvg}</div>
        </div>
      </div>
      <div className="CardCaruselUpNuberBtmsWrapper">
        <div className="CardCaruselUpNuberButtonItemBg"></div>
        <div className="CardCaruselUpNuberButtonItemBg" style={{width: "12px", height: "12px", backgroundColor: "white", border: "2px solid var(--colorPrimary)"}}></div>
        <div className="CardCaruselUpNuberButtonItemBg"></div>
        <div className="CardCaruselUpNuberButtonItemBg"></div>
        <div className="CardCaruselUpNuberButtonItemBg"></div>
        <div className="CardCaruselUpNuberButtonItemBg"></div>
      </div>
    </div>
  );
}

export default Index;
