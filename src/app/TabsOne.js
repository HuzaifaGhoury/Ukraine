import React from 'react';
import Image from 'next/image';
import phone from '../../public/icon-megaphone.jpg';
import checking from '../../public/icon-checking.jpg';
import panic from '../../public/icon-panic.jpg';

export default function TabsOne() {
  const data = [
    {
      image: panic,
      text: "Не поддаваться панике. Лишняя паника не поможет, решить проблемы, поэтому нужно всегда оставаться в здравом уме",
    },
    {
      image: phone,
      text: "Распространяйте призыв о прекращении военной операции и решения конфликта переговорами (петиции, обращение через знаменитостей)",
    },
    {
      image: checking,
      text: "Проверяйте информацию, которую вы увидели. Не распространяйте фейки, не поддавайтесь на провокации",
    },
  ];

  return (
    <div>
      <div className='md:flex md:p-10 md:gap-7 md:px-40 md:justify-center' >
      {data.map((item, index) => (
        <div
        key={index}
        className="rounded-lg bg-white md:w-9.5/12 w-11/12 p-5 md:p-10" style={{ height: "330px"}}>
        
          <Image src={item.image} alt={`Image ${index}`} width={100} height={100} className='mb-5'/>
          <p className="text-black font-poppins text-25 font-bold mt:30">
  {item.text}
</p>
       </div>

      ))}</div>
    </div>
  );
}
