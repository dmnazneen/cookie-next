import React, { useRef } from 'react';
import { CaretDown, Upload } from '@phosphor-icons/react';
import Input from '../Input';
import ActionBtn from '../ActionBtn';
import { useForm } from 'react-hook-form';
import Popup from '../Popup';
import SWitem from '../SWitem';

const AddEditUser = () => {
    const { register, handleSubmit } = useForm();
    const listref = useRef();
    return (
        <div className='w-[480px] drop-shadow-lg p-6 bg-white rounded-md'>
            <h1 className='mb-8 border-b border-black/10'>Add new user</h1>
            <div className='flex items-center border border-black/10 px-6 py-3 rounded-full mb-4'>
                <Upload size={20} className='mr-2' />
                <span>Upload image. (JPG, PNG)</span>
                <span className='ml-auto bg-yellowish py-1 px-3 rounded-full'>Choose File</span>
            </div>
            <Input name={'name'} label={'Name'} type={'text'} register={() => register('name')} />
            <br />
            <br />
            <Input name={'userName'} label={'Username'} type={'text'} register={() => register('userName')} />
            <br />
            <br />
            <Input name={'email'} label={'Email Address'} type={'email'} register={() => register('email')} />
            <br />
            <br />
            <Input name={'password'} label={'Password'} type={'password'} register={() => register('password')} />
            <br />
            <br />
            <div className='relative'>
                <Input name={'permission'} label={'Software Permission'} type={'text'} readOnly onFocus={() => listref.current.classList.remove('hidden')} />
                <span className='absolute right-8 top-4'><CaretDown size={20} /></span>
                <Popup modalRef={listref}>
                    <ul className='absolute rounded-sm left-3 h-36 overflow-y-scroll bg-white drop-shadow-lg w-4/5 top-12'>
                        <SWitem />
                        <SWitem />
                        <SWitem />
                        <SWitem />
                    </ul>
                </Popup>
            </div>
            <br />
            <br />
            <div className='text-right'>
                <ActionBtn text='Add New' />
            </div>
        </div>
    );
}

export default AddEditUser;
