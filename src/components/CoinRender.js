import { useEffect, useState } from "react";
import "./coinRender.css";
import Coin from "./Coin";

const CoinRender = () => {
  const [coins, setCoin] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=5&page=1&sparkline=false"
    );
    const data = await res.json();
    // console.log(data); retrieves coin data
    setCoin(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {coins.map((coin) => {
        // console.log(coin.symbol);
        return (
          <div className="row">
            <div className="col">
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                supply={coin.total_supply}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoinRender;
