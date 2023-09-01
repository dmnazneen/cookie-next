import React, { useRef } from 'react';
import Tooltip from './Tooltip';
import Image from 'next/image';
import user from '../public/assets/user.jpg'
import { CaretDown } from '@phosphor-icons/react';
import Calender from './Calender';
import { useGlobalCtx } from '@/context/GlobalContext';
import Popup from './Popup';

const ActivityTop = () => {
    const { users, setPerson, person } = useGlobalCtx();
    const alluserref = useRef();

    return (
        <div className='flex justify-between items-center py-10 pr-10'>
            <h1 className='flex gap-2 items-center px-8'><span className='text-xl font-medium'>User Activity</span> <Tooltip text='You can see the user activity here' /></h1>
            <div className='flex gap-2'>
                <div className='relative'>
                    <section className='bg-white py-2 px-4 flex items-center min-w-52 rounded-[4px] cursor-pointer w-52' onClick={() => alluserref.current.classList.remove('hidden')}>
                        <Image src={user} alt=' default user' height={25} width={25} className='rounded-full' />
                        <p className='px-2 mr-7 text-sm font-semibold text-black/90 pointer-events-none'>
                            {person && person.name}
                        </p>
                        <CaretDown size={22} className='text-black/60 ml-auto' />
                    </section>
                    <Popup modalRef={alluserref}>
                        <div className='absolute w-full container-snap h-60 overflow-y-scroll z-10'>
                            {
                                users && users.map(m => <UserDiv key={m.id} item={m} handlepersonchange={setPerson} />)
                            }
                        </div>
                    </Popup>
                </div>
                <Calender />
            </div>
        </div>
    );
}

export default ActivityTop;


const UserDiv = ({ item, handlepersonchange }) => {
    return (
        <div className='cursor-pointer flex gap-2 px-4 py-1 drop-shadow-xl border-b border-black/10 bg-white text-black/90' onClick={() => handlepersonchange(item)}>
            <Image src={user} alt='list user' height={25} width={25} className='rounded-full' />
            <p>{item.name}</p>
        </div>
    )
}