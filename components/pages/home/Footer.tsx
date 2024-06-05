import Image from "next/image";

export default function Footer() {
  return (
    <div className="mt-[200px] mx-[135px]">
      <div className="flex">
        <div className="font-bold text-[60px] leading-[80.64px] ">
          Enter the Metaverse
        </div>
        <Image
          src="/logo/enter.svg"
          alt=""
          width={246}
          height={0}
          className="ml-[326px] hover:scale-110 cursor-pointer"
        />
      </div>
      <hr className="border-t-1 border-gray-300 mt-[80px]" />
      <div className="mt-[50px]">
        <div className="flex">
          <div className="font-extrabold text-2xl">METAVERUS</div>
          <div className="mx-[222px] text-gray content-center text-sm">
            Copyright © 2021 - 2022 Metaversus. All rights reserved.
          </div>
          <div className="flex size-6">
            <Image
              src="/logo/tw.svg"
              alt=""
              width={24}
              height={24}
              className="hover:scale-110 cursor-pointer"
            />
            <Image
              src="/logo/in.svg"
              alt=""
              width={24}
              height={24}
              className="ml-[30px] hover:scale-110 cursor-pointer"
            />
            <Image
              src="/logo/ig.svg"
              alt=""
              width={24}
              height={24}
              className="ml-[30px] hover:scale-110 cursor-pointer"
            />
            <Image
              src="/logo/fb.svg"
              alt=""
              width={24}
              height={24}
              className="ml-[30px] hover:scale-110 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
