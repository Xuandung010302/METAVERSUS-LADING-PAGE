/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
export default function Info() {
  return (
    <>
      <div className="font-normal text-[14px] leading-[17.64px] text-center text-gray mt-[200.4px]">
        | About Metaverus
      </div>
      <div className="ml-[173px] mr-[172px] text-center text-[32px] leading-[57.6px] mt-2">
        <span className="font-bold">Metaverse</span>
        <span className="font-normal text-gray">
          {" "}
          is a new thing in the future, where you can enjoy the virtual world by
          feeling like is really real, you can feel what you feel in this
          metaverse world, because this is really the
          <span className="font-bold text-white">
            {" "}
            madness of the metaverse
          </span>{" "}
          of today, using only <span className="font-bold text-white">VR </span>
          devices you can easily explore the metaverse world you want, turn your
          dreams into reality. Let`s
          <span className="font-bold text-white"> explore</span> the madness of
          the metaverse by scrolling down
        </span>
      </div>
      <div className="font-normal text-[14px] leading-[17.64px] text-center text-gray mt-[200.4px]">
        | The World
      </div>
      <div className="font-bold text-[64px] leading-[80.64px] text-center mt-2 ml-[278px] mr-[277px]">
        Choose the world you want to explore
      </div>
      <div className="ml-[135px] mt-[50px]">
        <div className="relative flex space-x-8">
          <div className="relative w-[170px] h-[563px] overflow-hidden rounded-3xl group hover:scale-110">
            <Image
              src="/img/The Hogwarts.svg"
              alt=""
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute font-bold text-[32px] w-[536px] h-[170px] leading-[40.32px] transform -rotate-90 top-[50%] left-[50%] translate-x-[-37%] translate-y-[33%] text-center transition-transform duration-300 ease-in-out group-hover:scale-110">
              The Hogwarts
            </div>
          </div>
          <div className="relative inline-block group">
            <Image
              src="/img/The Upside Down.svg"
              alt=""
              width={370}
              height={563}
              className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute top-0 left-0 mt-[447px] ml-[32px] font-normal text-base leading-[20.16px] transition-transform duration-300 ease-in-out group-hover:scale-110">
              ENTER METAVERSE
            </div>
            <div className="absolute top-0 left-0 mt-[491px] ml-[32px] font-bold text-[32px] leading-[40.32px] transition-transform duration-300 ease-in-out group-hover:scale-110">
              The Upside Down
            </div>
          </div>
          <div className="relative w-[170px] h-[563px] overflow-hidden rounded-3xl group hover:scale-110">
            <Image
              src="/img/Kadirojo Permai.svg"
              alt=""
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute font-bold text-[32px] w-[536px] h-[170px] leading-[40.32px] transform -rotate-90 top-[50%] left-[50%] translate-x-[-37%] translate-y-[33%] text-center transition-transform duration-300 ease-in-out group-hover:scale-110">
              Kadirojo Permai
            </div>
          </div>
          <div className="relative w-[170px] h-[563px] overflow-hidden rounded-3xl group hover:scale-110">
            <Image
              src="/img/Paradise Island.svg"
              alt=""
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute font-bold text-[32px] w-[536px] h-[170px] leading-[40.32px] transform -rotate-90 top-[50%] left-[50%] translate-x-[-37%] translate-y-[33%] text-center transition-transform duration-300 ease-in-out group-hover:scale-110">
              Paradise Island
            </div>
          </div>
          <div className="relative w-[170px] h-[563px] overflow-hidden rounded-3xl group hover:scale-110">
            <Image
              src="/img/Hawkins Labs.jpg"
              alt=""
              fill
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute font-bold text-[32px] w-[536px] h-[170px] leading-[40.32px] transform -rotate-90 top-[50%] left-[50%] translate-x-[-37%] translate-y-[33%] text-center transition-transform duration-300 ease-in-out group-hover:scale-110">
              Hawkins Labs
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
