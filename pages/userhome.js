import Navigation from '@/components/Navigation';
import ProgLogo from '@/components/ProgLogo';
import { useGlobalCtx } from '@/context/GlobalContext';
import { MagnifyingGlass } from '@phosphor-icons/react';
import React from 'react';

const Userhome = () => {
    const { user } = useGlobalCtx();
    return (
        <div className='h-screen overflow-y-hidden'>
            <Navigation />
            <div className='h-full overflow-y-scroll'>
                <section className='bg-yellowish p-10'>
                    <h1 className='pb-10 text-lg font-medium'>Recently used</h1>
                    <ul className='flex gap-5 flex-wrap'>
                        {
                            user && user.app.map(m => <ProgLogo key={m} />)
                        }
                    </ul>
                </section>
                <section className='flex items-baseline p-10 pt-14'>
                    <h1 className='w-[170px] text-lg font-medium'>All Software</h1>
                    <div className='w-full relative'>
                        <input type='text' placeholder='All Software' className='border border-black/20 w-full pl-12 py-3 rounded-full' />
                        <span className='absolute top-[13px] left-5 text-black/70'><MagnifyingGlass size={20} weight="bold" /></span>
                    </div>
                </section>
                <div className='px-10 pb-20'>
                    <ul className='flex gap-5 flex-wrap'>
                        {
                            user && user.app.map(m => <ProgLogo key={m} />)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Userhome;
