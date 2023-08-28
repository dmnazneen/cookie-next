import Input from '@/components/Input';
import NavLogo from '@/components/NavLogo';
import WindowBtn from '@/components/windowBtn';
import React from 'react';
import { useForm } from 'react-hook-form';
import { At, Lock } from '@phosphor-icons/react';
import { useRouter } from 'next/router';
import { useGlobalCtx } from '@/context/GlobalContext';
import ActionBtn from '@/components/ActionBtn';
import Link from 'next/link';

const Login = () => {
    const router = useRouter();
    const { login } = useGlobalCtx();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
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
                if (data.id) {
                    login(data);
                    if (data.role === 'admin') {
                        router.push('/admin')
                    } else if (data.role === 'user') router.push('/userhome')
                    else console.log('wrong infromation')
                }
            })
    }
    return (
        <div className='mx-auto mt-[100px] w-[500px] bg-white drop-shadow-lg rounded-md overflow-hidden'>
            <nav className='bg-black flex pl-3 justify-between items-center py-1'>
                <NavLogo />
                <WindowBtn />
            </nav>
            <div className='px-10'>
                <h1 className='text-center font-medium text-xl py-12'>Welcome to Cookie</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name='userName' type='text' label='Username' register={() => register('userName', { required: true })} icon={<At size={18} />} />
                    <br />
                    <br />
                    <Input name='password' type='password' label='Password' register={() => register('password', { required: true })} icon={<Lock size={18} />} />
                    <br />
                    <br />
                    <section className='flex justify-between items-center'>
                        <Link href={'/'} className='text-green underline underline-offset-2'>Forget Password? </Link>
                        <ActionBtn text='Login' />
                    </section>
                </form>
                <p className='text-center pt-16 pb-8 text-black/60'>Don’t have Cookie Account? <Link href={'/signup'} className='text-green underline underline-offset-2'>Create an Account</Link></p>
            </div>
        </div>
    );
}

export default Login;
