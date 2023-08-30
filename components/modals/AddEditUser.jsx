import React, { useEffect, useRef, useState } from 'react';
import { CaretDown, Upload } from '@phosphor-icons/react';
import Input from '../Input';
import ActionBtn from '../ActionBtn';
import { useForm } from 'react-hook-form';
import Popup from '../Popup';
import SWitem from '../SWitem';
import { useGlobalCtx } from '@/context/GlobalContext';

const AddEditUser = ({ item }) => {
    const { allapps, setupdate, close } = useGlobalCtx();
    const { register, setValue, handleSubmit } = useForm();
    const listref = useRef();
    const [applist, setApplist] = useState([]);

    const onsubmit = (data) => {
        let formData = new FormData();
        delete data.avatar;
        delete data.id;
        delete data.role;
        data.app = applist.map(m => m.id);
        if (item) {
            delete data.password;
            formData.append('data', JSON.stringify(data));
            // edit user 
            fetch(`${process.env.BASE_URL}/user/${item.id}`, {
                method: 'PATCH',
                credentials: 'include',
                body: formData
            }).then(res => res.json())
                .then(data => {
                    setupdate(prev => !prev);
                    close('adduser')
                })
                .catch(err => console.log(err))
        } else {
            formData.append('data', JSON.stringify(data));
            // add user 
            fetch(`${process.env.BASE_URL}/user/register`, {
                method: 'POST',
                credentials: 'include',
                body: formData
            }).then(res => res.json())
                .then(data => {
                    if (data.id) {
                        setupdate(prev => !prev);
                        close('adduser')
                    }
                    console.log(data)
                })
                .catch(err => console.log(err))
        }
    }

    const handletoggle = (e, item) => {
        if (e.target.checked) {
            if (!(applist.filter(m => m.id == item.id).length !== 0)) setApplist((prev) => ([...prev, item]));
        } else {
            setApplist(applist.filter(m => m.id !== item.id))
        }
    }

    useEffect(() => {
        if (item) {
            Object.keys(item).forEach(k => setValue(k, item[k]));
            setApplist(item.app)
        }
    }, []);

    return (
        <form onSubmit={handleSubmit(onsubmit)} className='w-[480px] drop-shadow-lg p-6 bg-white rounded-md'>
            <h1 className='mb-8 border-b border-black/10'>Add new user</h1>
            <input type="file" id='userimg' hidden />
            <label htmlFor='userimg' className='flex items-center border border-black/10 px-6 py-3 rounded-full mb-4 cursor-pointer'>
                <Upload size={20} className='mr-2' />
                <span className=' pointer-events-none'>Upload image. (JPG, PNG)</span>
                <span className='ml-auto bg-yellowish py-1 px-3 rounded-full pointer-events-none'>Choose File</span>
            </label>
            <Input name={'name'} label={'Name'} type={'text'} register={() => register('name', { required: true })} />
            <br />
            <br />
            <Input name={'userName'} label={'Username'} type={'text'} register={() => register('userName', { required: true })} />
            <br />
            <br />
            <Input name={'email'} label={'Email Address'} type={'email'} register={() => register('email', { required: true })} />
            <br />
            <br />
            <Input name={'password'} label={'Password'} type={'password'} register={() => register('password', { required: true })} />
            <br />
            <br />
            <div className='relative'>
                <Input name={'permission'} label={'Software Permission'} type={'text'} readOnly onFocus={() => listref.current.classList.remove('hidden')} value={applist.map(k => k.name).join(', ')} />
                <span className='absolute right-8 top-4'><CaretDown size={20} /></span>
                <Popup modalRef={listref}>
                    <ul className='absolute rounded-sm left-3 h-36 overflow-y-scroll bg-white drop-shadow-lg w-4/5 top-12'>
                        {
                            allapps && allapps.map(k => <SWitem key={k.id} data={k} checked={applist.filter(m => m.id === k.id).length !== 0} handletoggle={handletoggle} />)
                        }
                    </ul>
                </Popup>
            </div>
            <br />
            <br />
            <div className='text-right'>
                <ActionBtn text='Add New' />
            </div>
        </form>
    );
}

export default AddEditUser;
