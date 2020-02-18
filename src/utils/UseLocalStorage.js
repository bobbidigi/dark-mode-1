import {useState} from 'react'

export const UseLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      // if username, we're getting username key from localStorage
        return JSON.parse(window.localStorage.getItem(key));
    } else {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    }
    });

    const setValue = value => {
    // console.log("setValue is running");
    // I want you guys to set the storedValue into localStorage
    setStoredValue(value);
    // if username, we're setting username key to localStorage
    window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};
