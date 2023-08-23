import { ArrowLeft, ArrowRight, Calendar } from '@phosphor-icons/react';
import React from 'react';

const Calender = () => {
    return (
        <div className='flex gap-2'>
            <button className='bg-white p-2 rounded-[4px]'>
                <ArrowLeft size={25} className='text-black/60 bg-white' />
            </button>
            <div className='flex items-center bg-white px-4 py-2 rounded-[4px] cursor-pointer'>
                <Calendar size={25} className='text-green' />
                <span className='text-black/50 text-sm font-semibold ml-2 pointer-events-none'>Wed, May 17, 2023</span>
            </div>
            <button className='bg-white p-2 rounded-[4px]'>
                <ArrowRight size={25} className='text-black/60 bg-white' />
            </button>
        </div>
    );
}

export default Calender;
