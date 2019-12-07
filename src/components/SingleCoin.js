import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import {Card, Tabs, Button, List, Icon, Table } from 'antd';
// import { List, Icon, Table } from 'antd';

const { TabPane } = Tabs;

const favCoins = [];

const SingleCoin = ({ match, history }) => {
    const [loading, setLoading] = useState(false)
    const [coin, setCoin] = useState({
      team: [],
      whitepaper: {},
      links: {
        website: []
      }
    })

    const addFavCoin = () => {
      favCoins.push(coin.id, coin.name)
      return alert(favCoins);
    }

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
              <div>
                <button onClick={() => history.goBack('/coins')}>Back To Coins</button>
              </div>
                <List
                itemLayout="vertical"
                size="large"
                >
                    <List.Item
                        actions={[
                        <IconText size='large' type="star-o" text="Favorite" key="list-vertical-star-o" />,
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
                <h1>{`${coin.name} Info`}</h1>
                <div>
                    <Table columns={columns} dataSource={data} size="medium" />
                </div>
                </TabPane>
                <TabPane tab="Team" key="2">
                <h1>{`The ${coin.name} Team`}</h1>
                <br />
                <ul>
                  {coin.team.map(team => {
                    return (
                      <div>
                        <h2 key={team.name}>{team.name}, {team.position}</h2>
                      </div>
                    )
                  })}
                </ul>
                </TabPane>
                <TabPane tab="Website" key="3">
                  <h1>{`Website / White paper for ${coin.name}`}</h1>
                  <h2>{coin.links.website.map(web => {
                    return (
                      <div>
                        <a href={`${web}`}>Website</a>
                      </div>
                    )
                  })}</h2>
                  <h2><a href={coin.whitepaper.link}>White Paper</a></h2>
                </TabPane>
            </Tabs>
            </Card>
        </div>
    )
}
export default SingleCoin;