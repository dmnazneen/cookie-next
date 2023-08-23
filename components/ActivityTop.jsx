import React from 'react';
import Tooltip from './Tooltip';
import Image from 'next/image';
import user from '../public/assets/user.jpg'
import { CaretDown } from '@phosphor-icons/react';
import Calender from './Calender';

const ActivityTop = () => {
    return (
        <div className='flex justify-between items-center py-10 pr-10'>
            <h1 className='flex gap-2 items-center px-8'><span className='text-xl font-semibold'>User Activity</span> <Tooltip text='You can see the user activity here' /></h1>
            <div className='flex gap-2'>
                <section className='bg-white py-2 px-4 flex items-center min-w-52 rounded-[4px] cursor-pointer'>
                    <Image src={user} alt=' default user' height={25} width={25} className='rounded-full' />
                    <p className='px-2 mr-7 text-sm font-semibold text-black/90 pointer-events-none'>Jacob Jonas</p>
                    <CaretDown size={22} className='text-black/60 ml-auto' />
                </section>
                <Calender />
            </div>
        </div>
    );
}

export default ActivityTop;
