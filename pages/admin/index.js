import Sidebar from '@/components/Sidebar';
import React, { useEffect } from 'react';
import Tooltip from '@/components/Tooltip';
import { useGlobalCtx } from '@/context/GlobalContext';
import UserItem from '@/components/UserItem';
import Navigation from '@/components/Navigation';

const Index = () => {
    const { users, getusers } = useGlobalCtx();

    useEffect(() => {
        getusers();
    }, [])
    return (
        <>
            <Navigation />
            <div className='max-h-screen max-w-screen flex items-start'>
                <Sidebar />
                <div className='bg-lightash w-full h-full overflow-hidden'>
                    <h1 className='flex gap-2 items-center px-8 pt-10 pb-4'><span className='text-lg'>All User List</span> <Tooltip /></h1>
                    <div className='container-snap px-8 h-[80.5vh] overflow-y-scroll'>
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