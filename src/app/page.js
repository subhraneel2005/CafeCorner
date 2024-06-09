"use client";
import { useEffect } from "react";
import Navbarr from "@/components/Navbarr";
import coffeeMug from "../../public/coffee.png";
import Image from "next/image";
import gsap from "gsap";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import BookATable from "@/components/BookATable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function App() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial animations on page load
    gsap.to("#cafe", {
      x: 300,
      duration: 1,
      delay: 0.4,
    });
    gsap.to("#coffee", {
      x: 300,
      duration: 1,
      delay: 0.4,
    });
    gsap.to("#coffeeImg", {
      x: -300,
      duration: 1,
      delay: 0.4,
      rotate: 370,
      ease: "power2.inOut",
    });

    // Scroll-triggered animations
    gsap.from("#about-us", {
      scrollTrigger: {
        trigger: "#about-us",
        start: "top 80%", // When the top of the element hits 80% of the viewport height
        end: "bottom 20%", // When the bottom of the element hits 20% of the viewport height
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from("#bookATable", {
      scrollTrigger: {
        trigger: "#bookATable",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from("#contactUs", {
      scrollTrigger: {
        trigger: "#contactUs",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  });

  return (
    <div className="w-full select-none relative" id="wrapper">
      <Navbarr />
      <div className="flex h-screen w-full p-2 justify-center items-center" id="homePage">
        <div className="block w-full">
          <h1 className="md:text-[7vw]" id="cafe">
            CAFE
          </h1>
          <h1 className="md:text-[7vw]" id="coffee">
            CORNER
          </h1>
        </div>
        <Image
          src={coffeeMug}
          alt="coffee mug image"
          speed="clamp(0.5)"
          id="coffeeImg"
          height={300}
          width={300}
        />
      </div>
      <AboutUs />
      <BookATable />
      <ContactUs />
    </div>
  );
}
