import Sidebar from '@/components/Sidebar';
import React, { useEffect } from 'react';
import Tooltip from '@/components/Tooltip';
import { useGlobalCtx } from '@/context/GlobalContext';
import UserItem from '@/components/UserItem';
import Navigation from '@/components/Navigation';
import AddBtn from '@/components/AddBtn';
import AddEditUser from '@/components/modals/AddEditUser';

const Index = () => {
    const { users, getusers, update, open } = useGlobalCtx();

    useEffect(() => {
        getusers();
    }, [update])
    return (
        <>
            <Navigation />
            <div className='max-h-screen max-w-screen flex items-start'>
                <Sidebar />
                <div className='bg-lightash w-full h-full overflow-hidden'>
                    <div className='flex items-center justify-between px-8 pt-10 pb-4'>
                        <h1 className='flex gap-2 items-center'><span className='text-lg'>All User List</span> <Tooltip /></h1>
                        <AddBtn clr='text-green' onClick={() => open('adduser', <AddEditUser />)} />
                    </div>
                    <div className='container-snap px-8 h-[80.5vh] overflow-y-scroll'>
                        <ul>
                            {
                                users ?
                                    users.map(m => <UserItem key={m.id} item={m} />)
                                    : 'loading'
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;