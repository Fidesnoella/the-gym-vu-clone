import Image from "next/image";
import Wrapper from "../wrapper";
import graduation from "../../assets/graduation-cap-solid.svg"
import arrowAmst from "../../assets/arrow-amst.svg"
import ParaArrow from "../ui/ParaArrow";

export default function Events() {

    return (
        <Wrapper>
            <div className="flex px-20 pt-5 gap-10 items-center p-10 bg-white pb-32">
                <div className="flex gap-8 items-center text-lg">
                    <Image src={graduation} width={40} />
                    <p>31.704 students</p>
                </div>
                <div className="flex gap-8 items-center text-lg">
                    <Image src={graduation} width={40} />
                    <p>31.704 students</p>
                </div>
                <div className="flex gap-8 items-center text-lg">
                    <Image src={graduation} width={40} />
                    <p>31.704 students</p>
                </div>
                <div className="flex gap-8 items-center text-lg">
                    <Image src={graduation} width={40} />
                    <p>31.704 students</p>
                </div>
            </div>
            <div className="bg-[#faf7f5] grid grid-cols-2 gap-4 px-20 py-14">
                <div className="bg-white p-4 -mt-24 shadow-3xl">
                    <div className="flex justify-between px-3 py-6">
                        <h1 className="text-[#0077b3] text-[2.375rem]">Education</h1>
                        <span><Image src={arrowAmst} width={30} /></span>
                    </div>
                    <div className="flex flex-col gap-1">
                        {
                            ["Bachelor's programmes", "Master's programmes", "Honours programme", "Education for professionals", "Study guide"].map((item, index) => {
                                return (
                                    <ParaArrow para={item} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="bg-white p-4 -mt-24 shadow-3xl">
                    <div className="flex justify-between px-3 py-6">
                        <h1 className="text-[#0077b3] text-[2.375rem]">Research</h1>
                        <span><Image src={arrowAmst} width={30} /></span>
                    </div>
                    <div className="flex flex-col gap-1">
                        {
                            ["Research highlights", "Valorisation", "Our scientists", "Prizes and distinctions", "Interdisciplinary research institutes"].map((item, index) => {
                                return (
                                    <ParaArrow para={item} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

