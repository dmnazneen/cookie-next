import Image from 'next/image';
import React, { useEffect } from 'react';
import userImg from '../public/assets/user.jpg'
import { At, Lock } from '@phosphor-icons/react';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import Navigation from '@/components/Navigation';
import ActionBtn from '@/components/ActionBtn';
import { useGlobalCtx } from '@/context/GlobalContext';

const Profile = () => {
    const { user } = useGlobalCtx();
    const { register, setValue, handleSubmit } = useForm();

    useEffect(() => {
        user && setValue('email', user.email)
    }, [])
    const onsubmit = (data) => {
        console.log(data);
    }
    const preview = () => {
        // const profilepic = document.getElementById('profilepic').files[0];
        // const userpic = document.getElementById('userpic');
        // userpic.src = URL.createObjectURL(profilepic);
        // console.log(profilepic, userpic)
        console.log('hit')
    }
    return (
        <div className='w-full h-screen overflow-hidden'>
            <Navigation />
            <div className='h-full overflow-y-scroll'>
                <div className='w-[560px] mx-auto font-semibold'>
                    <h1 className='text-xl mt-14'>Profile</h1>
                    <p className='text-sm text-black/70 mb-14'>You can change your profile information here.</p>
                    <h2 className='text-lg text-black/70 mb-3'>Upload your profile photo</h2>
                    <div className='flex gap-4 items-center'>
                        <Image id='userpic' priority={true} src={userImg} alt='picture of the current user' height={100} width={100} className='rounded-full' />
                        <div>
                            <div>
                                <label className='bg-green px-4 py-3 rounded-full text-white' htmlFor='profil epic'>Change photo</label>
                                <input type='file' id='profilepic' onChange={() => preview()} />
                            </div>
                            <p className='relative top-4 text-sm text-black/70'>/this is my profile pic.png</p>
                        </div>
                    </div>
                </div>
                <form className='w-[560px] mx-auto' onSubmit={handleSubmit(onsubmit)}>
                    <div className='flex items-center gap-4 bg-black/10 my-5 rounded-full px-4 py-4 pointer-events-none'>
                        <span className='text-black/30'><At /></span>
                        <span className='font-medium text-black/80'>{user && user.name}</span>
                    </div>
                    <div className='relative leading-5'>
                        <Input name={'email'} label={'Email'} icon={<Lock />} type={'email'} register={() => register('email', { required: true })} />
                        <br />
                        <br />
                        <Input name={'currentpass'} label={'Current Password'} icon={<Lock />} type={'password'} register={() => register('password', { required: true })} />
                        <br />
                        <br />
                        <Input name={'newpass'} label={'New Password'} icon={<Lock />} type={'password'} register={() => register('newpass', { required: true })} />
                        <br />
                        <br />
                        <Input name={'confnewpass'} label={'New Password'} icon={<Lock />} type={'password'} register={() => register('confnewpass', { required: true })} />
                        <br />
                        <br />
                        <div className='text-right pb-20'>
                            <ActionBtn text='Save' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;