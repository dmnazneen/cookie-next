import React from 'react';
import NavLogo from './NavLogo';
import WindowBtn from './windowBtn';
import HeaderUser from './HeaderUser';
import { useGlobalCtx } from '@/context/GlobalContext';
import AddEditUser from './modals/AddEditUser';
import AddSW from './modals/AddSW';
import AddBtn from './AddBtn';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navigation = () => {
    const { user, open } = useGlobalCtx();
    const router = useRouter();
    return (
        <div className='bg-black flex items-center py-1'>
            <div className='flex items-center'>
                <NavLogo />
                <p className='text-white/50 ml-5'>V1.0</p>
                {
                    user?.role === 'admin' &&
                    <div className='flex items-center'>
                        <ul className='flex gap-3 ml-12 mr-3 text-white/50'>
                            <li><Link href={'/admin'} className={router.pathname === '/admin' ? 'text-white' : ''}>Home</Link></li>
                            <li className={router.pathname === '/admin/activity' ? 'text-white' : ''}>Activity</li>
                        </ul>
                        <AddBtn text='Add New Software' onClick={() => open('addsw', <AddSW />)} />
                        <AddBtn text='Add User' onClick={() => open('adduser', <AddEditUser />)} />
                    </div>
                }
            </div>
            <div className='flex items-center ml-auto'>
                <HeaderUser />
                <WindowBtn />
            </div>
        </div>
    );
}

export default Navigation;