import React from 'react';
import SWitem from './SWitem';
import { useGlobalCtx } from '@/context/GlobalContext';

const PermissionList = () => {
    const { allapps, person } = useGlobalCtx();
    return (
        <div className='absolute top-20 -left-80 bg-white flex w-[660px] h-[450px] overflow-hidden drop-shadow-md rounded-md'>
            <section className='h-full w-1/2 border-r border-black/5 px-4 py-6'>
                <h1 className='border-b border-black/5 pb-1 mb-1'>Software Permission</h1>
                <div className='container-snap h-full overflow-y-scroll'>
                    {
                        // console.log(person)
                        person && person.app.map((k) => <SWitem data={k} key={k.id} />)
                    }
                </div>
            </section>
            <section className='h-full w-1/2 px-4 py-6'>
                <h1 className='border-b border-black/5 pb-1 mb-1'>All Software</h1>
                <div className='container-snap h-full overflow-y-scroll'>
                    {
                        allapps && allapps.map((k) => <SWitem data={k} key={k.id} />)
                    }
                </div>
            </section>
        </div>
    );
}

export default PermissionList;
