import React from 'react';
import ModalWrapper from './ModalWrapper';
import { useGlobalCtx } from '@/context/GlobalContext';

/**
 * This component loop over the modals state to render specific modal.
 * @returns It returns the modals found in the modals state.
 */
export default function Modal() {
    const { modals } = useGlobalCtx();

    return (
        Object.keys(modals).map((k) => <ModalWrapper key={k} modalKey={k} />)
    )
}