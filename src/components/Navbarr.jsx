import React from 'react'

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
  return (
    <div className="flex justify-between w-full bg-transparent py-4 md:px-10 px-5 top-0 sticky">
        <h1 className="font-bold">Cafe Corner</h1>
        <div>
            <ul className="flex justify-evenly gap-7" style={{color:"#EE4E4E"}}>
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