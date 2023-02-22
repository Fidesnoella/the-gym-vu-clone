import Image from 'next/image';
import React from 'react';
import arrow from "../../public/assets/arrow.svg"

export default function CoronaCard({ title, text, color, style }) {
    return (
        <div className={`bg-white p-8 shadow-3xl flex flex-col py-10 gap-8 cursor-pointer relative ${style}`}>
            <div className='flex flex-col gap-4'>
                <h1 className={`text-2xl leading-9 font-light ${color}`}>{title}</h1>
                <p className='text-lg leading-[1.875rem]'>{text}</p>
            </div>
            <div className='bottom-8 absolute right-5'>
                <Image src={arrow} width={20} />
            </div>
        </div>
    );
}
