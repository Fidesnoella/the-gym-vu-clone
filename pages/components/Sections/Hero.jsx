import Image from "next/image";
import Wrapper from "../wrapper";
import Search from "../../assets/search.svg"
import people from "../../assets/CH_C119530b_BA_home_hero_2200x720.jpeg"
import arrow from "../../assets/arrow-amst.svg"

export default function Hero(props) {
    return (
        <>
            <Wrapper>
                <div className="shadow-lg">
                    <div className="flex justify-center items-start p-10">
                        <h1 className="text-[#333333] text-[2.8125rem] leading-[3.75rem] font-light max-w-[900px]">You don’t just become something, you become someone</h1>
                    </div>
                    <div className="flex items-center ml-40 mr-40  relative z-20">
                        <form action="#" className="bg-[#0077b3] flex-1 p-10">
                            <span className="border-b-2 border-white text-white flex justify-between">
                                <input type="text" placeholder="Search..." className="text-2xl outline-none bg-[#0077b3] placeholder-white" />
                                <Image src={Search} width={20} />
                            </span>
                        </form>
                        <div className="bg-white text-[#0077b3] flex justify-between px-3 gap-6 py-10 items-center">
                            <div className="text-2xl">About VU Amsterdam</div>
                            <div>
                                <Image src={arrow} width={20} />
                            </div>
                        </div>
                    </div>

                </div>
            </Wrapper>
            <div className="relative -mt-10">
                <Image src={people} />
            </div>
        </>
    );
}
