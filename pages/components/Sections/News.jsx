import Image from "next/image";
import Wrapper from "../wrapper";
import NewsCard from "../Cards/NewsCard";
import arrow from "../../assets/arrow.svg"

export default function News() {
    return (
        <Wrapper>
            <div className="bg-[#faf7f5] py-12 px-5 xl:px-[8.25rem]">
                <h1 className="text-[2.4375rem] text-[#3b2171] font-light py-3">News</h1>
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex flex-col gap-4">
                        <NewsCard size={"max-w-[14.9375rem] text-lg md:text-2xl leading-[1.875rem]"} style={"w-[17.75rem] h-[13.4375rem] object-cover"} img={"https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/83279044-76f1-4736-8fe6-383f0530dae1/2N3337X.jpg?w=1250&h=600&fit=clip&rect=0,1254,6720,3226"} date="08 Feb 2023" text="EarthQuakes Turkey and Syria" />
                        <NewsCard size={"max-w-[14.9375rem] text-lg md:text-2xl leading-[1.875rem]"} style={"w-[17.75rem] h-[13.4375rem] object-cover"} img={"https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/d8e771d2-c135-499c-a67c-d1da825f453b/robofinch%20def.png"} date="15 Feb 2023" text="Robot bird gives singing lessons to zebra finches" />
                    </div>
                    <div className="flex flex-col md:flex-row lg:flex-col justify-between gap-4">
                        <NewsCard style={"w-[17.75rem] h-[13.4375rem] md:w-[7.125rem] md:h-[5.4375rem] object-cover"} img={"https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/45e509b2-1cf3-49a7-b40d-53310c2e2219/7%20ton%20voor%20welzijn%20Oekrai%CC%88ne%20vluchtelingen_afb_1250x600.jpg"} date="06 Feb 2023" text="EU grant to improve mental well-being of Ukrainian refugees" size={"max-w-[11.3544rem] text-lg leading-[1.875rem]"} />
                        <NewsCard style={"w-[17.75rem] h-[13.4375rem] md:w-[7.125rem] md:h-[5.4375rem] object-cover"} img={"https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c49919f7-968b-41d7-8776-e9e555f737c5/Sapiens_VUweb_2200x720.jpg?w=1250&h=600&fit=clip&rect=350,0,1500,720"} date="03 Feb 2023" text="'Sapiens' partnership ended" size={"max-w-[11.3544rem] text-lg leading-[1.875rem]"} />
                        <NewsCard style={"w-[17.75rem] h-[13.4375rem] md:w-[7.125rem] md:h-[5.4375rem] object-cover"} img={"https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/f9f7b751-4e22-4175-add9-3aec344e16ed/Wouter-Botzen.png"} date="31 Jan 2023" text="ERC Consolidator Grant for Wouter Botzen" size={"max-w-[11.3544rem] text-lg leading-[1.875rem]"} />
                    </div>
                </div>
                <p className="justify-center pb-5 pt-16 flex gap-2 font-medium cursor-pointer text-lg items-center">News overview <span><Image src={arrow} width={15} /></span ></p>
            </div>
        </Wrapper>
    );
}

