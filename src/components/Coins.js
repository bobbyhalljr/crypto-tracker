import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import { PageHeader, Tag, Button, Statistic, Descriptions, Row } from 'antd';

import SingleCoin from '../components/SingleCoin';

const Coins = (props) => {
    const [coins, setCoins] = useState([])

    const getCoins = () => {
        axios.get('https://api.coinpaprika.com/v1/tickers')
        .then(res => {
            console.log(res.data)
            setCoins(res.data)
        })
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        getCoins();
    }, [])

console.log(props)
    // const getCoinById = (props) => {
    //     // id = match.parms.id;
    //     axios.get(`https://api.coinpaprika.com/v1/coins/${props.match.id}`)
    //     .then(res => {
    //         console.log(res.data)
    //         setCoins(res.data)
    //     })
    //     .catch(err => console.log(err.response))
    // }

    return (
        <div className='coin-container'>
            {coins.map(coin => {
                return (
                    <PageHeader
                        className='coins'
                        key={coin.id}
                        title={coin.name}
                        tags={<Tag color="blue">{`rank ${coin.rank}`}</Tag>}
                        subTitle={coin.symbol}
                        >
                        <Row type="flex">
                            <Statistic title="Market Cap" value={coin.quotes.USD.market_cap} />
                            <Statistic title="Price" prefix="$" value={coin.quotes.USD.price.toFixed(2)}
                                style={{ margin: '0 30px', }}
                            />
                            <Statistic title="Price change" value={coin.quotes.USD.percent_from_price_ath} />
                            <NavLink to={`/coins/${coin.id}`}>
                                <Button className='btn' key="1" type="primary">
                                    {`view ${coin.name}`}
                                </Button>
                            </NavLink>
                        </Row>
                    </PageHeader>
                )
            })}

            <Route path='/coins/:id' render={props => <SingleCoin {...props} />} />
        </div>
    )
}

export default Coins;

// fvbhbdvf