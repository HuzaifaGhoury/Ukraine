import Image from "next/image";
import logo from "../../public/logo.png";
import main from "../../public/displaymain.png";
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
            <div className="flex text-2xl text-white justify-between">
              <h2>RU</h2>
              <span className="mx-2">|</span>
              <h2>EN</h2>
            </div>
          </div>
        </nav>
        <div></div>
        <div className="md:flex md:justify-between ">
          <div className="md:order-1">hello</div>
          <div className="md:order-2">world</div>
        </div>
      </div>
    </div>
  );
}
