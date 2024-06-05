
import Navbarr from "@/components/Navbarr";
import coffeeMug from "../../public/coffee.png"
import Image from "next/image";

export default function App() {
  return (
    <div className="w-full select-none relative">
      <Navbarr/>
      <div className="flex min-h-screen w-full p-2 justify-center items-center">
        <div className="block">
          <h1 className="md:text-[7vw]">CAFE</h1>
          <h1 className="md:text-[7vw]">CORNER</h1>
        </div>
        <Image src={coffeeMug} alt="coffee mug image" height={300} width={300}/>
      </div>
    </div>
  );
}
