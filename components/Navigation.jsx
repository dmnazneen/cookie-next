import React from 'react';
import NavLogo from './NavLogo';
import WindowBtn from './windowBtn';
import HeaderUser from './HeaderUser';

const Navigation = () => {
    return (
        <div className='bg-black flex items-center'>
            <div className='flex items-center'>
                <NavLogo />
                <p className='text-white/50 ml-5'>V1.0</p>
                <ul>
                    <li>Home</li>
                    <li>Activity</li>
                </ul>
            </div>
            <div className='flex items-center ml-auto'>
                <HeaderUser />
                <WindowBtn />
            </div>
        </div>
    );
}

export default Navigation;