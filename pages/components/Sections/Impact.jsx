import Image from "next/image";
import Wrapper from "../wrapper";
import david from "../../assets/david.jpeg"
import arrow from "../../assets/arrow.svg"

export default function Impact() {
    return (
        <Wrapper>
            <div className="py-24 bg-[#faf7f5] flex flex-col md:block">
                <div className="relative">
                    <h1 className="px-3 md:px-24 text-[2.375rem] py-3 text-[#cc4100]">Impact</h1>
                    <div className="w-full"> <Image src={david} className="w-full h-[500px]" /></div>
                </div>
                <div className='bg-white p-8 shadow-3xl flex flex-col gap-4 md:absolute -mt-0 md:-mt-44 ml-3 mx-3 md:ml-44'>
                    <div className='flex flex-col gap-3 py-10'>
                        <h1 className="text-2xl text-[#cc4100]">Science to Impact</h1>
                        <p>An interview with entrepreneurial scientist Davide Iannuzzi, Chief Impact Officer of Vrije Universiteit Amsterdam</p>
                    </div>
                    <div className='self-end'>
                        <Image src={arrow} width={20} />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
