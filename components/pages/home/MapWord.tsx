import Image from "next/image";
export default function MapWord() {
  return (
    <div className="">
      <div className="font-normal text-sm text-gray text-center mt-[200.95px]">
        |People on the World
      </div>
      <div className="font-bold text-[64px] leading-[80.64px] text-center w-[962px] m-auto">
        Track friends around you and invite them to play together in the same
        world
      </div>
      <div className="">
        <div className="ml-[135px] mt-[68px]">
          <Image src="/img/map-base 1.svg" alt="" width={1170} height={526} />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
