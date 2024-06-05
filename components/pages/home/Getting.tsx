import Image from "next/image";
export default function Getting() {
  return (
    <div className=" relative">
      <div className="flex">
        <Image
          src="/img/planet-11.svg"
          alt=""
          height={527.33}
          width={461.32}
          className="mt-[200px] ml-[205px] mr-[167.68px]"
        />
        <div>
          <div className="font-normal text-sm leading-[17.64px] mt-[204px] text-col text-gray">
            | How Metaverus Works
          </div>
          <div className="font-bold text-[64px] leading-[76.8px] mr-[135px] mt-1">
            Get started with just a few clicks
          </div>
          <div className="flex">
            <div className="border-spacing-0 size-[70px] bg-gray-700 rounded-3xl mt-[24px] hover:scale-110 cursor-pointer">
              <div className="font-bold text-[20px] ml-[23px] pt-[19px]">
                01
              </div>
            </div>
            <div className="text-body font-normal text-[18px] leading-[32.4px] ml-[30px] max-w-[234px] mt-[34px]">
              Find a world that suits you and you want to enter
            </div>
          </div>
          <div className="flex">
            <div className="border-spacing-0 size-[70px] bg-gray-700 rounded-3xl mt-[24px] hover:scale-110 cursor-pointer">
              <div className="font-bold text-[20px] ml-[23px] pt-[19px]">
                02
              </div>
            </div>
            <div className="text-body font-normal text-[18px] leading-[32.4px] ml-[30px] max-w-[270px] mt-[34px]">
              Enter the world by reading basmalah to be safe
            </div>
          </div>
          <div className="flex">
            <div className="border-spacing-0 size-[70px] bg-gray-700 rounded-3xl mt-[24px] hover:scale-110 cursor-pointer">
              <div className="font-bold text-[20px] ml-[23px] pt-[19px]">
                03
              </div>
            </div>
            <div className="text-body font-normal text-[18px] leading-[32.4px] ml-[30px] max-w-[370px] mt-[34px]">
              No need to beat around the bush, just stay on the gas and have fun
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <Image
          src="/img/Rectangle 3.svg"
          alt=""
          height={265.76}
          width={569}
          className="mt-[-303.99px] ml-[120.99px] mr-[130.58px]"
        />
      </div>
    </div>
  );
}
