import React, { useState, useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    
    useEffect(() => {
        if(darkMode === true){
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode])
    
    return [darkMode, setDarkMode];
}
