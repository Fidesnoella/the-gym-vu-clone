import Image from "next/image";
import Wrapper from "../wrapper";
import arrow from "../../public/assets/arrow.svg"
import left from "../../public/assets/chevron-left-solid.svg"
import right from "../../public/assets/chevron-right-solid.svg"


export default function Calender() {

    const items = [
        {
            title: "PDF Defances",
            date: "21 February 2023",
            text: "PDF Defance by T.J.H. Jonkers"
        },
        {
            title: "Lectures",
            date: "21 February 2023",
            text: "ABRI lunch seminar Dr. Paula Jarzabkowski"
        },
        {
            title: "Social events",
            date: "21 February 2023",
            text: "Board game night - Life is Better in 3D"
        },
        {
            title: "Other events",
            date: "21 February 2023",
            text: "VU Pride TalkS!"
        },
    ];

    return (
        <Wrapper>
            <div className="bg-[#fefefe] px-5 xl:px-[8.25rem] py-16">
                <div className="flex flex-col md:flex-row justify-between">
                    <h1 className="text-[2.375rem] text-[#0077b3] font-light">Calender</h1>
                    <div>
                        <form action="#" className="flex flex-col md:flex-row gap-3">
                            <div className="grid grid-cols-2 gap-2">
                                <select className=" bg-white py-4 px-4 outline-none shadow-3xl">
                                    <option selected className="p-4">All Categories</option>
                                    {
                                        ["Other events", "Lectures", "Social events", "Debates conversations", "PhD Defences", "Workshop", "Networking meeting", "Movies"].map((item, i) => {
                                            return <option key={i}>{item}</option>
                                        })
                                    }
                                </select>
                                <select className="bg-white py-4 px-4 outline-none shadow-3xl">
                                    <option selected className="p-8">Date</option>
                                    {
                                        ["February 2023", "March 2023", "April 2023", "May 2023", "June 2023", "July 2023", "August 2023", "September 2023", "October 2023"].map((item, i) => {
                                            return <option key={i}>{item}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="overflow-x-scroll scroll-hidden">
                    <div className="grid sm:grid-cols-4 grid-cols-[repeat(4,_190px)] py-10 gap-5">
                        {
                            items.map((item, i) => {
                                return (
                                    <div className="flex flex-col gap-3">
                                        <p className="underline text-[#333333] text-lg font-light" key={i}>{item.title}</p>
                                        <p className="text-lg font-bold text-[#0077b3]" key={i}>{item.date}</p>
                                        <p className="text-2xl font-light" key={i}>{item.text}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="border-t border-[#0077b3] flex justify-between">
                    <p className=" py-5 flex gap-2 text-lg items-center">View Calender <span><Image src={arrow} width={15} /></span ></p>
                    <div className="flex gap-8 bg-[#dff2fd] py-3 px-6 cursor-pointer">
                        <span ><Image src={left} width={18} onClick={() => slide.slidePrev()} /></span>
                        <span ><Image src={right} width={18} onClick={() => slide.slideNext()} /></span>
                    </div>
                </div>
            </div >
        </Wrapper >
    );
}
