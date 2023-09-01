import React, { useEffect } from 'react';
import { At, Lock } from '@phosphor-icons/react';
import Input from '@/components/Input';
import { useForm } from 'react-hook-form';
import Navigation from '@/components/Navigation';
import ActionBtn from '@/components/ActionBtn';
import { useGlobalCtx } from '@/context/GlobalContext';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/profilepic.jsx'),
    { ssr: false }
)

const Profile = () => {
    const { user } = useGlobalCtx();
    const { register, setValue, handleSubmit } = useForm();
    // const [img, setImg] = useState(userImg)

    useEffect(() => {
        user && setValue('email', user.email)
    }, []);

    const onsubmit = (data) => {
        console.log(data);
    }

    return (
        <div className='w-full h-screen overflow-hidden'>
            <Navigation />
            <div className='h-full overflow-y-scroll'>
                <div className='w-[560px] mx-auto font-semibold'>
                    <h1 className='text-xl mt-14'>Profile</h1>
                    <p className='text-sm text-black/70 mb-14'>You can change your profile information here.</p>
                    <h2 className='text-lg text-black/70 mb-3'>Upload your profile photo</h2>
                    {/* //profilepic here  */}
                    <DynamicComponentWithNoSSR />
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