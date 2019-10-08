import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleCoin = (props) => {
    // const [coin, setCoin] = useState({})

    // const getCoinById = (id) => {
    //     // id = props.match.parms.id;
    //     axios.get(`https://api.coinpaprika.com/v1/coins/${id}`)
    //     .then(res => {
    //         console.log(res.data)
    //         setCoin(res.data)
    //     })
    //     .catch(err => console.log(err.response))
    // }

    // useEffect(() => {
    //     getCoinById();
    // }, [])

    return (
        <h1>SinlgeCoin.js</h1>
    )
}

export default SingleCoin;