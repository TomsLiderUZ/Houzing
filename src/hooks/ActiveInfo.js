import { useState, useEffect } from 'react';

export function useActiveInfo(activeInfo) {
    const [storedValue, setStoredValue] = useState('');

    useEffect(() => {
        if (activeInfo) {
            const encodedValue = btoa(activeInfo);
            localStorage.setItem("you!Prof_Active_ID-1.1", encodedValue);
        }

        const storedEncodedValue = localStorage.getItem("you!Prof_Active_ID-1.1");
        if (storedEncodedValue) {
            const decodedValue = atob(storedEncodedValue);
            setStoredValue(decodedValue);
        }
    }, [activeInfo]);

    return storedValue;
}
