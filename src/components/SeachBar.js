import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Input } from 'antd';
const { Search } = Input;

const SearchBar = ({ coins }) => {
    const [item, setItem] = useState('')

    const search = (value) => {
        axios.get(`https://api.coinpaprika.com/v1/search/${value}`)
        .then(res => {
            console.log(res.data)
            setItem(res.data.statusText)
        })
        .catch(error => {
            console.log(error.response)
        })
    }

    return (
        <Search className='searchbar' size='large' placeholder="Search" onSearch={value => search(value)} enterButton />  
    )
}

export default SearchBar;