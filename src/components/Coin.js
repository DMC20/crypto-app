import "./coin.css";

const Coin = ({ name, image, symbol, price, supply }) => {
  // name symbol image max_supply current_price
  let upper = symbol.toUpperCase();
  let currPrice = Math.floor(price);
  let currSupply = Math.floor(supply);
  
  return (
    <div className="card" style={{ width: "15rem" }}>
      <div className="card-body">
        <img src={image} alt="cypto" />
        <h5 className="card-title">{name}</h5>
        <p>Symbol:{upper}</p>
        <p>Price:${currPrice}</p>
        <p>Max Supply:{currSupply}</p>
      </div>
    </div>
  );
};

export default Coin;
