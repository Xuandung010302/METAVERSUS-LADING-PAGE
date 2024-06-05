import Image from "next/image";
export default function Insight() {
  return (
    <>
      <div className="">
        <div className="font-normal text-sm text-gray text-center mt-[200px]">
          | Insight
        </div>
        <div className="font-bold text-[64px] leading-[80.64px] text-center w-[962px] m-auto">
          Insight about metaverse
        </div>
        <div className="ml-[135px] mt-[50px] mr-[135px]">
          <div className="flex">
            <Image src="/img/Insight1.svg" alt="" width={270} height={250} />
            <div>
              <div className="font-normal text-[42px] leading-[52.5px] ml-[62px] mr-[92px] mt-[24px]">
                The launch of the Metaverse makes Elon musk ketar-ketir
              </div>
              <div className="text-gray font-normal text-[20px] leading-[40px] ml-[62px] mr-[92px] mt-4">
                Magna etiam tempor orci eu lobortis elementum nibh tellus
                molestie. Diam maecenas sed enim ut sem viverra alique
              </div>
            </div>
            <div className="mt-[53px] hover:scale-110 cursor-pointer">
              <Image src="/logo/Group 4.svg" alt="" width={100} height={0} />
            </div>
          </div>
        </div>
        <div className="ml-[135px] mt-[50px] mr-[135px]">
          <div className="flex">
            <Image src="/img/Insight2.svg" alt="" width={270} height={250} />
            <div>
              <div className="font-normal text-[42px] leading-[52.5px] ml-[62px] mr-[92px] mt-[24px]">
                7 tips to easily master the madness of the Metaverse
              </div>
              <div className="text-gray font-normal text-[20px] leading-[40px] ml-[62px] mr-[92px] mt-4">
                Vitae congue eu consequat ac felis donec. Et magnis dis
                parturient montes nascetur ridiculus mus. Convallis tellus id
                interdum
              </div>
            </div>
            <div className="mt-[53px] hover:scale-110 cursor-pointer">
              <Image src="/logo/Group 4.svg" alt="" width={100} height={0} />
            </div>
          </div>
        </div>
        <div className="ml-[135px] mt-[50px] mr-[135px]">
          <div className="flex">
            <Image src="/img/Insight3.svg" alt="" width={270} height={250} />
            <div>
              <div className="font-normal text-[42px] leading-[52.5px] ml-[62px] mr-[92px] mt-[24px]">
                With one platform you can explore the whole world virtually
              </div>
              <div className="text-gray font-normal text-[20px] leading-[40px] ml-[62px] mr-[92px] mt-4">
                Quam quisque id diam vel quam elementum. Viverra nam libero
                justo laoreet sit amet cursus sit. Mauris in aliquam sem
              </div>
            </div>
            <div className="mt-[53px] hover:scale-110 cursor-pointer">
              <Image src="/logo/Group 4.svg" alt="" width={100} height={0} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
