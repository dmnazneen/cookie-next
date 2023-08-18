import NavLogo from '@/components/NavLogo';
import WindowBtn from '@/components/windowBtn';
import React from 'react';

const Login = () => {
    return (
        <div className='mx-auto w-2/3'>
            <nav className='bg-black flex pl-3 justify-between items-center py-1'>
                <NavLogo />
                <WindowBtn />
            </nav>
            <div>

            </div>
        </div>
    );
}

export default Login;
