import React, { useEffect, useState } from 'react';
import {
  ScrollUpButtonWrapper,
  ScrollUpButtonIcon
} from './style';

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
    <ScrollUpButtonWrapper onClick={scrollToTop} isVisible={isVisible}>
      <ScrollUpButtonIcon src="/assets/icons/down-arrow.svg" alt="Icon" />
    </ScrollUpButtonWrapper>
  );
}

export default Index;
