import Image from 'next/image';
import React, { useRef } from 'react';
import user from '@/public/assets/user.jpg'
import ProgLogoSmall from './ProgLogoSmall';
import { CaretDown, Drop } from '@phosphor-icons/react';
import Popup from './Popup';
import { useGlobalCtx } from '@/context/GlobalContext';
import AddEditUser from './modals/AddEditUser';
import { useRouter } from 'next/router';

const UserItem = ({ item }) => {
    const { open, setPerson, setupdate } = useGlobalCtx();
    const actionref = useRef()
    const router = useRouter();

    const handleClick = (person) => {
        setPerson(person)
        router.push('/admin/activity')
    }

    const handleDelete = (id) => {
        fetch(`${process.env.BASE_URL}/user/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                setupdate(prev => !prev)
            })
            .catch(err => console.log(err))
    }

    return (
        <li className='flex items-center bg-white mb-3 py-2 px-4 rounded-md hover:bg-yellowish min-w-[560px]'>
            <Image src={user} alt='default user' width={60} height={'auto'} className='rounded-full' unoptimized={true} />
            <section className='ml-2 w-60'>
                <h1 className='text-lg text-black font-medium'>{item.name}</h1>
                <p className='text-xs text-black/70 font-semibold'>{item.email}</p>
            </section>
            <ul className='flex gap-3 mr-1'>
                {item.app.map(k => <ProgLogoSmall key={k.id} />)}
            </ul>
            <div className='ml-auto relative text-sm text-black/70 font-medium'>
                <button className='bg-white flex items-center gap-2 rounded-[5px] border-2 border-ash py-2 px-3 focus:bg-green focus:border-green focus:text-white' onFocus={() => actionref.current.classList.remove('hidden')}>Action <span><CaretDown /></span></button>
                <Popup modalRef={actionref}>
                    <ul ref={actionref} className='absolute rounded bg-white w-[88px] z-[2] shadow-lg shadow-black/20'>
                        <li className='px-2 pt-2 cursor-pointer' onClick={() => handleClick(item)}>Activity</li>
                        <li className='px-2 pt-2 cursor-pointer' onClick={() => open('adduser', <AddEditUser item={item} />)}>Edit</li>
                        <li className='px-2 pt-2 pb-2 cursor-pointer' onClick={() => handleDelete(item.id)}>Delete</li>
                    </ul>
                </Popup>
            </div>
        </li>
    );
}

export default UserItem;
