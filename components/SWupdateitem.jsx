import Image from 'next/image';
import React, { useState } from 'react';
import sw from '../public/assets/figma-icon.svg'
import Spinner from './Spinner';
import { useGlobalCtx } from '@/context/GlobalContext';

const SWitem = ({ data, checked, personapps, setpersonapps }) => {
    const { person, setPerson } = useGlobalCtx();

    const updateUserSW = (e, appitem) => {
        console.log(e.target, appitem)
        let userClone;
        userClone = { ...person }
        const id = userClone.id;
        delete userClone.id;
        delete userClone.role;
        const editApps = personapps;

        let newapplist;
        if (e.target.checked) {
            newapplist = [...editApps, appitem]
            setpersonapps(newapplist);
        } else {
            newapplist = editApps.filter(k => k.id !== appitem.id)
            setpersonapps(newapplist);
        }
        // console.log(newapplist)
        // console.log(userClone)

        // const formData = new FormData();
        // formData.append('data', JSON.stringify({ ...userClone }));

        // fetch(`${process.env.BASE_URL}/user/${id}`, {
        //     method: 'PATCH',
        //     credentials: 'include',
        //     body: formData
        // }).then(res => res.json())
        //     .then(data => {
        //         setPerson(data);
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
        //     .finally((data) => {
        //         console.log(data)
        //         setSpinner(false)
        //     })
    }
    return (
        <li className='flex items-center p-2'>
            <Image src={sw} alt='software logo' height={40} width={40} />
            <div className='ml-1'>
                <p className='font-medium'>{data.name}</p>
                <p className='text-black/80 font-normal'>{data.path}</p>
            </div>
            {
                spinner ?
                    <Spinner />
                    :
                    <label className="relative inline-flex items-center cursor-pointer ml-auto">
                        <input type="checkbox" value="" className="sr-only peer" checked={checked} onChange={(e) => updateUserSW(e, data)} />
                        <div></div>
                        <div className="w-8 h-4 bg-yellowish peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[0.2px] after:left-[0.2px] after:bg-green after:border after:rounded-full after:h-[16px] after:w-[16px] after:transition-all peer-checked:bg-green peer-checked:after:bg-white"></div>
                    </label>
            }
        </li>
    );
}

export default SWitem;
