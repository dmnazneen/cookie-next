import React from 'react';
import Image from 'next/image';
import prog from '../public/assets/figma-icon.svg'

const ProgLogo = ({ item }) => {
    return (
        <div className='flex flex-col w-32 py-4 bg-white/70 rounded-2xl items-center border-[1.8px] border-black/10 mb-3' title='program'>
            <Image height={60} width={60} src={prog} alt='program logo' className='my-2' />
            <p className=' text-sm pointer-events-none'>{item.name}</p>
        </div>
    );
}

export default ProgLogo;
