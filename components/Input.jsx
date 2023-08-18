import React from 'react';
import { At } from '@phosphor-icons/react';

const Input = () => {
    return (
        <div className='bg-slate-200'>
            <input id='label' placeholder='label' className='peer absolute caret-green pl-10 py-2 rounded-full w-full placeholder:text-transparent focus:outline-green' />
            <label className='absolute px-2 ml-4 top-[-15px] bg-white peer-focus:bg-white peer-focus:top-[-15px] peer-focus:px-2 peer-focus:ml-4 peer-placeholder-shown:ml-10 peer-placeholder-shown:top-2' htmlFor="label">Username</label>
            <span className='absolute ml-4 top-3'><At size={18} /></span>
        </div>
    );
}

export default Input;