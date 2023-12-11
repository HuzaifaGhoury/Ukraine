import React from "react";
import Image from "next/image";
import MapPic from "../../public/Map.png";
import becha from "../../public/becha.png";
export default function Map() {
  return (
    <div className="md:p-5 p-5 pt-13 mt-20 text-center md:text-start">
      <div className="md:flex md:justify-center md:align-middle md:m-20 m-10 md:gap-5">
        <div className="w-full md:w-3/12 mb-5 ">
          <h1 className="text-white text-start font-poppins md:text-6.2xl text-7xl font-bold tracking-wider mb-3">
            23467
          </h1>

          <h3>Людей, которые подписали петицию против войны</h3>
        </div>
        <button className="order-1 bg-orange-500 rounded-full shadow-md w-60 h-16 font-bold">
          Подписать
        </button>
      </div>
      <div className="md:flex md:justify-start align-middle text-center justify-center md:align-middle md:m-4  md:gap-5 w-full">
        <div>
          <Image src={MapPic} alt="map" width={805} height={600} />
        </div>
        <div className="w-full md:w-3/12 mb-5 md:pt-40">
          <h1 className="text-white md:text-start text-center font-poppins md:text-6.2xl text-7xl font-bold tracking-wider mb-3">
            340
          </h1>
          <h3 className=" md:text-start text-center">
            Городов, выходят на акции протеста
          </h3>{" "}
        </div>
      </div>
      <div className="md:m-20 md:flex gap-8 md:pr-20">
        <Image
          src={becha}
          alt="becha"
          width={560}
          height={500}
          className="py-10"
        />
        <div>
          <h3 className="md:mt-20  text-white font-poppins text-1xl font-normal leading-normal tracking-wide">
            Скажите «нет» войне! Всероссийская акция 6 марта в 15:
            <br />
            <br />
            Каждый день по всей России протестуют против войны. И в наших силах
            её остановить. Сейчас — время объединяться и действовать
            <br />
            <br /> Всероссийская акция протеста пройдёт 6 марта. Мы встретимся в
            15:00 на центральных площадах всех городов, чтобы выразить свой
            протест. Мы имеем полное право на это в соотествии с Конституцией.
            <br />
            <br /> Призываем вас каждый день агитировать. Рассказывайте об акции
            друзьям и родственникам, клейте анонсы в подъездах, создавайте
            стикеры, граффити. Используйте все доступные средства.
          </h3>{" "}
        </div>
      </div>
    </div>
  );
}
