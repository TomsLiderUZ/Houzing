import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css"
import Alert from "../Alert/Index.jsx"


function ContentTopMenu() {
  const navigate = useNavigate();

  const HausesSvg = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0)"> <path d="M19.8005 7.86877L13.086 2.80548C12.9072 2.67063 12.6609 2.67063 12.482 2.80548L11.3782 3.63785L10.2745 2.80548C10.0956 2.67063 9.84928 2.67063 9.67044 2.80548L8.59417 3.61707L7.5179 2.80548C7.33906 2.67063 7.09273 2.67063 6.91389 2.80548L0.199476 7.86877C0.0738721 7.96356 0 8.11188 0 8.26922V16.794C0 17.071 0.224554 17.2956 0.501557 17.2956H3.25811H6.06955H13.9304H16.687H19.4984C19.7754 17.2956 20 17.071 20 16.794V8.26922C20 8.11188 19.9261 7.96356 19.8005 7.86877ZM18.9969 16.2925H17.1886V8.26922C17.1886 8.11181 17.1147 7.96356 16.989 7.86877L12.2113 4.26601L12.784 3.8341L18.9969 8.51921V16.2925ZM14.432 16.2925V8.26922C14.432 8.11181 14.3581 7.96356 14.2325 7.86877L9.42726 4.24531L9.97252 3.83417L16.1854 8.51929V16.2926H14.432V16.2925ZM8.03737 16.2924H6.57111H6.39456V12.6554H8.03737V16.2924ZM9.04049 16.2924V12.1539C9.04049 11.8768 8.81593 11.6523 8.53893 11.6523H5.893C5.616 11.6523 5.39145 11.8768 5.39145 12.1539V16.2924H3.75967H1.00311V8.51914L7.21597 3.83403L13.4289 8.51914V16.2924H9.04049Z" fill="#0061DF" /> </g> <defs> <clipPath id="clip0"> <rect width="20" height="20" fill="white" /> </clipPath> </defs> </svg>
  const SerachSvg = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1987_17761)"> <path d="M7.04606 0C3.16097 0 0 3.16097 0 7.04606C0 10.9314 3.16097 14.0921 7.04606 14.0921C10.9314 14.0921 14.0921 10.9314 14.0921 7.04606C14.0921 3.16097 10.9314 0 7.04606 0ZM7.04606 12.7913C3.87816 12.7913 1.30081 10.214 1.30081 7.04609C1.30081 3.87819 3.87816 1.30081 7.04606 1.30081C10.214 1.30081 12.7913 3.87816 12.7913 7.04606C12.7913 10.214 10.214 12.7913 7.04606 12.7913Z" fill="white" /> <path d="M15.8094 14.8898L12.0804 11.1608C11.8263 10.9067 11.4148 10.9067 11.1607 11.1608C10.9066 11.4147 10.9066 11.8266 11.1607 12.0805L14.8897 15.8095C15.0168 15.9365 15.1831 16 15.3496 16C15.5159 16 15.6824 15.9365 15.8094 15.8095C16.0635 15.5556 16.0635 15.1437 15.8094 14.8898Z" fill="white" /> </g> <defs> <clipPath id="clip0_1987_17761"> <rect width="16" height="16" fill="white" /> </clipPath> </defs> </svg>
  const FilterSvg = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_1987_17774)"> <path d="M4.27391 3.48017H0.58823C0.263319 3.48017 0 3.21668 0 2.89194C0 2.56721 0.263319 2.30371 0.58823 2.30371H4.27391C4.59882 2.30371 4.86214 2.56721 4.86214 2.89194C4.86214 3.21668 4.59882 3.48017 4.27391 3.48017Z" fill="#0061DF" /> <path d="M6.38012 5.58609C4.89439 5.58609 3.68573 4.37743 3.68573 2.89183C3.68573 1.40592 4.89439 0.197266 6.38012 0.197266C7.86585 0.197266 9.07451 1.40592 9.07451 2.89183C9.07451 4.37748 7.86585 5.58609 6.38012 5.58609ZM6.38012 1.37377C5.54311 1.37377 4.86219 2.05483 4.86219 2.89183C4.86219 3.72884 5.54311 4.40959 6.38012 4.40959C7.21713 4.40959 7.89805 3.72884 7.89805 2.89183C7.89805 2.05483 7.21713 1.37377 6.38012 1.37377Z" fill="#0061DF" /> <path d="M19.4118 3.48017H10.6201C10.2952 3.48017 10.0319 3.21668 10.0319 2.89194C10.0319 2.56721 10.2952 2.30371 10.6201 2.30371H19.4117C19.7366 2.30371 20 2.56721 20 2.89194C20 3.21668 19.7367 3.48017 19.4118 3.48017Z" fill="#0061DF" /> <path d="M14.2781 12.6942C12.7923 12.6942 11.5837 11.4855 11.5837 9.99992C11.5837 8.51432 12.7923 7.30566 14.2781 7.30566C15.7638 7.30566 16.9725 8.51432 16.9725 9.99992C16.9725 11.4855 15.7638 12.6942 14.2781 12.6942ZM14.2781 8.48217C13.4411 8.48217 12.7601 9.16291 12.7601 9.99992C12.7601 10.8369 13.4411 11.5177 14.2781 11.5177C15.1151 11.5177 15.796 10.8369 15.796 9.99992C15.796 9.16291 15.1151 8.48217 14.2781 8.48217Z" fill="#0061DF" /> <path d="M10.0382 10.5881H0.58823C0.263319 10.5881 0 10.3246 0 9.99985C0 9.67512 0.263319 9.41162 0.58823 9.41162H10.0382C10.3631 9.41162 10.6264 9.67512 10.6264 9.99985C10.6264 10.3246 10.3631 10.5881 10.0382 10.5881Z" fill="#0061DF" /> <path d="M19.4118 10.5881H16.3842C16.0593 10.5881 15.796 10.3246 15.796 9.99985C15.796 9.67512 16.0593 9.41162 16.3842 9.41162H19.4118C19.7367 9.41162 20 9.67512 20 9.99985C20 10.3246 19.7367 10.5881 19.4118 10.5881Z" fill="#0061DF" /> <path d="M5.72204 19.8029C4.23631 19.8029 3.02765 18.5942 3.02765 17.1083C3.02765 15.6227 4.23631 14.4141 5.72204 14.4141C7.20777 14.4141 8.41643 15.6227 8.41643 17.1083C8.41643 18.5942 7.20777 19.8029 5.72204 19.8029ZM5.72204 15.5906C4.88503 15.5906 4.20411 16.2713 4.20411 17.1083C4.20411 17.9453 4.88503 18.6264 5.72204 18.6264C6.55905 18.6264 7.23997 17.9453 7.23997 17.1083C7.23997 16.2713 6.55905 15.5906 5.72204 15.5906Z" fill="#0061DF" /> <path d="M19.4118 17.6965H9.96189C9.63698 17.6965 9.37366 17.433 9.37366 17.1082C9.37366 16.7835 9.63698 16.52 9.96189 16.52H19.4118C19.7367 16.52 20 16.7835 20 17.1082C20 17.433 19.7367 17.6965 19.4118 17.6965Z" fill="#0061DF" /> <path d="M3.61581 17.6965H0.58823C0.263319 17.6965 0 17.433 0 17.1082C0 16.7835 0.263319 16.52 0.58823 16.52H3.61581C3.94072 16.52 4.20404 16.7835 4.20404 17.1082C4.20404 17.433 3.94072 17.6965 3.61581 17.6965Z" fill="#0061DF" /> </g> <defs> <clipPath id="clip0_1987_17774"> <rect width="20" height="20" fill="white" /> </clipPath> </defs> </svg>

  // Alert settings
  const [alertGet, setAlert] = useState(false);
  const [alertText, setAlertText] = useState(null);
  const openAlert = (index) => {
    setAlertText(index)
    setAlert(true)
  };
  const hideAlert = () => {
    setAlert(false);
  };
  // Alert end


  const [modal, setModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [address, setAddress] = useState({
    country: "",
    region: "",
    city: "",
    zipCode: "",
  });
  const [apartmentInfo, setApartmentInfo] = useState({
    rooms: "",
    size: "",
    sort: "",
  });
  const [price, setPrice] = useState({
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const countryParam = params.get('country') || "";
    const regionParam = params.get('region') || "";
    const cityParam = params.get('city') || "";
    const zipCodeParam = params.get('zipCode') || "";

    setAddress({
      country: countryParam,
      region: regionParam,
      city: cityParam,
      zipCode: zipCodeParam,
    });

    if (countryParam === "" || regionParam === "" || cityParam === "" || zipCodeParam === "") {

    } else {
      setSearchValue(`${countryParam} / ${regionParam} / ${cityParam} / ${zipCodeParam}`);
    }

  }, []);

  const resetForm = () => {
    setAddress({
      country: "",
      region: "",
      city: "",
      zipCode: "",
    });
    setApartmentInfo({
      rooms: "",
      size: "",
      sort: "",
    });
    setPrice({
      minPrice: "",
      maxPrice: "",
    });
  };

  const chengeModal = () => {
    setModal(prevModal => !prevModal);
    if (!modal) {
      resetForm();
    }
  };


  const handleSubmit = () => {
    if (!address.country || !address.region || !address.city || !address.zipCode) {

      openAlert("Please fill in Country, Region, City, and Zip code.")
      return;
    }

    const queryStringLoc = `?country=${address.country}&region=${address.region}&city=${address.city}&zipCode=${address.zipCode}`;
    setSearchValue(`${address.country} / ${address.region} / ${address.city} / ${address.zipCode}`); // Update searchValue with the query string


    navigate(`/properties${queryStringLoc}`);

    chengeModal();
    resetForm(); 
  };


  return (
    <>
      <Alert showAlert={alertGet} showText={alertText} onHide={hideAlert} />
      
      {/* Modal content */}
      <div className="ContentTopMenu">
        <div className="ContentTopMenuTitleBar">
          {HausesSvg}
          <input className='ContentTopMenuTitleBarInp' type="text" placeholder='Enter an address, neighborhood, city, or ZIP code' value={searchValue} readOnly />
        </div>
        <div className="ContentTopMenuBtnWrapper">
          <div className="ContentTopMenuButton ContentTopMenuButton_1" onClick={chengeModal} style={{ backgroundColor: modal ? "var(--bgWrapper)" : "transparent", color: modal ? "white" : "var(--bgWrapper)", borderColor: modal ? "var(--bgWrapper)" : "#E6E9EC" }}>
            {FilterSvg}&nbsp;
            Advanced
          </div>
          <div className="ContentTopMenuButton ContentTopMenuButton_2">
            {SerachSvg}&nbsp;
            Search
          </div>
        </div>
      </div>

      {/* Modal */}
      <div className="unicalModalWarpper" style={{ marginTop: modal ? "74px" : "-1000px", opacity: modal ? "1" : "0" }}>
        <div className="unicalModalTopContent">
          <div className="unicalModalTopContentRow">
            <div className="unicalModalTopContentRowTitleBg">Address</div>
            <div className="unicalModalTopContentRowInpsBg">
              <input type="text" placeholder="Country" className="unicalModalTopContentRowInputItem" value={address.country} onChange={(e) => setAddress({ ...address, country: e.target.value })} />
              <input type="text" placeholder="Region" className="unicalModalTopContentRowInputItem" value={address.region} onChange={(e) => setAddress({ ...address, region: e.target.value })} />
              <input type="text" placeholder="City" className="unicalModalTopContentRowInputItem" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} />
              <input type="text" placeholder="Zip code" className="unicalModalTopContentRowInputItem" value={address.zipCode} onChange={(e) => setAddress({ ...address, zipCode: e.target.value })} />
            </div>
          </div>

          <div className="unicalModalTopContentRow">
            <div className="unicalModalTopContentRowTitleBg">Apartment info</div>
            <div className="unicalModalTopContentRowInpsBg">
              <input type="text" placeholder="Rooms" className="unicalModalTopContentRowInputItem" value={apartmentInfo.rooms} onChange={(e) => setApartmentInfo({ ...apartmentInfo, rooms: e.target.value })} />
              <input type="text" placeholder="Size" className="unicalModalTopContentRowInputItem" value={apartmentInfo.size} onChange={(e) => setApartmentInfo({ ...apartmentInfo, size: e.target.value })} />
              <input type="text" placeholder="Sort" className="unicalModalTopContentRowInputItem" value={apartmentInfo.sort} onChange={(e) => setApartmentInfo({ ...apartmentInfo, sort: e.target.value })} />
            </div>
          </div>

          <div className="unicalModalTopContentRow">
            <div className="unicalModalTopContentRowTitleBg">Price</div>
            <div className="unicalModalTopContentRowInpsBg">
              <input type="text" placeholder="Min price" className="unicalModalTopContentRowInputItem" value={price.minPrice} onChange={(e) => setPrice({ ...price, minPrice: e.target.value })} />
              <input type="text" placeholder="Max price" className="unicalModalTopContentRowInputItem" value={price.maxPrice} onChange={(e) => setPrice({ ...price, maxPrice: e.target.value })} />
            </div>
          </div>
        </div>
        <div className="unicalModalBottomContent">
          <div className="unicalModalBottomContentButton A" onClick={chengeModal}>Cancel</div>
          <div className="unicalModalBottomContentButton B" onClick={handleSubmit}>Submit</div>
        </div>
      </div>
    </>
  );
}

export default ContentTopMenu;
