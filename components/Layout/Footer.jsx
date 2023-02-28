import Image from "next/image";
import arrow from "../../public/assets/arrow-right-solid.svg"
import Wrapper from "../wrapper";

export default function Footer(props) {
    return (
        <Wrapper>
            <div className="bg-[#0077b3] text-white text-base leading-[1.6875rem] py-10 pl-5 xl:pl-[8.25rem]">
                <div className="flex flex-wrap gap-5">
                    {
                        ["Privacy Statement", "Disclaimer", "Safety at VU Amsterdam", "Colofon", "Cookie Settings", "Web archive"].map((item, i) => {
                            return (
                                <div className="flex gap-3">
                                    <span key={i}>{item}</span>
                                    <Image src={arrow} width={15} alt="arrow" />
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <p className="pt-4">Copyright © 2023 - Vrije Universiteit Amsterdam</p>
                </div>
            </div>
        </Wrapper>
    );
}

