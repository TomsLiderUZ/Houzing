import React, { useState, useEffect } from 'react';
import "./style.css"
import CardCarusel from '../CardCarusel/Index.jsx';
import Footer from "../Footer/Footer.jsx"
import UsersCarusel from "../UsersCarusel/Index.jsx"
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs.jsx"
import Category from '../Category/Category.jsx';
import ContentTopMenu from '../ContentTopMenu/ContentTopMenu.jsx';


function Home() {


  const CaruselLeftBtnSvg = <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.66642 5.53176L8.00657 0.191706C8.13008 0.068097 8.29496 0 8.47076 0C8.64657 0 8.81144 0.068097 8.93496 0.191706L9.32822 0.584873C9.58412 0.841066 9.58412 1.25745 9.32822 1.51326L4.84396 5.99751L9.3332 10.4867C9.45671 10.6104 9.5249 10.7751 9.5249 10.9508C9.5249 11.1267 9.45671 11.2915 9.3332 11.4152L8.93993 11.8083C8.81632 11.9319 8.65154 12 8.47574 12C8.29994 12 8.13506 11.9319 8.01155 11.8083L2.66642 6.46336C2.54262 6.33936 2.47462 6.1738 2.47501 5.99781C2.47462 5.82112 2.54262 5.65566 2.66642 5.53176Z" fill="white" /> </svg>
  const CaruselRightBtnSvg = <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.33355 5.53176L3.9934 0.191706C3.86989 0.068097 3.70501 0 3.5292 0C3.3534 0 3.18852 0.068097 3.06501 0.191706L2.67175 0.584873C2.41585 0.841066 2.41585 1.25745 2.67175 1.51326L7.156 5.99751L2.66677 10.4867C2.54326 10.6104 2.47507 10.7751 2.47507 10.9508C2.47507 11.1267 2.54326 11.2915 2.66677 11.4152L3.06004 11.8083C3.18365 11.9319 3.34843 12 3.52423 12C3.70003 12 3.86491 11.9319 3.98842 11.8083L9.33355 6.46336C9.45735 6.33936 9.52535 6.1738 9.52496 5.99781C9.52535 5.82112 9.45735 5.65566 9.33355 5.53176Z" fill="white" /> </svg>
  
  const [carusel, setCarusel] = useState(1);




  const chengeCarusel_1 = () => {
    setCarusel(prevCarusel => (prevCarusel <= 5 ? prevCarusel + 1 : 1));
  };

  const chengeCarusel_2 = () => {
    setCarusel(prevCarusel => (prevCarusel > 1 ? prevCarusel - 1 : 6));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      chengeCarusel_1();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='homeContentWrapper'>
      <ContentTopMenu />

      <div className="homeContentTopCaruselWrapper">
        <div className="homeContentTopCaruselTextsWrapper">
          <div className="homeContentTopCaruselTextItemsBg">
            <h1 className='homeContentTopCaruselTextItemTitleTxt'>Skyper Pool Partment</h1>
            <p className='homeContentTopCaruselTextItemTxt'>112 Glenwood Ave Hyde Park, Boston, MA</p>
            <div className="homeContentTopCaruselTextItemRommsAddBg">

              <div className="homeContentTopCaruselTextItemRommsAddItemBg">
                <div className="homeContentTopCaruselTextItemRommsAddItemIconBg">
                  <img src="../../../../public//assets/icons/bed2.svg" alt="icon" />
                </div>
                <p className="homeContentTopCaruselTextItemRommsAddItemTxtBg">4 beds</p>
              </div>
              <div className="homeContentTopCaruselTextItemRommsAddItemBg">
                <div className="homeContentTopCaruselTextItemRommsAddItemIconBg">
                  <img src="../../../../public//assets/icons/bath2.svg" alt="icon" />
                </div>
                <p className="homeContentTopCaruselTextItemRommsAddItemTxtBg">5 Baths</p>
              </div>
              <div className="homeContentTopCaruselTextItemRommsAddItemBg">
                <div className="homeContentTopCaruselTextItemRommsAddItemIconBg">
                  <img src="../../../../public//assets/icons/car2.svg" alt="icon" />
                </div>
                <p className="homeContentTopCaruselTextItemRommsAddItemTxtBg">1 Garage</p>
              </div>
              <div className="homeContentTopCaruselTextItemRommsAddItemBg">
                <div className="homeContentTopCaruselTextItemRommsAddItemIconBg">
                  <img src="../../../../public//assets/icons/ruler2.svg" alt="icon" />
                </div>
                <p className="homeContentTopCaruselTextItemRommsAddItemTxtBg">200 Sq Ft</p>
              </div>

            </div>
            <h1 className="homeContentTopCaruselTextMonyBg">
              $5,250/mo
            </h1>
            <button className='homeContentTopCaruselTextButtonBg'>Read more</button>
          </div>
        </div>
        <div className="homeContentTopCaruselImg">
          <img src="../../../../public//assets/img/carusel_img_1.png" alt="img" width="100%" height="571px" className='homeContentTopCaruselItemImg' style={{ opacity: carusel === 1 ? "1" : "0" }} />
          <img src="../../../../public//assets/img/carusel_img_2.png" alt="img" width="100%" height="571px" className='homeContentTopCaruselItemImg' style={{ opacity: carusel === 2 ? "1" : "0" }} />
          <img src="../../../../public//assets/img/carusel_img_3.png" alt="img" width="100%" height="571px" className='homeContentTopCaruselItemImg' style={{ opacity: carusel === 3 ? "1" : "0" }} />
          <img src="../../../../public//assets/img/carusel_img_4.png" alt="img" width="100%" height="571px" className='homeContentTopCaruselItemImg' style={{ opacity: carusel === 4 ? "1" : "0" }} />
          <img src="../../../../public//assets/img/carusel_img_2.png" alt="img" width="100%" height="571px" className='homeContentTopCaruselItemImg' style={{ opacity: carusel === 5 ? "1" : "0" }} />
          <img src="../../../../public//assets/img/carusel_img_3.png" alt="img" width="100%" height="571px" className='homeContentTopCaruselItemImg' style={{ opacity: carusel === 6 ? "1" : "0" }} />
        </div>
        <div className="homeContentTopCaruselControlsBg">
          <div className="homeContentTopCaruselControlsGetUpBtnBg hctccgubb_1">
            <button className="homeContentTopCaruselControlsGetUpButton" onClick={chengeCarusel_2}>{CaruselLeftBtnSvg}</button>
          </div>
          <div className="homeContentTopCaruselControlsGetNuberBtnsWarpper">
            <div className="homeContentTopCaruselControlsGetNuberButtonCirclesBg">
              <div className="homeContentTopCaruselControlsGetNuberButtonCircle" style={{ width: carusel === 1 ? "12px" : "8px", height: carusel === 1 ? "12px" : "8px" }} onClick={() => setCarusel(1)}></div>
              <div className="homeContentTopCaruselControlsGetNuberButtonCircle" style={{ width: carusel === 2 ? "12px" : "8px", height: carusel === 2 ? "12px" : "8px" }} onClick={() => setCarusel(2)}></div>
              <div className="homeContentTopCaruselControlsGetNuberButtonCircle" style={{ width: carusel === 3 ? "12px" : "8px", height: carusel === 3 ? "12px" : "8px" }} onClick={() => setCarusel(3)}></div>
              <div className="homeContentTopCaruselControlsGetNuberButtonCircle" style={{ width: carusel === 4 ? "12px" : "8px", height: carusel === 4 ? "12px" : "8px" }} onClick={() => setCarusel(4)}></div>
              <div className="homeContentTopCaruselControlsGetNuberButtonCircle" style={{ width: carusel === 5 ? "12px" : "8px", height: carusel === 5 ? "12px" : "8px" }} onClick={() => setCarusel(5)}></div>
              <div className="homeContentTopCaruselControlsGetNuberButtonCircle" style={{ width: carusel === 6 ? "12px" : "8px", height: carusel === 6 ? "12px" : "8px" }} onClick={() => setCarusel(6)}></div>
            </div>
          </div>
          <div className="homeContentTopCaruselControlsGetUpBtnBg hctccgubb_2">
            <button className="homeContentTopCaruselControlsGetUpButton" onClick={chengeCarusel_1}>{CaruselRightBtnSvg}</button>
          </div>
        </div>
      </div> 

      <CardCarusel title={"Recommended"} about={"Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."} minAbout={"112 Glenwood Ave Hyde Park, Boston, MA"}/>
      <WhyChooseUs title={"Why Choose Us?"} about={"Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."} minAbout={"112 Glenwood Ave Hyde Park, Boston, MA"}/>
      <Category title={"Category"} about={"Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."} minAbout={"112 Glenwood Ave Hyde Park, Boston, MA"}/>
      <div className="homeContentHauseImgMoreAboutsBtnCardWrapper">
        <div className="homeContentHauseImgMoreAboutsBtnCardTextAndBtnBg">
          <p className="homeContentHauseImgMoreAboutsBtnCardTextsBg">
            Vermont Farmhouse With Antique Jail Is
            <br />
            the Week's Most Popular Home
          </p>
          <button className="homeContentHauseImgMoreAboutsBtnCardButtonBg">Read more</button>
        </div>
      </div>
      <CardCarusel title={"Recent Properties for Rent"} about={"Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."} minAbout={"112 Glenwood Ave Hyde Park, Boston, MA"}/>
      <UsersCarusel title={"Testimonials"} about={"Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."} minAbout={"112 Glenwood Ave Hyde Park, Boston, MA"}/>
      <Footer />
    </div>
  )
}
  
export default Home
