import Input from '@/components/Input';
import NavLogo from '@/components/NavLogo';
import WindowBtn from '@/components/windowBtn';
import React from 'react';
import { useForm } from 'react-hook-form';
import { At, Lock } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useGlobalCtx } from '@/context/GlobalContext';

const Login = () => {
    const router = useRouter();
    const { login } = useGlobalCtx();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        // console.log(data)
        fetch(`${process.env.BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.role === 'admin') {
                    router.push('/admin')
                } else if (data.role === 'user') router.push('/userhome')
                else console.log('wrong infromation')
            })
    }
    return (
        <div className='mx-auto w-3/5'>
            <nav className='bg-black flex pl-3 justify-between items-center py-1'>
                <NavLogo />
                <WindowBtn />
            </nav>
            <div>
                <h1 className='text-center font-semibold text-2xl py-6'>Welcome to Cookie</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name='userName' type='text' label='Username' register={() => register('userName', { required: true })} icon={<At size={18} />} />
                    <br />
                    <br />
                    <Input name='password' type='password' label='Password' register={() => register('password', { required: true })} icon={<Lock size={18} />} />
                    <br />
                    <br />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
