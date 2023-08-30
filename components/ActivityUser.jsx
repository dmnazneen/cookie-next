import Image from 'next/image';
import React, { useRef } from 'react';
import user from '../public/assets/user.jpg'
import ProgLogoSmall from './ProgLogoSmall';
import { Plus } from '@phosphor-icons/react';
import Popup from './Popup';
import PermissionList from './PermissionList';
import { useGlobalCtx } from '@/context/GlobalContext';

const ActivityUser = () => {
    const { person } = useGlobalCtx();
    const permissionref = useRef();
    return (
        <div className='px-10 flex'>
            <section className='font-medium min-w-[390px]'>
                <h1 className='text-lg text-black/60 border-b border-black/10 pb-3'>User Detail</h1>
                <div className='flex items-center gap-3 py-6'>
                    <Image src={user} alt='current user' height={70} width={70} className='rounded-full' />
                    <div>
                        <h2 className='text-xl'>{person && person.name}</h2>
                        <p className='text-sm text-black/60'>{person && person.email}</p>
                    </div>
                </div>
            </section>

            <section className='font-medium w-full'>
                <h1 className='text-lg text-black/60 border-b border-black/10 pb-3'>Software Permission List</h1>
                <ul className='flex gap-3 py-6'>
                    {
                        person && person.app.map(m => <ProgLogoSmall key={m.id} data={m} border='border-white' />)
                    }
                    <li>
                        <div className='relative'>
                            <button className='bg-white/70 p-3 rounded-2xl border-2 border-white text-green'><Plus size={35} onClick={() => permissionref.current.classList.remove('hidden')} /></button>
                            <Popup modalRef={permissionref}>
                                <PermissionList />
                            </Popup>
                        </div>

                    </li>
                </ul>
            </section>
        </div>
    );
}

export default ActivityUser;
