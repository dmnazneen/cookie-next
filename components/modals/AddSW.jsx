import React from 'react';
import Input from '../Input';
import { useForm } from 'react-hook-form';
import { Upload } from '@phosphor-icons/react';
import ActionBtn from '../ActionBtn';

const AddSW = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div className='w-[480px] border border-black p-6 bg-white'>
            <h1 className='mb-8 border-b border-black/10'>Add new Software</h1>
            <Input name={'name'} label={'Software Name'} type={'text'} register={() => register('name')} />
            <br />
            <br />
            <Input name={'path'} label={'Software Path'} type={'text'} register={() => register('path')} />
            <br />
            <br />
            <div className='flex items-center border border-black/10 px-6 py-3 rounded-full mb-4'>
                <Upload size={20} className='mr-2' />
                <span>Upload logo. (JPG, PNG)</span>
                <span className='ml-auto bg-yellowish py-1 px-3 rounded-full'>Choose File</span>
            </div>
            <div className='text-right'>
                <ActionBtn text='Add New' />
            </div>
        </div>
    );
}

export default AddSW;
