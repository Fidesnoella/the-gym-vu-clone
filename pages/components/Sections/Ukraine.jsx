import Wrapper from "../wrapper";
import CoronaCard from "../Cards/CoronaCard";

export default function Ukraine() {
    return (
        <Wrapper>
            <div className="grid md:grid-cols-2 gap-3 px-3 md:px-24 py-16 bg-white">
                <CoronaCard title={"Ukraine"} text={"Information and Support"} color={"text-[#008053]"} />
                <CoronaCard title={"VU & Corona"} color="text-[#3b2171]" />
            </div>
        </Wrapper>
    );
}
