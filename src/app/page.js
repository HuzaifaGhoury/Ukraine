"use client"
import Image from "next/image";
import logo from "../../public/logo.png";
import Third from "./Third";
import SecondPage from "./SecondPage";
import Tabs from "./Tabs";
import SlidesAndmap from "./SlidesAndmap";
import Footer from "./Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div
        className="md:h-screen h-auto w-full bg-cover bg-center px-5 md:px-14 py-3"
        style={{ backgroundImage: 'url("./displaymain.png")' }}
      >
        <nav className="p-28px 15px">
          <div className="md:flex md:justify-between items-center">
           
           <div className=" sm:flex justify-center "> <Image src={logo}/></div>
            <div className="hidden md:flex text-2xl text-white justify-between group-hover:text-orange-500 cursor-pointer">
              <h2 className="hover:text-orange-500 hover:underline">RU</h2>
              <span className="mx-2">|</span>
              <h2 className="hover:text-orange-500 hover:underline">EN</h2>
            </div>
          </div>
        </nav>
        <div className="mt-10 pt-6 md:pt-40 ">
          <div className="w-full md:w-1/2">
            <h1 className="text-white font-poppins text-4xl font-bold leading-3xl text-center md:text-left">
              Мы,{" "}
              <span
                style={{
                  color: "white",
                  textDecorationColor: "orange",
                  textDecorationLine: "underline",
                }}
              >
                жители Российской федерации, против Военной операции
              </span>{" "}
              на территории Украины
            </h1>

            <h2 class="text-white font-poppins text-base font-normal leading-normal my-7 text-center md:text-left">
              Никто не остался равнодушен. Это общая трагедия для всех нас
            </h2>

            <div className="text-white md:flex md:justify-center w-1/1 py-10 gap-5 ml-2">
              <button class="order-1 rounded-full bg-orange-500 shadow-md w-80 h-16 text-bold" onClick={'/signin'}>
<Link href='/signin'>Что я могу сделать?</Link>                
              </button>
              <button class="order-2 rounded-full shadow-md border border-white w-80 h-16 mt-5 md:mt-0">
                Почему это плохо?
              </button>
            </div>
          </div>
          <div
            className="hidden md:flex md:justify-between items-center text-white mt-0"
            style={{ marginTop: "50px" }}
          >
            <h3>
              Антивоенная акция в Петербурге. Фото: Давид Френкель / Медиазона.
              Ссылка на статью
            </h3>
            <h2>Посмотреть список городов, где проходят акции</h2>
          </div>
        </div>
      </div>
      <SecondPage/>
      <Third/>
      <Tabs/>
      <SlidesAndmap/>
      <Footer/>
    </div>
  );
}
