import Image from "next/image";
import Wrapper from "../wrapper";
import Search from "../../assets/search.svg"
import people from "../../assets/CH_C119530b_BA_home_hero_2200x720.jpeg"
import arrow from "../../assets/arrow-amst.svg"

export default function Hero(props) {
    return (
        <>
            <Wrapper>
                <div className="bg-white shadow-4xl pt-2 md:pt-16 overflow-hidden">
                    <div className="flex px-6 lg:px-0  pt-8 sm:pt-10 py-11 sm:py-[3.75rem]">
                        <h1 className="text-[#333333] text-[2.0625rem] md:text-[2.8125rem] leading-[2.5rem] md:leading-[3.75rem] font-light max-w-[904px] pl-5 lg:pl-[13.5rem]">You don’t just become something, you become someone</h1>
                    </div>
                    <div className="flex-col md:flex-row flex items-start md:items-center mx-0 lg:mx-[8.25rem] relative z-20">
                        <div className="bg-[#0077b3]  md:flex-1 px-3 md:px-10 py-5 sm:py-8 w-full lg:w-auto ">
                            <span className="border-b border-white text-white flex justify-between">
                                <input type="text" placeholder="Search..." className="text-xl md:text-[1.375rem] leading-[2.125rem] font-light outline-none bg-[#0077b3] placeholder-white" />
                                <Image src={Search} width={20} />
                            </span>
                        </div>
                        <div className="bg-white text-[#0077b3] flex justify-between px-4 md:flex-1 gap-6 py-[2.1875rem] items-center shadow-3xl w-full lg:w-auto">
                            <div className="text-xl font-light md:text-[1.375rem] leading-[1.875rem]">About VU Amsterdam</div>
                            <div>
                                <Image src={arrow} width={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
            <div className="relative -mt-0 md:-mt-10 bg-[#f0edeb]">
                <Image src={people} className="mx-auto" />
            </div>
        </>
    );
}
