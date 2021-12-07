import React from "react";
import { useDispatch } from "react-redux";

import { WALLET } from "./core/web3/constants";
import { connectWallet } from "./core/web3/actions";

import logo from "./logo.svg";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const connect = () => {
    dispatch(connectWallet({ wallet: WALLET.METAMASK }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />{" "}
        <button onClick={connect}>Connect</button>
      </header>
    </div>
  );
}

export default App;
