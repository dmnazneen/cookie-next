import { useGlobalCtx } from '@/context/GlobalContext';
import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom';

/**
 * This component injects the modal in the target element with createPortal function.
 * @param {String} modalKey The key of the modal jsx which is stored in modals state. 
 * @returns createPortal returns a React node that can be included into JSX or returned from a React component. If React encounters it in the render output, it will place the provided children inside the provided domNode.
 */
export default function ModalWrapper({ modalKey }) {
    const { modals, close } = useGlobalCtx();
    const modalRef = useRef();

    useEffect(() => {
        const usermodalhandler = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                close(modalKey);
            }
        }
        document.addEventListener('mousedown', usermodalhandler);
        return () => document.removeEventListener('mousedown', usermodalhandler);
    }, []);

    return (
        ReactDOM.createPortal(
            <div className='h-screen w-screen bg-black/60 fixed top-10 left-0'>
                <div className='max-w-[480px] mx-auto relative top-[30%] translate-y-[-30%]' ref={modalRef}>{modals[modalKey]}</div>
            </div>,
            document.querySelector('#modal-container')
        )
    )
}
