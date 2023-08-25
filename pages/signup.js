import React from 'react';
import Input from '@/components/Input';
import WindowBtn from '@/components/windowBtn';
import NavLogo from '@/components/NavLogo';
import Link from 'next/link';
import ActionBtn from '@/components/ActionBtn';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { At, Lock } from '@phosphor-icons/react';

const Signup = () => {
    const router = useRouter();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className='mx-auto mt-5 w-[500px] bg-white drop-shadow-lg rounded-md overflow-hidden'>
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
                    <Input name='email' type='email' label='Email Address' register={() => register('email', { required: true })} icon={<Lock size={18} />} />
                    <br />
                    <br />
                    <Input name='password' type='password' label='Password' register={() => register('password', { required: true })} icon={<Lock size={18} />} />
                    <br />
                    <br />
                    <Input name='confpassword' type='password' label='Password' register={() => register('confpassword', { required: true })} icon={<Lock size={18} />} />
                    <br />
                    <br />
                    <section className='flex justify-between items-center'>
                        <Link href={'/'} className='text-green underline underline-offset-2'>Forget Password? </Link>
                        <ActionBtn text='Sign up' />
                    </section>
                </form>
                <p className='text-center pt-16 pb-8 text-black/60'>already have an account? <Link href={'/login'} className='text-green underline underline-offset-2'>Login Here </Link></p>
            </div>
        </div>
    );
}

export default Signup;
