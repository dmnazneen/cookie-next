import React from 'react';
import Image from 'next/image';
import userImg from '../public/assets/user.jpg'

const Profilepic = () => {
    const preview = () => {
        const profilepic = document.getElementById('profilepic').files[0];
        const userpic = document.getElementById('userpic');

        const blob = new Blob([profilepic], { type: 'image/png' })
        console.log(blob)
        const img = URL.createObjectURL(blob);
        userpic.src = img;
        console.log(img)
    }
    return (
        <div className='flex gap-4 items-center'>
            <Image id='userpic' priority={false} src={userImg} alt='picture of the current user' height={100} width={100} className='rounded-full' />
            <div>
                <div>
                    <label className='bg-green px-4 py-3 rounded-full text-white' htmlFor='profilepic'>Change photo</label>
                    <input type='file' id='profilepic' hidden onChange={() => preview()} />
                </div>
                <p className='relative top-4 text-sm text-black/70'>/this is my profile pic.png</p>
            </div>
        </div>
    );
}

export default Profilepic;
