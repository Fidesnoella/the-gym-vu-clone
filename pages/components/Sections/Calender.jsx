import Image from "next/image";
import Wrapper from "../wrapper";
import arrow from "../../assets/arrow.svg"
import left from "../../assets/chevron-left-solid.svg"
import right from "../../assets/chevron-right-solid.svg"

export default function Calender(props) {
    return (
        <Wrapper>
            <div className="bg-[#fefefe] px-24 py-16">
                <div className="flex justify-between">
                    <h1 className="text-[2.375rem] text-[#0077b3]">Calender</h1>
                    <div>
                        <form action="#" className="flex gap-3">
                            <input type="text" placeholder="All Categories" className="shadow-3xl p-4" />
                            <input type="text" placeholder="Date" className="shadow-3xl p-4" />
                        </form>
                    </div>
                </div>
                <div className="grid grid-cols-4  py-10">
                    {
                        [1, 2, 3, 4].map((item, i) => {
                            return (
                                <div className="flex flex-col gap-3">
                                    <p className="underline text-[#333333] text-lg font-light">PDF Defances</p>
                                    <p className="text-lg font-bold text-[#0077b3]">20 February 2023</p>
                                    <p className="text-2xl font-normal">PDF Defance by T.J.H. Jonkers </p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="border-t border-[#0077b3] flex justify-between">
                    <p className=" py-5 flex gap-2 text-lg items-center">View Calender <span><Image src={arrow} width={15} /></span ></p>
                    <div className="flex gap-8 bg-[#dff2fd] py-3 px-6 cursor-pointer">
                        <Image src={left} width={18} />
                        <Image src={right} width={18} />
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
