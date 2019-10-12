import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import {Card, Tabs, Button } from 'antd';
import { List, Icon, Table } from 'antd';

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

        // description: "Ethereum is a decentralized platform for applications. Applications build on it can use smart contracts - computer algorithms which execute themselves when data is supplied to the platform. There is no need for any human operators."
        // development_status: "Working product"
        // first_data_at: "2015-08-07T00:00:00Z"
        // hardware_wallet: true
        // hash_algorithm: "Ethash"
        // id: "eth-ethereum"
        // is_active: true
        // is_new: false

        const columns = [
            {
              title: 'Hash Algorithm',
              dataIndex: 'hash_algorithm',
            },
            {
                title: 'Proof Type',
                dataIndex: 'proof_type',
              },
              {
                title: 'Org Structure',
                dataIndex: 'org_structure',
              },
              {
                title: 'Started At',
                dataIndex: 'started_at',
              },
          ];
          const data = [
            {
              key: '1',
              hash_algorithm: `${coin.hash_algorithm}`,
              proof_type: `${coin.proof_type}`,
              org_structure: `${coin.org_structure}`,
              started_at: `${parseInt(coin.started_at)}`
            },
          ];

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
                    </List.Item>
                </List>
            </Card>

            <Card>
            <Tabs animated={false} >
                <TabPane tab="Coin Info" key="1">
                <div>
                    <Table columns={columns} dataSource={data} size="medium" />
                </div>
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