import Wrapper from "../wrapper";
import AmsterdamCard from "../Cards/AmsterdamCard";

export default function Amsterdam() {
    return (
        <Wrapper>
            <div className="bg-white p-2 md:p-16">
                <h1 className="px-3 md:px-24 font-light text-[1.875rem] md:text-[2.375rem] text-[#cc4100] leading-[2.25rem] md:leading-[3.5rem] py-5">We are VU Amsterdam</h1>
                <div className="flex gap-3 overflow-x-auto">
                    {
                        [1, 2, 3, 4].map((item, i) => {
                            return (
                                <AmsterdamCard img={"https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1"}
                                    title={" Vrije Schrijver (Writer in Residence) "} />
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    );
}

