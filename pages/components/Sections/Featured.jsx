import Image from "next/image";
import Wrapper from "../wrapper";
import Instgram from "../../assets/instagram.svg"
import ParaArrow from "../ui/ParaArrow";

export default function Featured() {
    return (
        <Wrapper>
            <div className="bg-white py-16">
                <div className="grid md:grid-cols-3 px-3 md:px-24 gap-5">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[#0077b3] font-light text-[1.875rem] md:text-[2.375rem]">VU main menu</h1>
                        <div className="bg-white p-4 shadow-3xl">
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
                        <h1 className="text-[#cc4100] font-light text-[1.875rem] md:text-[2.375rem]">Most searched</h1>
                        <div className="bg-white p-4 shadow-3xl">
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
                        <h1 className="text-[#008053] font-light text-[1.875rem] md:text-[2.375rem]">Featured</h1>
                        <div className="bg-white p-4 shadow-3xl">
                            <div className="flex flex-col gap-1">
                                {
                                    ["Home", "Education", "Research", "About VU Amsterdam"].map((item, index) => {
                                        return (
                                            <ParaArrow para={item} key={index} />
                                        )
                                    })
                                }
                            </div>
                            <div className="flex gap-3 pt-10 px-3">
                                {
                                    [1, 2, 3, 4].map((item, i) => {
                                        return <div className="bg-[#0077b3] p-2"><Image src={Instgram} width={40} /></div>
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

