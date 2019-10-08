import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Card, Tabs, Button } from 'antd';
import { List, Avatar, Icon } from 'antd';
import { Tag } from 'antd';

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
          <Icon type={type} style={{ marginRight: 8 }} />
          {text}
        </span>
      );

    return (
        <div>
            <Card>
                <List
                itemLayout="vertical"
                size="large"
                // dataSource={coin}
                >
                    <List.Item
                        actions={[
                        <IconText type="star-o" text="0" key="list-vertical-star-o" />,
                        <IconText type="like-o" text="0" key="list-vertical-like-o" />,
                        <IconText type="message" text="0" key="list-vertical-message" />,
                        ]}
                        // extra={
                        // <img
                        //     width={272}
                        //     alt="logo"
                        //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        // />
                        // }
                    >
                    <List.Item.Meta
                    title={coin.name}
                    description={coin.description}
                    />
                    </List.Item>
                </List>
            </Card>

            <Card>
            {/* <h1>{coin.name} {coin.symbol}</h1>
            <h2>{coin.description}</h2>
            <br /> */}
            <Tabs tabBarExtraContent={operations}>
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
                        </List.Item>
                    </List>
                    {/* <Tag color="blue">{`Type: ${coin.type}`}</Tag>
                        <Tag color='blue'>{`Origanization Structure: ${coin.org_structure}`}</Tag>
                        <Tag color='blue'>{`Proof Type: ${coin.proof_type}`}</Tag>
                        <Tag color='blue'>{`Development Status: ${coin.development_status}`}</Tag>
                        <Tag color='blue'>{`Started in: ${parseInt(coin.started_at)}`}</Tag> */}
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