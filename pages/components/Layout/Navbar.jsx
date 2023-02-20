import Image from "next/image";
import Wrapper from "../wrapper";
import Logo from "../../assets/VU-logo-nobg.svg"
import user from "../../assets/user.svg"
import search from "../../assets/magnifying.svg"
import Menu from "../../assets/bars.svg"

export default function Navbar() {
    return (
        <Wrapper>
            <div className="bg-white flex justify-between shadow-lg">
                <div className="p-4"><Image src={Logo} /></div>
                <div className="bg-[#f2efed]  p-4 flex gap-6 justify-center items-center">
                    <span className="text-2xl">NL</span>
                    <span><Image src={user} width={20} /></span>
                    <span><Image src={search} width={20} /></span>
                    <span><Image src={Menu} width={20} /></span>
                </div>
            </div>
        </Wrapper>
    );
}
