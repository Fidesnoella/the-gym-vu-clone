import Image from "next/image";
import right from "../../assets/chevron-right-solid.svg"
import left from "../../assets/chevron-left-solid.svg"
import Wrapper from "../wrapper";
import AmsterdamCard from "../Cards/AmsterdamCard";


export default function Amsterdam() {


    const items = [
        {
            img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/af80e288-3224-4918-a78c-14c99e741d32/Gustaaf-Peek_Foto_Maya-Hermes_2134x1600.jpg?fm=jpg&auto=format&dpr=1",
            title: " Vrije Schrijver (Writer in Residence) "
        },
        {
            img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/c4f807f9-18b8-4d8a-ab3d-006f345289fb/DreamTeams_webbanner_1600x750_tcm289-955609.jpg?fm=jpg&auto=format&dpr=1",
            title: " VU Dream Teams"
        },
        {
            img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/9e00b0fc-d631-4c75-ae17-df91cdf62d93/Peter%20Valckx_IMG_7957_Frank_van_Harmelen_MA_AI_Verander.jpg?w=397&h=595&fit=clip&rect=2558%2C0%2C2562%2C3840&fm=jpg&auto=format&dpr=1",
            title: "Gravitation Grant recipient Frank van Harmelen"
        },
        {
            img: "https://assets.vu.nl/d8b6f1f5-816c-005b-1dc1-e363dd7ce9a5/ee314579-ae99-4e24-a166-e4275b7b26d7/MH_G3A6804_Spinozaprijs_Hero_2200x720_3.png?w=397&h=595&fit=clip&rect=673%2C125%2C397%2C595&fm=jpg&auto=format&dpr=1",
            title: "NWO Spinoza Prize winner Yvette van Kooyk"
        },
    ];
    return (
        <Wrapper>
            <div className="bg-white flex flex-col px-4">
                <h1 className="px-5 xl:px-[8.25rem] font-light text-[1.875rem] md:text-[2.375rem] text-[#cc4100] leading-[2.25rem] md:leading-[3.5rem] py-10">We are VU Amsterdam</h1>
                <div className="flex gap-12 bg-white overflow-x-scroll scroll-hidden">
                    {
                        items.map((item, i) => {
                            return (
                                <AmsterdamCard img={item.img}
                                    title={item.title} key={i} />
                            )
                        })
                    }
                </div>
                <div className="self-end gap-8 bg-[#fcd3b6] py-3 my-8 px-6 flex cursor-pointer w-32">
                    <Image src={left} width={18} />
                    <Image src={right} width={18} />
                </div>
            </div>
        </Wrapper >
    );
}

