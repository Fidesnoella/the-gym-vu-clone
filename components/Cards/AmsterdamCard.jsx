import Image from "next/image";
import Wrapper from "../wrapper";
import arrow from "../../public/assets/arrow.svg"

export default function AmsterdamCard({ img, title }) {
    return (
        <Wrapper>
            <div className="hover:shadow-3xl flex flex-col cursor-pointer gap-6 w-[16.75rem] h-[22.4375rem] bg-white flex-grow-0 flex-shrink-0">
                <img src={img} className="object-cover object-center w-full h-full aspect-video" />
                <h1 className="text-[#cc4100] text-xl md:text-2xl leading-[1.875rem] md:leading-[2.25rem] font-light px-3">{title}</h1>
                <p className="flex justify-between px-3">Read More <span><Image src={arrow} width={20} /></span> </p>
            </div>
        </Wrapper>
    );
}
