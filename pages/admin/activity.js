import ActivityTop from '@/components/ActivityTop';
import ActivityUser from '@/components/ActivityUser';
import Navigation from '@/components/Navigation';
import AllScreens from '@/components/allScreens';
import React from 'react';

const Activity = () => {
    return (
        <div className='h-screen overflow-hidden'>
            <Navigation />
            <div className='h-full overflow-y-scroll'>
                <div className='bg-yellowish'>
                    <ActivityTop />
                    <ActivityUser />
                </div>
                <AllScreens />
            </div>
        </div>

    );
}

export default Activity;
