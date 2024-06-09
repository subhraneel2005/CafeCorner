import React from 'react'
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbarr() {
  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("about-us");
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToContactUs = () => {
    const contactUsSection = document.getElementById("contactUs");
    if (contactUsSection) {
      contactUsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToHomePage = () => {
    const homePageSection = document.getElementById("homePage");
    if (homePageSection) {
      homePageSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToBookATablePage = () => {
    const bookATable = document.getElementById("bookATable");
    if (bookATable) {
      bookATable.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [menu, setMenu] = useState(false);
  const [style, setStyle] = useState("hidden")

  const menuHandler = () => {
   if(menu === false && style === "hidden"){
    gsap.to("#menuBtn",{
      duration: 1.5,
      x: -100
    })
    setMenu(!menu)
    setStyle("block")
   }
   else{
    gsap.to("#menuBtn",{
      duration: 1.5,
      x: 6
    })
    setMenu(!menu)
    setStyle("hidden")
   }
  }
  return (
    <div className="overflow-hidden flex justify-between w-full bg-red-600 bg-opacity-10 z-10 px-3 py-4 md:px-5 top-0 sticky">
        <h1 className="font-bold">Cafe Corner</h1>
        <div id="menuBtn">
            <ul className="md:flex justify-evenly gap-7 hidden" style={{color:"#EE4E4E"}}>
                <li className="cursor-pointer underline-animation" onClick={scrollToHomePage}>Home</li>
                <li className="cursor-pointer underline-animation" onClick={scrollToAboutUs}>About Us</li>
                <li className="cursor-pointer underline-animation" onClick={scrollToBookATablePage}>Book a table</li>
                <li className="cursor-pointer underline-animation" onClick={scrollToContactUs}>Contact Us</li>
            </ul>
            <FiMenu size={30} className="cursor-pointer md:hidden flex mb-4" onClick={menuHandler}/>
            <ul className={style}>
                <li className="cursor-pointer underline-animation" onClick={scrollToHomePage}>Home</li>
                <li className="cursor-pointer underline-animation" onClick={scrollToAboutUs}>About Us</li>
                <li className="cursor-pointer underline-animation" onClick={scrollToBookATablePage}>Book a table</li>
                <li className="cursor-pointer underline-animation" onClick={scrollToContactUs}>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbarr