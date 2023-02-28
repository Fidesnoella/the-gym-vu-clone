import Wrapper from "../wrapper";
import CoronaCard from "../Cards/CoronaCard";

export default function CampusTour() {
    return (
        <Wrapper>
            <div className="py-10 px-5 xl:px-[8.25rem] font-light shadow-4xl">
                <h1 className="text-[#008053] text-[1.875rem] md:text-[2.375rem] py-4 font-light">Take A Look</h1>
                <div className="max-w-xs">
                    <CoronaCard title={"VU Campus Tour"} color="text-[#008053]" style={"py-16"} />
                </div>
            </div>
        </Wrapper>
    );
}
