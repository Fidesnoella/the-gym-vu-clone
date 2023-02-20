import Image from "next/image";
import arrow from "../../assets/arrow.svg"

export default function ParaArrow({ para }) {
    return (
        <div className="flex justify-between px-3">
            <p className="text-lg text-[#333333] leading-[1.875rem]">{para}</p>
            <Image src={arrow} width={20} />
        </div>
    );
}

