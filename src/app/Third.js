import React from "react";

export default function Third() {
  return (
    <div>
      <div className="md:flex justify-around h-70 w-full bg-black md:p-20 p-10">
        <div className="md:w-1/5 py-14">
          <h1 className="text-white font-poppins text-4xl font-extrabold leading-normal tracking-wide">
            Почему 
            <br/>
            это плохо?
          </h1>
        </div>
        <div className="md:w-1/5  py-10">
          <h1 className="text-white font-poppins text-5xl font-extrabold leading-normal tracking-wide ">
            01
          </h1>
          <h2 className="text-white font-poppins text-xl font-bold leading-6">
            Жертвы и пострадавшие среди мирного населения (а также
            военнообязанные, которые вынуждены жертвовать собой и своим будущем)
          </h2>
        </div>
        <div className="md:w-1/5  py-10">
        <h1 className="text-white font-poppins text-5xl font-extrabold leading-normal tracking-wide ">
            02
          </h1>
          <h2 className="text-white font-poppins text-xl font-bold leading-6">
            Экономическая ситуация для России (санкции, закрытие границ)
          </h2>
        </div>
        <div className="md:w-1/5  py-10">
        <h1 className="text-white font-poppins text-5xl font-extrabold leading-normal tracking-wide ">
            03
          </h1>
          <h2 className="text-white font-poppins text-xl font-bold leading-6">
            Информационная пропаганда с обоих сторон, призыв ненавидеть друг друга
          </h2>
        </div>
      </div>
    </div>
  );
}
