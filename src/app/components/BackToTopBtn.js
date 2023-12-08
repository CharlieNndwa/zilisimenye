"use client"

import React, {useEffect, useState} from 'react';
import {FaChevronUp} from 'react-icons/fa';
import {Link} from 'react-scroll';

const BackToTopBtn = () => {
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 400) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleBackToTopClick = () => {
      window.location.href = '#home';
    };
  
    return (
      <button
        onClick={handleBackToTopClick}
        className={`${!isActive && 'hidden'} fixed bg-primary hover:bg-secondary w-12 h-12 right-16 bottom-11 z-10 cursor-pointer flex justify-center items-center text-white border-2 border-white`}
      >
        <FaChevronUp className="" />
      </button>
    );
  };
  
  export default BackToTopBtn;
  
  