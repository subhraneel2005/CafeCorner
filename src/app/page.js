"use client"
import { useRef, useEffect } from "react";
import Navbarr from "@/components/Navbarr";
import coffeeMug from "../../public/coffee.png";
import Image from "next/image";
import gsap from "gsap";

export default function App() {
  const cafeRef = useRef(null);
  const cornerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for CAFE
      gsap.fromTo(
        cafeRef.current.children,
        { opacity: 0, scale: 0.8, x: -50 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      // Animation for CORNER
      gsap.fromTo(
        cornerRef.current.children,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.1,
          delay: 1.5, // Ensures CORNER animation starts after CAFE
        }
      );

      // Gentle rotation and scaling animation for the image
      gsap.to(imageRef.current, {
        scale: 1.05,
        rotate: 5,
        duration: 3,
        
        ease: "power1.inOut",
      });
    }, [cafeRef, cornerRef, imageRef]);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full select-none relative">
      <Navbarr />
      <div className="flex min-h-screen w-full p-2 justify-center items-center">
        <div className="block">
          <h1 className="md:text-[7vw]" ref={cafeRef}>
            {"CAFE".split("").map((letter, index) => (
              <span key={index} className="inline-block">
                {letter}
              </span>
            ))}
          </h1>
          <h1 className="md:text-[7vw]" ref={cornerRef}>
            {"CORNER".split("").map((letter, index) => (
              <span key={index} className="inline-block">
                {letter}
              </span>
            ))}
          </h1>
        </div>
        <Image ref={imageRef} src={coffeeMug} alt="coffee mug image" height={300} width={300} />
      </div>
    </div>
  );
}
