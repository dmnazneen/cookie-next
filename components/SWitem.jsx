import Image from 'next/image';
import React from 'react';
import sw from '../public/assets/figma-icon.svg'

const SWitem = () => {
    return (
        <li className='flex items-center p-2'>
            <Image src={sw} alt='software logo' height={40} width={40} />
            <div className='ml-1'>
                <p className='font-medium'>Figma</p>
                <p className='text-black/80 font-normal'>C:\Program Files\Adobe</p>
            </div>
            <label class="relative inline-flex items-center cursor-pointer ml-auto">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="w-8 h-4 bg-yellowish peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[0.2px] after:left-[-0.2px] after:bg-green after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all peer-checked:bg-green peer-checked:after:bg-white"></div>
            </label>
        </li>
    );
}

export default SWitem;
