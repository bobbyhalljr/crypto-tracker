import React, { useState, useEffect } from 'react';

import { useLocalStorage } from './useLocalStorage';

export const usePriceChange = () => {
    const [price, setPrice] = useLocalStorage('priceChange', false)

    useEffect(() => {
        if(priceChange === true){
            document.body.classList.add('coin__price-change-negitive')
        } else {
            document.body.classList.add('coin__price-change-positive')
        }
    })
}