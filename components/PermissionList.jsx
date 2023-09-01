import React from 'react';
import SWupdateitem from './SWupdateitem';
import { useGlobalCtx } from '@/context/GlobalContext';

const PermissionList = ({ personapps, setpersonapps }) => {
    const { allapps, person } = useGlobalCtx();
    return (
        <div className='absolute top-36 left-0 bg-white flex w-[660px] h-[450px] overflow-hidden drop-shadow-md rounded-md'>
            <section className='h-full w-1/2 border-r border-black/5 px-4 py-6'>
                <h1 className='border-b border-black/5 pb-1 mb-1'>Software Permission</h1>
                <div className='container-snap h-full overflow-y-scroll'>
                    {
                        personapps && personapps.map((k) => <SWupdateitem data={k} key={k.id} personapps={personapps} checked={true} setpersonapps={setpersonapps} />)
                    }
                </div>
            </section>
            <section className='h-full w-1/2 px-4 py-6'>
                <h1 className='border-b border-black/5 pb-1 mb-1'>All Software</h1>
                <div className='container-snap h-full overflow-y-scroll'>
                    {
                        allapps && allapps.map((k) => <SWupdateitem data={k} key={k.id} setpersonapps={setpersonapps} personapps={personapps} checked={personapps && personapps.filter((m) => m.id === k.id).length !== 0} />)
                    }
                </div>
            </section>
        </div>
    );
}

export default PermissionList;
