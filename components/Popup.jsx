import React, { useEffect } from 'react';

const Popup = ({ children, modalRef }) => {
    useEffect(() => {
        const popuphandler = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                modalRef.current.classList.add('hidden');
            }
        }

        document.addEventListener('mousedown', popuphandler);

        return () => document.removeEventListener('mousedown', popuphandler);
    })
    return (
        <div ref={modalRef} className='hidden'>
            {children}
        </div>
    );
}

export default Popup;
