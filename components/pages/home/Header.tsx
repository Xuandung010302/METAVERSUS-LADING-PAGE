import Image from "next/image";

export default function Header() {
  return (
    <div className="pl-[135px] pt-[35px]">
      <div className="flex pr-[135px]">
        <div className="relative size-6 hover:scale-110 cursor-pointer">
          <Image src="/logo/search.svg" alt="" fill />
        </div>
        <div className="font-extrabold text-[24px] leading-[30.24px] px-[480px]">
          METAVERSUS
        </div>
        <div className="relative size-6 hover:scale-110 cursor-pointer">
          <Image src="/logo/gg_menu-right.svg" alt="" fill />
        </div>
      </div>
      <div className="flex max-w-[1440px] w-full">
        <div className="font-normal mt-[206px] ml-[88px] text-gray hover:scale-110 cursor-pointer">
          |Home
        </div>
        <div className="ml-[71px] mt-[174px] font-bold text-[144px] leading-[158.4px] z-10">
          METAVERSE <br></br> MADNESS
        </div>
        <div className="relative size-6 mt-[121px] ml-[121px]">
          <Image
            src="/logo/Vector.svg"
            alt=""
            fill
            className="hover:scale-110 cursor-pointer"
          />
          <Image
            src="/logo/discor.svg"
            alt=""
            fill
            className="mt-[54px] hover:scale-110 cursor-pointer"
          />
          <Image
            src="/logo/tw.svg"
            alt=""
            fill
            className="mt-[108px] hover:scale-110 cursor-pointer"
          />
          <Image
            src="/logo/ig.svg"
            alt=""
            fill
            className="mt-[162px] hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
      <div className="">
        <Image
          src="/img/Mask Group.svg"
          alt=""
          width={1305}
          height={500}
          className="mt-[-48px] -z-10"
        />
      </div>
      <div className="relative mt-[-166px] ml-[971.07px] ">
        <Image src="/img/Group 74.svg" alt="" width={395} height={395} />
      </div>
    </div>
  );
}
