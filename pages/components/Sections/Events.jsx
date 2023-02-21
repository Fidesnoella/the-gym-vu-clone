import Image from "next/image";
import Wrapper from "../wrapper";
import graduation from "../../assets/graduation-cap-solid.svg"
import arrowAmst from "../../assets/arrow-amst.svg"
import ParaArrow from "../ui/ParaArrow";
import earth from "../../assets/earth-americas-solid.svg"
import medal from "../../assets/medal-solid.svg"
import puzzle from "../../assets/puzzle-piece-solid.svg"

export default function Events() {

    return (
        <Wrapper>
            <div className="flex bg-white flex-wrap px-4 lg:px-0 pt-4 sm:pt-8 pb-32 sm:pb-40 justify-center gap-6 sm:gap-10 lg:gap-24">
                {
                    [{ img: graduation, text: "31.704 students" }, { img: earth, text: "5.190 international students" }, { img: medal, text: "459 PhD defences" }, { img: puzzle, text: "9 faculties" }].map((item, i) => {
                        return (
                            <div className="flex flex-col md:flex-row  gap-4 items-center">
                                <Image key={i} src={item.img} className="w-8" />
                                <p className="text-base md:text-lg font-normal leading-5 text-[#333333]" key={i}>{item.text}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="bg-[#faf7f5] grid  md:grid-cols-2  gap-4 px-5 xl:px-[8.25rem] py-14">
                <div className="bg-white p-6 -mt-40 md:-mt-36 shadow-3xl">
                    <div className="flex justify-between items-center px-3 py-3 md:py-6">
                        <h1 className="text-[#0077b3] text-[1.875rem] md:text-[2.375rem] font-light">Education</h1>
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
                <div className="bg-white p-6 -mt-0 md:-mt-36 shadow-3xl">
                    <div className="flex justify-between px-3 py-3 md:py-6">
                        <h1 className="text-[#0077b3] text-[1.875rem] md:text-[2.375rem] font-light">Research</h1>
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

