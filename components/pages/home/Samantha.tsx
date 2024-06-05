import Image from "next/image";
export default function Samantha() {
  return (
    <div className="flex">
      <div className="w-[370px] h-[610px] border border-[#6A6A6A] rounded-[32px] p-1 mt-[200px] ml-[135px]">
        <div className="pt-[163px] pl-[30px] font-bold text-[32px] leading-[40.32px]">
          Samantha
        </div>
        <div className="pt-2 pl-[30px] pb-6 font-normal text-lg leading-[22.68px]">
          Founder Metaverus
        </div>
        <div className="pl-[30px] font-normal text-2xl leading-[45.6px] w-[311px]">
          “With the development of today`s technology, metaverse is very useful
          for today`s work, or can be called web 3.0. by using metaverse you can
          use it as anything”
        </div>
      </div>
      {/* <Image
        src="/logo/Group 75.svg"
        alt=""
        width={0}
        height={0}
        className="h-[191.6px] mt-[223px] w-[192.16px]"
      /> */}
      <div className="relative w-[768px] h-[610px] overflow-hidden rounded-[32px] mt-[200px] ml-8">
        <Image
          src="/img/nen1.jpg"
          alt=""
          fill
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
