import Wrapper from "../wrapper";

export default function VistCard({ title, text, color }) {
    return (
        <Wrapper>
            <div className={`px-5 xl:px-[8.25rem] py-12 md:py-20 ${color}`}>
                <div className="bg-[#0077b3] flex md:flex-row flex-col gap-y-8 md:gap-y-0 justify-between p-10 items-center">
                    <h1 className="text-white font-semibold text-[1.375rem] md:text-2xl text-center">{title}</h1>
                    <button className="bg-white text-[#333] p-4 font-semibold text-2xl">{text}</button>
                </div>
            </div>
        </Wrapper>
    );
}

