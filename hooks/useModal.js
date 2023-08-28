import { useState } from "react";

export default function useModal() {
    const [modals, setModals] = useState({});
    const [modalkey, setModalkey] = useState(null);

    function open(key, jsx) {
        setModalkey(key);
        setModals((prev) => ({ ...prev, [key]: jsx }));
    }

    function close(key) {
        setModals((prev) => {
            const clonedPrev = { ...prev };
            delete clonedPrev[key];
            return clonedPrev;
        });
    }

    return {
        modals,
        open,
        close,
        modalkey,
        setModalkey,
    }
}