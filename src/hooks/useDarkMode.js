import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage'

const useDarkMode = () => {
const [darkMode, setDarkMode] =  useLocalStorage('Dark Mode On')
console.log(darkMode)
useEffect(() => {
    if (darkMode === true) {
        document.body.classList.add("dark-mode")
    } else {
        document.body.classList.remove("dark-mode")
        console.log("false")
    }

}, [darkMode])
return [darkMode, setDarkMode]
};

export default useDarkMode;