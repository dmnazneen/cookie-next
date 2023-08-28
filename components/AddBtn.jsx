import { Plus } from '@phosphor-icons/react';
import React from 'react';

const AddBtn = ({ text = 'Add User', onClick = () => { } }) => {
    return (
        <button className='text-white bg-white/40 flex gap-2 py-1 px-2 rounded mr-3' onClick={onClick}>
            <Plus size={18} />
            <span>{text}</span>
        </button>
    );
}

export default AddBtn;
