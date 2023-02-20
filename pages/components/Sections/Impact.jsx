import Image from "next/image";
import Wrapper from "../wrapper";
import david from "../../assets/david.jpeg"
import arrow from "../../assets/arrow.svg"
import left from "../../assets/chevron-left-solid.svg"
import right from "../../assets/chevron-right-solid.svg"

export default function Impact() {
    return (
        <Wrapper>
            <div className="py-24 bg-[#faf7f5] flex flex-col md:block">
                <div className="relative">
                    <h1 className="px-3 md:px-24 text-[2.375rem] py-3 text-[#cc4100]">Impact</h1>
                    <div className="w-full md:h-[700px] overflow-hidden"> <Image src={david} className="w-full bg-cover  " /></div>
                </div>
                <div className='bg-white p-8 shadow-3xl relative flex flex-col gap-4 md:absolute -mt-0 md:-mt-44 ml-0 mx-0 md:ml-44'>
                    <div className='flex flex-col gap-3  py-3 md:py-10'>
                        <h1 className="text-2xl text-[#cc4100]">Science to Impact</h1>
                        <p>An interview with entrepreneurial scientist Davide Iannuzzi, Chief Impact Officer of Vrije Universiteit Amsterdam</p>
                        <div className="flex gap-3">
                            <p>Read More</p>
                            <Image src={arrow} width={20} />
                        </div>
                    </div>
                    <div className='self-end absolute top-1 md:top-[unset] right-0 -translate-y-[100%] md:-translate-y-0 md:bottom-0'>
                        <div className="flex gap-8 bg-[#fcd3b6] py-3 px-6 cursor-pointer">
                            <Image src={left} width={18} />
                            <Image src={right} width={18} />
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
