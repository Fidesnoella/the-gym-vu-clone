import Image from 'next/image';
import React from 'react';
import arrow from "../../assets/arrow.svg"

export default function CoronaCard({ title, text, color }) {
    return (
        <div className='bg-white p-8 shadow-3xl flex flex-col gap-4'>
            <div className='flex flex-col gap-3'>
                <h1 className={`text-2xl ${color}`}>{title}</h1>
                <p>{text}</p>
            </div>
            <div className='self-end'>
                <Image src={arrow} width={20} />
            </div>
        </div>
    );
}
