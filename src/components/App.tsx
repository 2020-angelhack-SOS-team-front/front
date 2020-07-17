import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./home";
import Address from "./address";
import Markets from "./markets";
import Market from "./market";
import Cart from "./cart";
import Purchase from "./purchase";


const App = () => {
  return (
    <BrowserRouter>
      <div className="outer-wrapper">
        <Route exact path="/" component={Home} />
        <Route path="/address" component={Address} />
        <Route path="/markets" component={Markets} />
        <Route path="/market" component={Market} />
        <Route path="/cart" component={Cart} />
        <Route path="/purchase" component={Purchase} />
      </div>
    </BrowserRouter>
  );
};

export default App;
