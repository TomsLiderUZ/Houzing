import { useState, useEffect } from 'react';

export function useAccountActive(initialActive) {
    const [storedValue, setStoredValue] = useState(() => {
        // Initial value from localStorage or default to 'false'
        const storedEncodedValue = localStorage.getItem("you!Prof_Active_ID-1.0");
        if (storedEncodedValue) {
            return atob(storedEncodedValue);
        }
        return 'false'; // Default value if nothing is stored
    });

    useEffect(() => {
        if (initialActive !== undefined) {
            const encodedValue = btoa(initialActive.toString());
            localStorage.setItem("you!Prof_Active_ID-1.0", encodedValue);
            setStoredValue(initialActive.toString());
        }
    }, [initialActive]);

    return storedValue === 'true'; // Return boolean value
}
