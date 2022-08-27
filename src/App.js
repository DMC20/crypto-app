import React, { useState } from "react";

import Header from "./components/header";
import CoinRender from "./components/CoinRender";
import Search from "./components/Search";
import CoinHeader from "./components/CoinHeader";
import Footer from "./components/Footer";

const App = () => {
  const [coins, search] = useState("bitcoin");

  return (
    <div className="app">
      <Header />
      <Search coin={coins} onFormSubmit={search} />
      <div className="container">
        <div className="row">
          <table className="table">
            <CoinHeader />
          </table>
          <div className="col-sm">
            <CoinRender />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
