import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Wrapper from "../wrapper";
import Logo from "../../public/assets/VU-logo-nobg.svg"
import user from "../../public/assets/user.svg"
import search from "../../public/assets/magnifying.svg"
import Menu from "../../public/assets/bars.svg"
import xmark from "../../public/assets/xmark-solid.svg"
import arrow from "../../public/assets/arrow.svg"
import plus from "../../public/assets/plus-solid.svg"

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
                <div className="mx-auto max-w-full lg:max-w-[78.25rem] shadow-4xl">
                    <div className="bg-white flex justify-between">
                        <Link href={"/"}>
                            <div className="py-4 px-[1.875rem]"><Image src={Logo} className="w-28 sm:w-44" /></div>
                        </Link>
                        <div className="bg-[#f2efed] flex gap-2 md:gap-6 justify-center items-center py-4 px-[1.875rem] cursor-pointer">
                            <span className="text-xl md:text-2xl">NL</span>
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
                        <div className='h-screen bg-white  text-black top-0 duration-300 z-[9999] fixed inset-x-0 max-w-7xl mx-auto  overflow-auto pb-10'>
                            <div className='flex justify-between bg-white'>
                                <span />
                                <span className="bg-[#f2efed] p-6 flex self-end cursor-pointer" onClick={() => setShow(!show)}><Image src={xmark} width={20} height={20} /></span>
                            </div>
                            <div className='pl-3 md:pl-24 pt-32'>
                                <div className='flex flex-col gap-10 text-lg text-black px-4'>
                                    {
                                        ["Study at VU Amsterdam", "Research", "About VU Amsterdam", "VU press office", "Alumini", "Student", "Employee"].map((item, i) => {
                                            return (
                                                <Link href={item} key={i} className="flex justify-between px-3 md:0 md:grid md:grid-cols-2 lg:grid-cols-3">
                                                    <span className="max-w-xl text-xl md:text-2xl leading-[1.875rem] font-normal">{item}</span>
                                                    <span className="lg:cols-2">
                                                        {
                                                            (i === 0 || i === 1) ? <Image src={plus} width={20} height={20} /> : <Image src={arrow} width={20} height={20} />
                                                        }

                                                    </span>
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
