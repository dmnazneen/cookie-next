import React from 'react';
import { Info } from '@phosphor-icons/react';

const Tooltip = ({ text = 'You can view user list and action' }) => {
    return (
        <div className="group relative inline-block">
            <Info size={27} className='text-black/20' />
            <span
                className="absolute hidden drop-shadow-xl group-hover:flex -top-2 -right-3 translate-x-full w-36 h-11 px-2 py-1 bg-white rounded-lg text-black/70 text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-[6px] before:border-y-transparent before:border-l-transparent before:border-r-white">
                {text}
            </span>
        </div>
    );
}

export default Tooltip;
