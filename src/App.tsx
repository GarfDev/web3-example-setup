import React from "react";
import { useDispatch } from "react-redux";

import { WALLET } from "./core/web3/constants";
import { connectWallet, disconnectWallet } from "./core/web3/actions";
import { useProvider } from "./core/web3/hooks/useProvider";
import { useWallet } from "./core/web3/hooks/useWallet";

import logo from "./logo.svg";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const provider = useProvider();
  const wallet = useWallet();

  const connect = () => {
    dispatch(connectWallet({ wallet: WALLET.METAMASK }));
  };

  const disconnect = () => {
    dispatch(disconnectWallet());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />{" "}
        <button onClick={!provider ? connect : disconnect}>
          {!provider ? "Connect" : "Disconnect"}
        </button>
        <p> {wallet || ""}</p>
      </header>
    </div>
  );
}

export default App;
