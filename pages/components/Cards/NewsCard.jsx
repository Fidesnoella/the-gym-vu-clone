import Image from "next/image";
import arrow from "../../assets/arrow.svg"

export default function NewsCard({ img, date, text, style, size }) {
    return (
        <div className="flex gap-3">
            <div>
                <img src={img} className={`${style}`} />
            </div>
            <div className="flex flex-col gap-4 relative">
                <div className='flex flex-col gap-2'>
                    <h1 className="text-[#3b2171] text-base md:text-lg">{date}</h1>
                    <p className={`font-light text-[#333333] ${size}`}>{text}</p>
                </div>
                <div className='absolute right-2 bottom-1'>
                    <Image src={arrow} width={15} />
                </div>
            </div>
        </div>
    );
}

