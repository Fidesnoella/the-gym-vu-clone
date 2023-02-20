import Image from "next/image";
import Wrapper from "../wrapper";
import Search from "../../assets/search.svg"
import people from "../../assets/CH_C119530b_BA_home_hero_2200x720.jpeg"
import arrow from "../../assets/arrow-amst.svg"

export default function Hero(props) {
    return (
        <>
            <Wrapper>
                <div className="bg-white shadow-4xl pt-28 overflow-hidden">
                    <div className="flex sm:justify-center items-start p-10">
                        <h1 className="text-[#333333] text-[2.0625rem] md:text-[2.8125rem] leading-[2.5rem] md:leading-[3.75rem] font-light max-w-[900px]">You don’t just become something, you become someone</h1>
                    </div>
                    <div className="flex-col md:flex-row flex items-start  md:items-center ml-0 md:ml-40 mr-0 md:mr-40 relative z-20">
                        <div className="bg-[#0077b3] flex-none- basis-[70%]- md:flex-1 p-5 sm:p-10 w-full md:w-auto ">
                            <span className="border-b-2 border-white text-white flex justify-between">
                                <input type="text" placeholder="Search..." className="text-xl md:text-2xl outline-none bg-[#0077b3] placeholder-white" />
                                <Image src={Search} width={20} />
                            </span>
                        </div>
                        <div className="bg-white text-[#0077b3] flex justify-between px-3 md:flex-1 gap-6 py-10 items-center shadow-3xl w-full md:w-auto">
                            <div className="text-xl md:text-2xl">About VU Amsterdam</div>
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
