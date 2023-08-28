import { Circle } from '@phosphor-icons/react';
import Image from 'next/image';
import React from 'react';

const SSdiv = ({ time, item }) => {
    return (
        <div>
            <p className='flex gap-2 items-center mb-4'>
                <span className='text-green/80'><Circle size={18} weight='fill' /></span>
                <span className='text-black/90 font-semibold text-sm'>{time}</span>
            </p>
            <div className='flex gap-2 mb-4'>
                {
                    item.map(m => <Image key={m.id} src={`https://localhost:9998/api/${m.image}`} alt={'screenshot of the user desktop'} width={200} height={150} unoptimized={true} className='rounded-sm' />)
                }
            </div>
        </div>
    );
}

export default SSdiv;
