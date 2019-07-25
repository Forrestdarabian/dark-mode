import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js'

const useDarkMode = (key, intitialValue) => {
const [darkMode, setDarkMode] =  useLocalStorage('Dark Mode On', intitialValue)
console.log(darkMode)
useEffect(() => {
    if (darkMode === true) {
        document.querySelector("body").classList.add("dark-mode")
    } else {
        document.querySelector("body").classList.remove("dark-mode")
        console.log("false")
    }
return [key, setDarkMode]
}, [darkMode])
};

export default useDarkMode;