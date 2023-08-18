import { Copy, X, Minus } from '@phosphor-icons/react';
import React from 'react';

const WindowBtn = () => {
    return (
        <ul className='text-lightash flex relative'>
            <li className='p-1'><button onClick={() => console.log('hit')}><Minus /></button></li>
            <li className='p-1'><button onClick={() => console.log('hit')}><Copy /></button></li>
            <li className='p-1'><button onClick={() => console.log('hit')}><X /></button></li>
        </ul>
    );
}

export default WindowBtn;
