import React, { useEffect, useState } from 'react';

const AllScreens = () => {
    const [screens, setScreens] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`${process.env.BASE_URL}/activities`)
            .then(res => res.json())
            .then(data => {
                setScreens(data);
            })
            .catch(err => console.log(err))
    }, [])
    if (screens) {
        let data = screens.filter(item => item.user === '6488048765dd9478cfa99117')
        console.log(data);
    }
    return (
        <div>
            all screens here
        </div>
    );
}

export default AllScreens;
