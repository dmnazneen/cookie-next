import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import SSdiv from './SSdiv';

const AllScreens = () => {
    const [screens, setScreens] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${process.env.BASE_URL}/activities`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setScreens(data);
            })
            .catch(err => console.log(err))
    }, [])
    let allscreens = null;
    if (screens) {
        const time = new Date('2023-07-25').getTime();
        let data = screens.filter(item => item.user === '64b7c6b2c2c4ab2c7145ef90').filter((item => {
            const sstaken = new Date(item.createdAt).getTime();
            if (sstaken > time && sstaken < (time + 86400000)) return true;
        }))
        allscreens = data.reduce((container, current) => {
            const hour = new Date(current.createdAt).toLocaleTimeString("BD", { hour12: true, hour: "2-digit" });
            const next = new Date(new Date(current.createdAt).getTime() + 3600000).toLocaleTimeString("BD", { hour12: true, hour: "2-digit" }); //3600000=1 hour
            const key = `${hour.replace(' ', ':00 ')} - ${next.replace(' ', ':00 ')}`;
            container[key] = [...container[key] || [], current];
            return container;
        }, {});
        // console.log(allscreens);
    }
    return (
        <div className='py-10 px-8'>
            {
                allscreens ?
                    Object.keys(allscreens).map((row, index) => <SSdiv key={index} time={row} item={allscreens[row]} />)
                    : 'no data to show'
            }
        </div>
    );
}

export default AllScreens;