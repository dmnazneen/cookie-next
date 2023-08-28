import Image from 'next/image';
import React from 'react';
import logo from '../public/assets/logo.svg';
import Link from 'next/link';

const NavLogo = () => {
    return (
        <div className='flex text-white items-center font-semibold ml-4'>
            <Image src={logo} alt='company logo' height={25} width={25} className='p-[4px] rounded-full bg-green mr-2' />
            <Link className=' text-xl' href={'/'}>Cookie</Link>
        </div>
    );
}

export default NavLogo;
