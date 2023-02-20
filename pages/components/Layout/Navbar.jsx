import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Wrapper from "../wrapper";
import Logo from "../../assets/VU-logo-nobg.svg"
import user from "../../assets/user.svg"
import search from "../../assets/magnifying.svg"
import Menu from "../../assets/bars.svg"
import xmark from "../../assets/xmark-solid.svg"
import arrow from "../../assets/arrow.svg"

export default function Navbar() {
    const [show, setShow] = useState(false)
    const [scrolled, setScrolled] = useState(0)

    useEffect(() => {
        const changescrolled = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener("scroll", changescrolled);
        return () => {
            window.removeEventListener("scroll", changescrolled);
        };
    }, [scrolled]);


    useEffect(() => {
        document.body.style.overflow = show ? "hidden" : "auto";
        return () => (document.body.style.overflow = "scroll");
    }, [show]);

    const dynamic = useRouter().asPath;
    useEffect(() => setShow(false), [dynamic]);
    return (
        <>
            <div className="block md:fixed z-30 w-full">
                <div className="mx-auto max-w-full md:max-w-7xl  shadow-md">
                    <div className="bg-white flex justify-between ">
                        <Link href={"/"}>
                            <div className="p-4"><Image src={Logo} /></div>
                        </Link>
                        <div className="bg-[#f2efed] p-4 flex gap-6 justify-center items-center">
                            <span className="text-2xl">NL</span>
                            <span><Image src={user} width={20} /></span>
                            <span><Image src={search} width={20} /></span>
                            <span onClick={() => setShow(!show)}><Image src={Menu} width={20} /></span>
                        </div>
                    </div>
                </div>
            </div>
            {
                show && (
                    <Wrapper>
                        <div className='h-screen bg-white  text-black top-0 duration-300 z-[9999] fixed inset-x-0 max-w-7xl mx-auto'>
                            <div className='flex justify-between bg-white'>
                                <span />
                                <span className="bg-[#f2efed] p-4 flex self-end" onClick={() => setShow(!show)}><Image src={xmark} width={20} height={20} /></span>
                            </div>
                            <div className='pl-3 md:pl-24 pt-32'>
                                <div className='flex flex-col gap-5 text-lg text-black sm:px-4 px-[5.625rem]'>
                                    {
                                        ["Study at VU Amsterdam", "Research", "About VU Amsterdam", "VU press office", "Alumini", "Student", "Employee"].map((item, i) => {
                                            return (
                                                <Link href={item} key={i} className="grid grid-cols-2 gap-5">
                                                    <span className="max-w-xl">{item}</span>
                                                    <span><Image src={arrow} width={20} height={20} /></span>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </Wrapper>
                )
            }
        </>
    );
}
