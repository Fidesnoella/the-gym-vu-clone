import Image from "next/image";
import Wrapper from "../wrapper";
import NewsCard from "../Cards/NewsCard";
import arrow from "../../assets/arrow.svg"

export default function News() {
    return (
        <Wrapper>
            <div className="bg-[#faf7f5] py-12 px-3 md:px-24">
                <h1 className="text-[2.4375rem] text-[#3b2171] font-light py-3">News</h1>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-4">
                        {
                            [1, 2].map((item, i) => {
                                return (
                                    <NewsCard date={"08 Feb 2023"} text="EarthQuakes Turkey and Syria" />
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col gap-4">
                        {
                            [1, 2, 3].map((item, i) => {
                                return (
                                    <NewsCard date={"08 Feb 2023"} text="EarthQuakes Turkey and Syria" />
                                )
                            })
                        }
                    </div>
                </div>
                <p className="justify-center py-5 flex gap-2 text-lg items-center">News overview <span><Image src={arrow} width={15} /></span ></p>
            </div>
        </Wrapper>
    );
}

