import React from 'react';
import Image from 'next/image';
import prog from '../public/assets/figma-icon.svg'

const ProgLogoSmall = ({ border = 'border-ash' }) => {
    return (
        <li className={`bg-white/70 inline-block p-3 rounded-2xl items-center border-2 ${border}`} title='program'>
            <Image height={35} width={35} src={prog} alt='program logo' />
        </li>
    );
}

export default ProgLogoSmall;
