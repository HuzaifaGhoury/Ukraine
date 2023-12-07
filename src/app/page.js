import Image from "next/image";
import logo from "../../public/logo.png";
import bear from "../../public/bear.png";
export default function Home() {
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center px-14 py-3"
        style={{ backgroundImage: 'url("./displaymain.png")' }}
      >
        <nav className="p-28px 15px">
          <div className="md:flex md:justify-between items-center">
            <Image src={logo} />
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
              <button class="order-1 rounded-full bg-orange-500 shadow-md w-80 h-16 text-bold">
                Что я могу сделать?
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
      {/* <Second/> */}
      <div className="w-full bg-black h-70 text-white py-8 ">
        <div className="flex md:flex md:justify-between flex-col-reverse items-center mt-20 bg-red md:flex-row">
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
  );
}
