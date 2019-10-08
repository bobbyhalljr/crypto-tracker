import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from 'react-router-dom'; 

import TopTenCoins from "./components/TopTenCoins";
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';
import Coins from './components/Coins';
import SingleCoin from './components/SingleCoin';

const App = () => {
    const [topTenCoins, settopTenCoins] = useState([]);
    const [coins, setCoins] = useState([])

    const getTopTenCoins = () => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then(res => {
          console.log(res.data)
          settopTenCoins(res.data)
        })
        .catch(err => console.log(err));
    }

    const getCoins = () => {
      axios.get('https://api.coinpaprika.com/v1/tickers')
      .then(res => {
          console.log(res.data)
          setCoins(res.data)
      })
      .catch(err => console.log(err.response))
  }
  
    useEffect(() => {
      getTopTenCoins();
      getCoins();
    }, []);

    return (
        <div className="App">
            <Navbar topTenCoins={topTenCoins} />
            {/* <Charts coinData={coinData} /> */}

            <Route exact path='/' component={Home} />
            <Route path='/top10' render={props => <TopTenCoins topTenCoins={topTenCoins} />}/>
            <Route exact path='/coins' render={props => <Coins {...props} coins={coins} setCoins={setCoins} />} />
            <Route path='/coins/:id' render={props => <SingleCoin {...props} coins={coins} setCoins={setCoins} />} />
            <Route path='/about' component={About} />
        </div>
    );
  };

  export default App;