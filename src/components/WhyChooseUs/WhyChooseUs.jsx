import React from 'react';
import "./style.css";

function WhyChooseUs({ title, about }) {

  const DarkRightBtnSvg = <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.33355 5.53176L3.9934 0.191706C3.86989 0.068097 3.70501 0 3.5292 0C3.3534 0 3.18852 0.068097 3.06501 0.191706L2.67175 0.584873C2.41585 0.841066 2.41585 1.25745 2.67175 1.51326L7.156 5.99751L2.66677 10.4867C2.54326 10.6104 2.47507 10.7751 2.47507 10.9508C2.47507 11.1267 2.54326 11.2915 2.66677 11.4152L3.06004 11.8083C3.18365 11.9319 3.34843 12 3.52423 12C3.70003 12 3.86491 11.9319 3.98842 11.8083L9.33355 6.46336C9.45735 6.33936 9.52535 6.1738 9.52496 5.99781C9.52535 5.82112 9.45735 5.65566 9.33355 5.53176Z" fill="#0D263B"/> </svg>
  const DarkLeftBtnSvg = <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.66642 6.46824L8.00657 11.8083C8.13008 11.9319 8.29496 12 8.47076 12C8.64657 12 8.81144 11.9319 8.93496 11.8083L9.32822 11.4151C9.58412 11.1589 9.58412 10.7425 9.32822 10.4867L4.84396 6.00249L9.3332 1.51326C9.45671 1.38965 9.5249 1.22487 9.5249 1.04916C9.5249 0.873261 9.45671 0.708482 9.3332 0.584775L8.93993 0.191706C8.81632 0.0680971 8.65154 0 8.47574 0C8.29994 0 8.13506 0.0680971 8.01155 0.191706L2.66642 5.53664C2.54262 5.66064 2.47462 5.8262 2.47501 6.00219C2.47462 6.17888 2.54262 6.34434 2.66642 6.46824Z" fill="#0D263B"/> </svg>



  const cardsAbut = [
    { id: "1", name: "Trusted By Thousands", about: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",  icon: "./src/assets/icons/cardDiscord.svg"},
    { id: "2", name: "Wide Renge Of Properties", about: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",  icon: "./src/assets/icons/cardHouse.svg"},
    { id: "3", name: "Financing Made Easy", about: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",  icon: "./src/assets/icons/calculator.svg"},
    { id: "4", name: "See Neighborhoods", about: "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",  icon: "./src/assets/icons/cardMaps.svg"},
  ];

  return (
    <div className="WhyChooseUsWrapper">
        <div className="CardCaruselUpTopBg">
          <div className="CardCaruselUpTopTitle">{title}</div>
        <div className="CardCaruselUpTopAbout">{about}</div>
        </div>
        <div className="WhyChooseUsCardsBg">
          {cardsAbut.map(card => (
            <div key={card.id} className="WhyChooseUsCardWrapper">
              <div className="WhyChooseUsCardIconBg">
                <img src={card.icon} alt="icon" />
              </div>
              <p className="WhyChooseUsCardTitleBg">{card.name}</p>
              <p className="WhyChooseUsCardAbutBg">{card.about}</p>
            </div>
          ))}
        </div>
    </div>
  );
}

export default WhyChooseUs;
