import Image from 'next/image';
import React from 'react';
import sw from '../public/assets/figma-icon.svg'

const SWitem = ({ data, checked, handletoggle = () => { } }) => {
    return (
        <li className='flex items-center p-2'>
            <Image src={sw} alt='software logo' height={40} width={40} />
            <div className='ml-1'>
                <p className='font-medium'>{data.name}</p>
                <p className='text-black/80 font-normal'>{data.path}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer ml-auto">
                <input type="checkbox" value="" className="sr-only peer" checked={checked} onChange={(e) => handletoggle(e, data)} />
                <div></div>
                <div className="w-8 h-4 bg-yellowish peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[0.2px] after:left-[0.2px] after:bg-green after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all peer-checked:bg-green peer-checked:after:bg-white"></div>
            </label>
        </li>
    );
}

export default SWitem;
