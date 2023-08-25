import { Copy, X, Minus } from '@phosphor-icons/react';
import React from 'react';

const WindowBtn = () => {
    return (
        <ul className='text-lightash flex items-center'>
            <li className='py-1 px-2 hover:bg-white/20'><button onClick={() => console.log('hit')}><Minus size={20} /></button></li>
            <li className='py-1 px-2 hover:bg-white/20'><button onClick={() => console.log('hit')}><Copy size={20} /></button></li>
            <li className='py-1 px-2 hover:bg-white/20'><button onClick={() => console.log('hit')}><X size={20} /></button></li>
        </ul>
    );
}

export default WindowBtn;
