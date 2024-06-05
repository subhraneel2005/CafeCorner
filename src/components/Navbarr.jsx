import React from 'react'

function Navbarr() {
  return (
    <div className="flex justify-between w-full bg-transparent py-4 md:px-10 px-5 absolute top-0">
        <h1 className="font-bold">Cafe Corner</h1>
        <div>
            <ul className="flex justify-evenly gap-7" style={{color:"#EE4E4E"}}>
                <li className="cursor-pointer underline-animation">Home</li>
                <li className="cursor-pointer underline-animation">About Us</li>
                <li className="cursor-pointer underline-animation">Book a table</li>
                <li className="cursor-pointer underline-animation">Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbarr