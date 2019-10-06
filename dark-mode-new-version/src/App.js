import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from 'react-router-dom'; 

import TopTenCoins from "./components/TopTenCoins";
import Navbar from "./components/Navbar";
import About from './components/About';
import Home from './components/Home';
import Coins from './components/Coins';

const App = () => {
    const [coinData, setCoinData] = useState([]);
  
    useEffect(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then(res => {
          console.log(res.data)
          setCoinData(res.data)
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="App">
            <Navbar coinData={coinData} />
            {/* <Charts coinData={coinData} /> */}

            <Route exact path='/' component={Home} />
            <Route path='/top10' render={props => <TopTenCoins coinData={coinData} />}/>
            <Route path='/coins' render={props => <Coins {...props} coinData={coinData} />} />
            <Route path='/about' component={About} />
        </div>
    );
  };

  export default App;