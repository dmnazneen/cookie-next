import React, { useRef } from 'react';
import Popup from './Popup';
import Image from 'next/image';
import user from '../public/assets/user.jpg'
import Link from 'next/link';

const HeaderUser = () => {
    const userref = useRef();
    return (
        <div className='relative'>
            <Image src={user} alt='current user' height={30} width={30} className='rounded-full mr-8 cursor-pointer' onClick={() => userref.current.classList.remove('hidden')} />
            <Popup modalRef={userref}>
                <ul className='bg-white absolute bottom-[-60px] left-[-110%] px-2 py-1 w-24 text-black/60 drop-shadow-lg rounded-[2px]'>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    <li className='mt-2'>Log Out</li>
                </ul>
            </Popup>
        </div>
    );
}

export default HeaderUser;
