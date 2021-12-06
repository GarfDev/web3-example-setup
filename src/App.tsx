import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getProvider } from "./core/utils/web3/utils";
import { WALLET } from "./core/utils/web3/constants";

function App() {
  React.useEffect(() => {
    (async () => {
      const provider = await getProvider(WALLET.METAMASK);
      console.log(provider);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
