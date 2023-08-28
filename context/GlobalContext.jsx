import useModal from "@/hooks/useModal";
import useTime from "@/hooks/useTime";
import useUser from "@/hooks/useUser";
import { createContext, useContext } from "react";

const context = createContext();

export default function GlobalContext({ children }) {
    const value = { ...useUser(), ...useModal(), ...useTime() }
    return (
        <context.Provider value={value}>
            {children}
        </context.Provider>
    )
}

export const useGlobalCtx = () => useContext(context);