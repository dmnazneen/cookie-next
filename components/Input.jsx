import React from 'react';

const Input = ({ name, label, type, register, icon }) => {
    return (
        <div className='relative'>
            <input id={name} placeholder={name} type={type} {...register()} className='peer absolute caret-green px-10 py-2 rounded-full w-full placeholder:text-transparent focus:outline-green border-2 border-ash' />
            <label className='absolute font-semibold px-2 ml-4 top-[-15px] bg-white peer-focus:bg-white text-sm peer-focus:text-sm peer-focus:top-[-15px] peer-focus:px-2 peer-focus:ml-4 peer-placeholder-shown:ml-10 peer-placeholder-shown:top-2 pointer-events-none peer-placeholder-shown:text-base' htmlFor="label">{label}</label>
            <span className='absolute ml-4 top-3'>{icon}</span>
            <br />
        </div>
    );
}

export default Input;