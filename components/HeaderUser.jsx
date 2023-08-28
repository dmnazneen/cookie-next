import React, { useRef } from 'react';
import Popup from './Popup';
import Image from 'next/image';
import user from '../public/assets/user.jpg'
import Link from 'next/link';
import { useGlobalCtx } from '@/context/GlobalContext';
import { useRouter } from 'next/router';

const HeaderUser = () => {
    const userref = useRef();
    const { logout } = useGlobalCtx();
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/login');
    }

    return (
        <div className='relative'>
            <Image src={user} alt='current user' height={30} width={30} className='rounded-full mr-4 cursor-pointer' onClick={() => userref.current.classList.remove('hidden')} />
            <Popup modalRef={userref}>
                <ul className='bg-white absolute bottom-[-60px] left-[-150%] px-2 py-1 w-24 text-black/60 drop-shadow-lg rounded-[2px]'>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    <li className='mt-2 cursor-pointer' onClick={handleLogout}>Log Out</li>
                </ul>
            </Popup>
        </div>
    );
}

export default HeaderUser;
