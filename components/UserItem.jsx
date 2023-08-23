import Image from 'next/image';
import React from 'react';
import user from '@/public/assets/user.jpg'
import ProgLogoSmall from './ProgLogoSmall';
import { CaretDown, Drop } from '@phosphor-icons/react';

const UserItem = () => {
    return (
        <li className='flex items-center bg-white mb-3 py-2 px-4 rounded-md hover:bg-yellowish min-w-[560px]'>
            <Image src={user} alt='default user' width={60} height={'auto'} className='rounded-full' />
            <section className='ml-2 mr-16'>
                <h1 className='text-lg text-black'>Jane Cooper</h1>
                <p className='text-xs text-black/70 font-semibold'>mail@gcom.mail</p>
            </section>
            <ul className='flex gap-3 mr-1'>
                {[1, 2, 3].map(k => <ProgLogoSmall key={k} />)}
            </ul>
            <div className='ml-auto relative text-sm text-black/70 font-semibold'>
                <button className='peer bg-white flex items-center gap-2 rounded-[5px] border-2 border-ash py-2 px-3 focus:bg-green focus:text-white focus:border-0'>Action <span><CaretDown /></span></button>
                <ul className='absolute rounded bg-white w-24 z-10 shadow-lg shadow-black/20 hidden peer-focus:block'>
                    <li className='px-2 pt-2 cursor-pointer' onClick={() => { console.log('hit') }}>Activity</li>
                    <li className='px-2 pt-2 cursor-pointer' onClick={() => { console.log('hit') }}>Edit</li>
                    <li className='px-2 pt-2 pb-2 cursor-pointer' onClick={() => { console.log('hit') }}>Delete</li>
                </ul>
            </div>
        </li>
    );
}

export default UserItem;
