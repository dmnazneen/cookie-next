import { Plus } from '@phosphor-icons/react';
import React from 'react';

const AddBtn = ({ text = 'Add User', onClick = () => { }, clr = 'text-white' }) => {
    return (
        <button className={`${clr} bg-white/40 flex gap-2 py-1 px-2 rounded mr-3`} onClick={onClick}>
            <Plus size={18} />
            <span>{text}</span>
        </button>
    );
}

export default AddBtn;
