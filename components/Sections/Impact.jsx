import Image from "next/image";
import Wrapper from "../wrapper";
import david from "../../public/assets/david.jpeg"
import arrow from "../../public/assets/arrow.svg"
import left from "../../public/assets/chevron-left-solid.svg"
import right from "../../public/assets/chevron-right-solid.svg"
import dot from "../../public/assets/dot.png"

export default function Impact() {
    return (
        <Wrapper>
            <div className="pt-0 md:pt-[3.75rem] pb-16 md:pb-24 bg-[#faf7f5] flex flex-col md:block">
                <div className="relative">
                    <h1 className="px-5 xl:px-[8.25rem] text-[2.375rem] py-3 text-[#cc4100]">Impact</h1>
                    <div className="w-full md:h-[700px] overflow-hidden"> <Image src={david} className="w-full bg-cover" /></div>
                </div>
                <div className='impact bg-white max-w-xl w-full mx-0 md:mx-auto p-8 relative flex flex-col gap-4 -mt-0 md:-mt-56 lg:-mt-44'>
                    <div className='flex flex-col gap-8 py-3 md:py-10'>
                        <h1 className="text-2xl leading-[2.25rem] font-light text-[#cc4100]">Science to Impact</h1>
                        <p className="text-lg leading-[1.875rem] font-normal">An interview with entrepreneurial scientist Davide Iannuzzi, Chief Impact Officer of Vrije Universiteit Amsterdam</p>
                        <div className="flex gap-3">
                            <p>Read More</p>
                            <Image src={arrow} width={20} />
                        </div>
                    </div>
                    <Image src={dot} className="self-end absolute top-1 md:top-[unset] right-36 bottom-0 hidden md:block" />
                    <div className='self-end absolute top-1 z-20 md:top-[unset] right-0 -translate-y-[0%] md:-translate-y-0 md:bottom-0'>
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
