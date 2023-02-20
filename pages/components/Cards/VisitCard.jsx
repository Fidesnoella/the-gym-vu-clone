import Wrapper from "../wrapper";

export default function VistCard({ title, text, color }) {
    return (
        <Wrapper>
            <div className={`px-24 py-20 ${color}`}>
                <div className="bg-[#0077b3] flex justify-between px-6 py-8 items-center">
                    <h1 className="text-white font-semibold text-2xl">{title}</h1>
                    <button className="bg-white text-[#333] p-4 font-semibold text-2xl">{text}</button>
                </div>
            </div>
        </Wrapper>
    );
}

