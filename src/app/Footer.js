import React from "react";
import Image from "next/image";
import logo1 from "../../public/Imported-Layers.png";
import logo2 from "../../public/lines.png";
import logo3 from "../../public/logoo.png";
import logo4 from "../../public/flag.png";
import logo5 from "../../public/flag2.png";
import logo6 from "../../public/iconN.png";
import logo7 from "../../public/bird.png";

export default function Footer() {
  return (
    <div className="bg-black p-10 ">
      <h1 className="text-white text-center font-poppins text-4xl font-bold leading-normal tracking-wide">
        Независимые СМИ, которые освещают ситуацию
      </h1>
      <div className="flex ml-10 md:flex-row flex-col w-3/4 justify-center md:justify-between items-center md:ml-40 mt-10">
        <Image src={logo3} alt="logo3" width={250} className="md:mb-0 mb-10 " />
        <Image src={logo2} alt="lines" className="md:mb-0 mb-10 " />
        <Image src={logo1} alt="logo1" width={250} className="md:mb-0 mb-10 " />
        <Image src={logo6} alt="iconN" />
      </div>

      <h3 className="text-white text-center font-poppins text-base font-normal leading-normal tracking-wide mt-10">
        *Средства массовой информации, признанные «иностранными агентами» —
        некоммерческие организации
      </h3>
      <div className="mt-40">
        <h1 className="md:px-40 text-white text-center  font-poppins md:text-4xl text-2xl font-bold leading-normal tracking-wide">
          МЫ - За мир во всем мире и призываем остановить Военную операцию на
          территории Украины
        </h1>
      </div>
      <div className="flex w-full p-2 justify-center items-center  md:gap-10 mt-10">
        <Image src={logo5} alt="logo3" width={100} />
        <Image src={logo4} alt="lines" width={100} />
        <Image src={logo7} alt="logo1" width={100} />
      </div>
    </div>
  );
}
