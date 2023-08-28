import { useGlobalCtx } from '@/context/GlobalContext';
import React, { useEffect } from 'react';
import ProgLogo from './ProgLogo';
import Tooltip from './Tooltip';

const Sidebar = () => {
    const { allapps, getallapps } = useGlobalCtx();
    useEffect(() => {
        getallapps();
    }, []);
    return (
        <section className='min-w-[220px] z-50 bg-white'>
            <h1 className='flex gap-2 items-center px-8 pt-10 pb-4 justify-center'><span className='text-lg'>All SoftWare</span> <Tooltip text="list of all the softwares" /></h1>
            <div className='flex flex-col items-center px-8 h-[80.8vh] overflow-y-scroll container-snap'>
                {
                    allapps ?
                        allapps.map(m => <ProgLogo key={m.id} />)
                        : "loading"
                }
            </div>
        </section>
    );
}

export default Sidebar;
