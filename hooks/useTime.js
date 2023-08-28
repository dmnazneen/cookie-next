import { useState } from "react";

export default function useTime() {
    const [time, setTime] = useState((new Date('2023-07-25')).getTime())

    return {
        time,
        setTime
    }
}