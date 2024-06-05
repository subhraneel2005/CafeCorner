import React, { useRef, useEffect } from 'react';
import cozy from "../../public/tw0.jpg";
import cozy1 from "../../public/three.jpg";
import Image from 'next/image';
import gsap from 'gsap';

function AboutUs() {
  const imageRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Fade-in animation for the image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="min-h-screen w-full" id="about-us">
      <div className="flex gap-4 px-6 py-6 ">
        <Image
          height={100}
          width={500}
          src={cozy}
          alt="about us image"
          className="rounded-[20px]"
          ref={imageRef}
        />
        <div className="flex justify-center items-center w-full">
          <h1 className="text-lg font-semibold">
          Welcome to CAFE CORNER, your cozy escape in the heart of the city. Established in 2024, we pride ourselves on offering a relaxing atmosphere where you can enjoy the perfect cup of coffee, freshly baked pastries, and a variety of delicious snacks.
          </h1>
        </div>
      </div>
        
    </div>
  );
}

export default AboutUs;
