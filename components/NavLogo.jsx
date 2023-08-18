import Image from 'next/image';
import React from 'react';
import logo from '../public/assets/logo.svg';

const NavLogo = () => {
    return (
        <div className='flex text-white items-center font-semibold'>
            <Image src={logo} alt='company logo' height={25} width={25} className='p-[4px] rounded-full bg-green mr-2' />
            <p>Cookie</p>
        </div>
    );
}

export default NavLogo;
