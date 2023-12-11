import React from 'react'
import Image from "next/image";
import bear from "../../public/bear.png";

export default function SecondPage() {
  return (
    <div>
      <div className="w-full bg-black h-70 text-white py-8 ">
        <div className="flex md:flex md:justify-between flex-col-reverse mb-9 items-center mt-20 bg-red md:flex-row">
          <div className="md:w-1/2 w-full mt-10 md:mt-0">
            <Image src={bear} style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="bg-green md:w-1/2 w-full p-4 md:mr-14 ">
            <h1 className="text-white font-poppins text-4xl font-bold leading-normal tracking-wide mb-5">
              Что произошло?
            </h1>

            <h4 className="text-white text-justify font-poppins text-base font-normal leading-6">
              Рано утром, 24 февраля 2022 года, Президент Владимир Путин
              выступил с обращением к нации, в котором объявил о начале
              специальной военной операции на Донбассе. В этом обращении, глава
              государства ссылается на многочисленные просьбы о военной помощи
              глав Донецкой и Луганской народной республики. Владимир Путин
              заявил, что целью происходящего, по его словам, является защита
              людей, подвергающихся геноциду, а также его опасения по поводу
              заявлений украинских властей о возможности возвращения ядерного
              оружия и продвижение сил НАТО к российским границам. Уже спустя
              пару часов, в социальных сетях начали массово появляться сообщения
              о взрывах в Киеве, Харькове, Одессе, Мариуполе и других украинских
              городах. Представители МВД Украины утверждают, что в Киеве и
              Харькове подверглись ракетным ударам военные командные пункты, а
              мэр Борисполя сообщил, что взрывы, раздавшиеся в районе
              одноименного киевского аэропорта, были ударами систем
              противовоздушной обороны по неопознанным беспилотным летательным
              аппаратам
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}
