import { ethers } from "ethers";
import { WALLET } from "./constants";

export const getProvider = async (wallet: WALLET) => {
  switch (wallet) {
    case WALLET.METAMASK: {
      window.ethereum.removeAllListeners("chainChanged");

      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });

      await window.ethereum.request({ method: "eth_requestAccounts" });

      return new ethers.providers.Web3Provider(window.ethereum);
    }
  }
};
