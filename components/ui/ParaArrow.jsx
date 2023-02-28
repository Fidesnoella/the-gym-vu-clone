import Image from "next/image";
import arrow from "../../public/assets/arrow.svg"

export default function ParaArrow({ para, style }) {
    return (
        <div className={`flex justify-between px-3 ${style}`}>
            <p className="text-lg text-[#333333] leading-[1.875rem]">{para}</p>
            <Image src={arrow} width={20} />
        </div>
    );
}

