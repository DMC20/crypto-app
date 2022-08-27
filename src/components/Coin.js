import "./coin.css";

const Coin = ({ rank, name, image, symbol, price, cap ,change }) => {
  let upper = symbol.toUpperCase();
  let currPrice = price.toFixed(2);

  return (
    <table className="table">
      <tbody>
        <tr>
          <th scope="row">{rank}</th>
          <td>
            <img src={image} alt="crypto" />
            {name}
          </td>
          <td>{upper}</td>
          <td col-span="2">{currPrice}</td>
          <td>{cap}</td>
          {change < 0 ? (
            <td className="text-danger" style={{fontWeight: "bold"}}>{change.toFixed(2)}%</td>
          ) : (
            <td className="text-success" style={{fontWeight: "bold"}}>{change.toFixed(2)}%</td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default Coin;
