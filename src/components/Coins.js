import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { PageHeader, Tag, Button, Statistic, Row, Skeleton, Input } from 'antd';

import SearchBar from '../components/SeachBar';

const Coins = ({ coins }) => {
    return (
        <>
        <SearchBar coin={coins} />
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
                        <Row type="column" className='coin-row' >
                            <Statistic title="Market Cap" value={coin.quotes.USD.market_cap} />
                            <Statistic title="Price" prefix="$" value={coin.quotes.USD.price.toFixed(2)}
                                style={{ margin: '0 50px', }}
                            />
                            <Statistic title="Price change (12 hours)" value={`${coin.quotes.USD.percent_change_12h} %`} />
                            <NavLink to={`/coins/${coin.id}`}>
                                <Button className='btn' key="1" type="primary">
                                    {`view ${coin.name}`}
                                </Button>
                            </NavLink>
                        </Row>
                    </PageHeader>
                )
            })}
        </div>
        </>
    )
}

export default Coins;

// fvbhbdvf