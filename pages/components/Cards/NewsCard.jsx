import Image from "next/image";
import arrow from "../../assets/arrow.svg"

export default function NewsCard({ date, text }) {
    return (
        <div className="flex gap-3">
            <div>
                <img src={"https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/83279044-76f1-4736-8fe6-383f0530dae1/2N3337X.jpg?w=1250&h=600&fit=clip&rect=0,1254,6720,3226"} className="w-80" />
            </div>
            <div className="flex flex-col gap-4">
                <div className='flex flex-col gap-3'>
                    <h1 className="text-[#3b2171] text-lg">{date}</h1>
                    <p className="text-2xl text-[#333333]">{text}</p>
                </div>
                <div className='self-end'>
                    <Image src={arrow} width={20} />
                </div>
            </div>
        </div>
    );
}

