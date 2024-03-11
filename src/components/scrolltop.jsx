import React, { useState, useEffect } from 'react';
import scrolltoplogo from "../assets/scrolltoplogo.png";

const Scrolltop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`fixed bottom-10 right-2 md:bottom-10 md:right-10 text-2xl hover:cursor-pointer ${isVisible ? 'block' : 'hidden'}`} onClick={handleClick}>
      <img src={scrolltoplogo} alt="scrolltoplogo" className='h-10 w-10 md:h-14 md:w-14' />
    </div>
  );
};

export default Scrolltop;
