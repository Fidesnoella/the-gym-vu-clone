import Image from "next/image";
import arrow from "../../assets/arrow-right-solid.svg"
import Wrapper from "../wrapper";

export default function Footer(props) {
    return (
        <Wrapper>
            <div className="bg-[#0077b3] text-white text-base leading-[1.6875rem] py-10 pl-24">
                <div className="flex gap-5">
                    {
                        [1, 2, 3, 4, 5, 6].map((item, i) => {
                            return (
                                <div className="flex gap-3">
                                    <span>Privacy Statement</span>
                                    <Image src={arrow} width={15} alt="arrow" />
                                </div>
                            )
                        })
                    }
                </div>
                <p className="pt-4">Copyright © 2023 - Vrije Universiteit Amsterdam</p>
            </div>
        </Wrapper>
    );
}

