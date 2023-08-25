import React from 'react';

const ActionBtn = ({ text = 'Action' }) => {
    return (
        <button type='submit' className='bg-green text-white font-semibold py-3 px-7 rounded-full'>{text}</button>
    );
}

export default ActionBtn;
