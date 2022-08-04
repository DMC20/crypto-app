import React, { useState } from "react";

import Header from "./components/header";
import CoinRender from "./components/CoinRender";
import Search from "./components/Search";
import Footer from "./components/Footer";

const App = () => {
  const [coins, search] = useState("bitcoin");

  return (
    <div className="app">
      <Header />
      <div>
        <Search coin={coins} onFormSubmit={search} />
          <CoinRender />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
