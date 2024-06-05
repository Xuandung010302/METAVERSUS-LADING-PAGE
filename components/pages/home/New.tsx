/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
export default function New() {
  return (
    <div className="flex">
      <div className="ml-[135px]">
        <div className="text-gray font-normal text-[14px] ledaing-[17.64px] mt-[216.13px]">
          |Whats New?
        </div>
        <div className="font-bold text-[64px] leading-[76.8px] w-[570px] mt-2">
          What's new about Metaversus?
        </div>
        <div className="flex">
          <div className="border-spacing-0 size-[70px] bg-gray-700 rounded-3xl mt-12 hover:scale-110 cursor-pointer">
            <div className="font-bold text-[20px] ml-[23px] pt-[19px]">
              <Image
                src="/img/ic_baseline-vrpano.svg"
                alt=""
                width={24}
                height={24}
                className="mt-[5px]"
              />
            </div>
          </div>
          <div className="border-spacing-0 size-[70px] bg-gray-700 rounded-3xl mt-12 ml-[189px] hover:scale-110 cursor-pointer">
            <div className="font-bold text-[20px] ml-[23px] pt-[19px]">
              <Image
                src="/img/bi_headset-vr.svg"
                alt=""
                width={24}
                height={24}
                className="mt-[5px]"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="">
            <div className="font-bold text-[24px] pt-[24px] leading-[30.24px]">
              A new world
            </div>
            <div className="font-normal text-[16px] pt-4 text-body w-[213px]">
              we have the latest update with new world for you to try never mind
            </div>
          </div>
          <div className="ml-[46px]">
            <div className="font-bold text-[24px] pt-[24px] leading-[30.24px]">
              More realistic
            </div>
            <div className="font-normal text-[16px] pt-4 text-body w-[225px]">
              In the latest update, your eyes are narrow, making the world more
              realistic than ever
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[200.13px] ml-[101px]">
        <Image src="/img/planet-14.svg" alt="" width={600.32} height={600.81} />
        <Image
          src="/img/Rectangle 9.svg"
          alt=""
          width={569}
          height={314.8}
          className="mt-[-400.21px]"
        />
      </div>
    </div>
  );
}
