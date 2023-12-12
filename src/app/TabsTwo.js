import React from "react";

export default function TabsTwo() {
  const data = [
    {
      text: "Не поддаваться панике. Лишняя паника не поможет, решить проблемы, поэтому нужно всегда оставаться в здравом уме",
    },
    {
      text: "Распространяйте призыв о прекращении военной операции и решения конфликта переговорами (петиции, обращение через знаменитостей)",
    },
    {
      text: "Проверяйте информацию, которую вы увидели. Не распространяйте фейки, не поддавайтесь на провокации",
    },
  ];

  return (
    <div>
      <div className="md:flex md:p-10 pl-3 md:gap-7 md:px-40 sm:px-10 md:justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-white  md:w-9.5/12 mb-8 w-11/12 p-7 md:p-10 "
          >
            <p className="text-black font-poppins text-25 font-bold mt:30">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
