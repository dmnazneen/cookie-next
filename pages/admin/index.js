import Sidebar from '@/components/Sidebar';
import React, { useEffect } from 'react';
import Tooltip from '@/components/Tooltip';
import { useGlobalCtx } from '@/context/GlobalContext';
import UserItem from '@/components/UserItem';

const Index = () => {
    const { users, getusers } = useGlobalCtx();
    useEffect(() => {
        getusers();
    }, [])
    return (
        <>
            <div className='max-h-screen max-w-screen flex'>
                <Sidebar />
                <div className='bg-lightash w-full'>
                    <h1 className='flex gap-2 items-center px-8 pt-10 pb-4'><span className='text-lg'>All User List</span> <Tooltip /></h1>
                    <div className='container-snap px-8 h-[80vh] overflow-y-scroll'>
                        <ul>
                            {
                                users ?
                                    users.map(m => <UserItem key={m.id} />)
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
