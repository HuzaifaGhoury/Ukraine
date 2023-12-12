"use client"
import React, { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");

  const handleButtonClick = () => {
    setEmail("");
  };

  return (
    <div className="w-full bg-black">
      <div
        className="md:h-screen h-auto w-full bg-cover bg-center"
        style={{ backgroundImage: 'url("./displaymain.png")' }}
      >
        <div className="bg-black w-full md:w-3/6 flex flex-col justify-center items-center h-full">
          <div className="p-12 rounded-md md:mx-28 text-center">
            <h1 className="text-white font-poppins text-3xl text-start font-bold">
              Наш сайт скоро появится.
            </h1>
            <h2 className="text-white font-poppins text-start text-xl font-normal mt-7">
              Сайт будет освещать Российский протест против войны. Мы сообщим, как будет всё готово:
            </h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-white font-poppins text-xl font-normal my-7 w-full border-b border-white focus:outline-none focus:border-orange-500 px-2 py-1 bg-transparent"
            />
            <button
              onClick={handleButtonClick}
              className="text-black font-poppins text-2xl font-bold bg-white h-16 w-full mt-4"
            >
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
