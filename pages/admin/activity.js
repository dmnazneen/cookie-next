import ActivityTop from '@/components/ActivityTop';
import ActivityUser from '@/components/ActivityUser';
import AllScreens from '@/components/allScreens';
import React from 'react';

const Activity = () => {
    return (
        <>
            <div className='bg-yellowish'>
                <ActivityTop />
                <ActivityUser />
            </div>
            <AllScreens />
        </>

    );
}

export default Activity;
