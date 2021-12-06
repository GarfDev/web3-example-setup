import { ethers } from "ethers";
import { WALLET } from "./constants";

export const getProvider = async (wallet: WALLET) => {
  switch (wallet) {
    case WALLET.METAMASK: {
      window.ethereum.removeAllListeners("chainChanged");
      /**
       * It's a best practice to reload page everytime users change network in their wallets.
       * Otherwise, users will not be able to execute any transaction after that.
       *
       * Metamask also recommends to reload page when changing network
       * https://docs.metamask.io/guide/ethereum-provider.html#chainchanged
       */
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      await window.ethereum.request({ method: "eth_requestAccounts" });

      return new ethers.providers.Web3Provider(window.ethereum);
    }
  }
};
