import React, { useEffect, useState } from 'react';
import "./style.css";

function Index() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = document.documentElement.scrollTop;
      setScrollPosition(position);
      
      if (position > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };



  return (
    <>
        <button className='ScrollUpButtonWrapper' onClick={scrollToTop} style={{marginRight: isVisible ? "12px" : "-50px", opacity: isVisible ? "1" : "0"}}>
          <img src="./src/assets/icons/down-arrow.svg" alt="Icon" />
        </button>
    </>
  );
}

export default Index;
