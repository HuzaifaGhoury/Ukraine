import React from "react";
import Map from "./Map";
import Post from "./Post";
export default function SlidesAndmap() {
  return (
    <div>
      <div className="bg-green-700 text-white w-full md:py-20 md:p-0 p-5 h-auto">
        <h1 className="text-white text-center font-poppins md:text-4xl text-3xl font-bold leading-normal mt-10 tracking-wide">
          Если вы против, то вы не одни!
        </h1>
        <h3 className="text-white text-center font-poppins text-26 font-normal leading-normal mt-4">
          Посмотрите, сколько людей также выражают протест
        </h3>
        <Post />
        <div className="md:px-20">
          <Map />
        </div>
      </div>
    </div>
  );
}

