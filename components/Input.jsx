import React from 'react';

const Input = ({ name, label, type, register = () => { }, icon = '', onFocus = () => { }, ...props }) => {
    const padd = icon ? '' : 'left-2 peer-focus:left-2 peer-placeholder-shown:left-[-8px]'
    const padd2 = icon ? 'px-10' : 'px-8'
    return (
        <div className='relative text-black/95 mb-2'>
            <input id={name} placeholder={name} type={type} {...register()} onFocus={onFocus} {...props} className={`peer absolute caret-green ${padd2} py-[14px] rounded-full w-full placeholder:text-transparent focus:border-green focus:outline-none border border-black/10 focus:drop-shadow-md`} />
            <label className={`absolute text-[13px] text-black/60 font-medium px-2 ml-4 top-[-10px] bg-white peer-focus:bg-white peer-focus:text-black/60 peer-focus:text-[13px] peer-focus:top-[-10px] peer-focus:px-2 peer-focus:ml-4 peer-placeholder-shown:ml-8 peer-placeholder-shown:top-4 pointer-events-none peer-placeholder-shown:text-[14px] ${padd}`} htmlFor="label">{label}</label>
            <span className='absolute ml-4 top-[19px] text-black/40'>{icon}</span>
            <br />
        </div>
    );
}

export default Input;