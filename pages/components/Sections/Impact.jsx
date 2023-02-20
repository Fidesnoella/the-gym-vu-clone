import Image from "next/image";
import Wrapper from "../wrapper";
import david from "../../assets/david.jpeg"

export default function Impact() {
    return (
        <Wrapper>
            <div className="bg-[#faf7f5] py-20">
                <h1 className="px-24 text-[2.375rem] py-3">Impact</h1>
                <div className="w-full"> <Image src={david} className="w-full h-[500px]" /></div>
            </div>
        </Wrapper>
    );
}
