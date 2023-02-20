import Image from "next/image";
import Wrapper from "../wrapper";
import arrow from "../../assets/arrow.svg"

export default function AmsterdamCard({ img, title }) {
    return (
        <Wrapper>
            <div className="hover:shadow-3xl flex flex-col gap-3 bg-white cursor-pointer">
                <img src={img} className="w-60 object-contain" />
                <h1 className="text-[#cc4100] text-xl md:text-2xl leading-[1.875rem] md:leading-[2.25rem] font-light px-3">{title}</h1>
                <p className="flex justify-between px-3">Read More <span><Image src={arrow} width={20} /></span> </p>
            </div>
        </Wrapper>
    );
}
