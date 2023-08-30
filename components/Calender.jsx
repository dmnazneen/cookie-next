import { useGlobalCtx } from '@/context/GlobalContext';
import { ArrowLeft, ArrowRight, Calendar } from '@phosphor-icons/react';
import React from 'react';

const Calender = () => {
    const { time, setTime } = useGlobalCtx();
    const getDateString = () => {
        const today = new Date(time);
        const day = today.toString().slice(0, 3);
        const date = today.getDate();
        const month = today.toString().slice(4, 7)
        const year = today.getFullYear();
        const thedate = `${day}, ${month} ${date}, ${year}`;
        return thedate;
    }
    return (
        <div className='flex gap-2'>
            <button className='bg-white p-2 rounded-[4px]' onClick={() => setTime((prev) => (prev - 86400000))}>
                <ArrowLeft size={25} className='text-black/60 bg-white' />
            </button>
            <div className='flex items-center w-48 bg-white px-3 rounded-[4px] cursor-pointer relative'>
                <Calendar size={25} className='text-green' />
                <input type="date" id='calender' className='outline-none text-transparent text-sm' onChange={(e) => setTime((new Date(e.target.value).getTime()))} />
                <label htmlFor='calender' className='bg-white text-black/50 w-36 text-sm font-semibold ml-6 pl-1 pointer-events-none absolute'>{getDateString()}</label>
            </div>
            <button className='bg-white p-2 rounded-[4px]' onClick={() => setTime((prev) => (prev + 86400000))}>
                <ArrowRight size={25} className='text-black/60 bg-white' />
            </button>
        </div>
    );
}

export default Calender;

