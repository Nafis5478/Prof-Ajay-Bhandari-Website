import React from 'react'
import scrolltoplogo from "../assets/scrolltoplogo.png"
const handleClick = () => {
    window.scrollTo({ top: 0, behavior:"smooth" });
  };
export default function Scrolltop() {
  return (
    <div className='fixed bottom-10 right-10 text-2xl text-black hover:cursor-pointer' onClick={handleClick}>
        <img src={scrolltoplogo} alt="scrolltoplogo" className='h-14 w-14' />
    </div>
  )
}
