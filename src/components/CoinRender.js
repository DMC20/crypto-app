import { useEffect, useState } from "react";
import "./coinRender.css";
import Coin from "./Coin";

const CoinRender = () => {
  const [coins, setCoin] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    const data = await res.json();
    console.log(data);
    setCoin(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {coins.map((coin) => {
        // console.log(coin.symbol);
        return (
            <div>
              <Coin
                key={coin.id}
                rank={coin.market_cap_rank}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                cap={coin.market_cap}
                change={coin.price_change_percentage_24h}
              />
            </div>
        );
      })}
    </div>
  );
};

export default CoinRender;
