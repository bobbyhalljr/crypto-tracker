import React, { useState, useEffect } from "react";

const TopTenCoins = ({ topTenCoins }) => {
  return (
    <div >
      <div >
        {topTenCoins.map(coin => (
          <div className="chart__container" key={coin.name}>
            <div className='title'>
              <h2 className="coin__title">{coin.name}</h2>
              <h4 className="coin__symbol">{coin.symbol}</h4>
            </div>
            <div className="coin__logo">
              <img src={coin.image} alt={coin.name} />
            </div>
            <div className='price'>
              <h2 className='coin__current-price'>{`$ ${coin.current_price.toFixed(2)}`}</h2>
              <h4 id='price' className={coin.price_change_percentage_24h > 0 ? 'coin__price-postive' : 'coin__price-negitive'}>{coin.price_change_percentage_24h}</h4>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default TopTenCoins;
