import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import {Card, Tabs, Button } from 'antd';
import { List, Icon } from 'antd';
import { FaRegStar, FaRegThumbsUp, FaRegComment } from 'react-icons/fa';

const { TabPane } = Tabs;

const SingleCoin = ({ match }) => {
    const [coin, setCoin] = useState({})

    axios.get(`https://api.coinpaprika.com/v1/coins/${match.params.id}`)
    .then(res => {
        console.log(res.data)
        setCoin(res.data)
    })
    .catch(err => console.log(err.response))
   
    const operations = <Button>Extra Action</Button>;

    const IconText = ({ type, text }) => (
        <span>
          <Icon type={type} style={{ marginRight: 8, fontSize: 24 }} />
          {text}
        </span>
      );

    return (
        <div>
            <Card>
                <List
                itemLayout="vertical"
                size="large"
                >
                    <List.Item
                        actions={[
                        <IconText size='large' type="star-o" text="0" key="list-vertical-star-o" />,
                        <IconText size='large' type="like-o" text="0" key="list-vertical-like-o" />,
                        <IconText size='large' type="message" text="0" key="list-vertical-message" />,
                        ]}
                    >
                    <List.Item.Meta
                    title={(<h1>{coin.name}</h1>)}
                    description={(<h2 className='desc'>{coin.description}</h2>)}
                    />
                    {/* <div>
                        <FaRegStar />
                        <FaRegThumbsUp />
                        < FaRegComment />
                    </div> */}
                    </List.Item>
                </List>
            </Card>

            <Card>
            <Tabs >
                <TabPane tab="Coin Info" key="1">
                    <Card>
                        <List
                            itemLayout="vertical"
                        >
                            <List.Item>
                                <h2>{`Type: ${coin.type}`}</h2>
                                <h2>{`Origanization Structure: ${coin.org_structure}`}</h2>
                                <h2>{`Proof Type: ${coin.proof_type}`}</h2>
                                <h2>{`Development Status: ${coin.development_status}`}</h2>
                                <h2>{`Started in: ${parseInt(coin.started_at)}`}</h2>
                                <NavLink to='#'>{operations}</NavLink>
                            </List.Item>
                        </List>
                    </Card>
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                Content of tab 2
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                Content of tab 3
                </TabPane>
            </Tabs>
            </Card>
        </div>
    )
}

export default SingleCoin;