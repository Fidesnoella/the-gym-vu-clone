import Image from "next/image";
import Wrapper from "../wrapper";
import Instagram from "../../assets/instagram.svg"
import LinkedIn from "../../assets/linkedin.svg"
import Facebook from "../../assets/facebook.svg"
import Twitter from "../../assets/twitter.svg"
import Youtube from "../../assets/youtube.svg"
import ParaArrow from "../ui/ParaArrow";

export default function Featured() {
    return (
        <Wrapper>
            <div className="bg-white py-16 shadow-4xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 px-5 xl:px-[8.25rem] gap:10 sm:gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[#0077b3] px-6 md:px-0 font-light text-[1.875rem] md:text-[2.375rem]">VU main menu</h1>
                        <div className="bg-white p-4 shadow-none md:shadow-3xl py-8">
                            <div className="flex flex-col gap-1">
                                {
                                    ["Home", "Education", "Research", "About VU Amsterdam", "University Library", "VU Press Office", "Alumni"].map((item, index) => {
                                        return (
                                            <ParaArrow para={item} key={index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[#cc4100] px-6 md:px-0 font-light text-[1.875rem] md:text-[2.375rem]">Most searched</h1>
                        <div className="bg-white p-4 shadow-none md:shadow-3xl py-8">
                            <div className="flex flex-col gap-1">
                                {
                                    ["Contact us", "People finder", "Bachelors degree programmes", "Masters degree programmes", "Faculties", "Professionals"].map((item, index) => {
                                        return (
                                            <ParaArrow para={item} key={index} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[#008053] px-6 md:px-0 font-light text-[1.875rem] md:text-[2.375rem]">Featured</h1>
                        <div className="bg-white p-4 shadow-none md:shadow-3xl flex flex-col justify-between py-14">
                            <div className="flex flex-col gap-1">
                                {
                                    ["Campus tour", "Study guide", "VU Magazine"].map((item, index) => {
                                        return (
                                            <ParaArrow para={item} key={index} />
                                        )
                                    })
                                }
                            </div>
                            <div className="flex gap-3 pt-10 px-3">
                                {
                                    [Instagram, LinkedIn, Facebook, Twitter, Youtube].map((item, i) => {
                                        return <div className="bg-[#0077b3] p-2" key={i}><Image src={item} width={40} /></div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

