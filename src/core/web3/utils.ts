import { ethers } from "ethers";
import {
  fallbackChain,
  supportedChainMap,
  WALLET,
  WALLET_STORAGE_KEY,
} from "./constants";
import { ChainData } from "./types";
import { store } from "../redux/store";
import { updateChainMeta } from "./actions";

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

export const getChainMeta = (chainId: number): ChainData | undefined => {
  const chainMeta = supportedChainMap[chainId];
  return chainMeta;
};

export const requestChangeChain = async () => {
  const wallet = localStorage.getItem(WALLET_STORAGE_KEY) as WALLET;
  const provider = await getProvider(wallet);
  if (!provider.provider.request) return;
  await provider.provider.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: "0x" + fallbackChain.chainId.toString(16) }],
  });
};

/**
 * This is experimental API provided by metamask
 * https://docs.metamask.io/guide/provider-migration.html#migrating-to-the-new-provider-api
 */
export async function isMetamaskUnlocked(): Promise<boolean> {
  const accounts = ((await window.ethereum.request({
    method: "eth_accounts",
  })) || []) as string[];

  return accounts.length > 0 || (await window.ethereum._metamask.isUnlocked());
}

export const reconnectWallet = async (): Promise<boolean> => {
  try {
    const wallet = localStorage.getItem(WALLET_STORAGE_KEY) as WALLET;

    switch (wallet) {
      case WALLET.METAMASK: {
        const unlocked = await isMetamaskUnlocked();

        if (unlocked) {
          const provider = await getProvider(wallet);

          await provider.ready;

          const metadata = getChainMeta(provider.network.chainId);

          if (!metadata) {
            await requestChangeChain();
            return false;
          }

          store.dispatch(updateChainMeta(metadata));
          window.ethersWeb3Provider = provider;

          return true;
        }

        return false;
      }
    }
  } catch (e) {
    console.error(e);
  }

  return false;
};

export const disconnectWallet = (): boolean => {
  try {
    localStorage.removeItem(WALLET_STORAGE_KEY);
    window.ethersWeb3Provider = null;
    store.dispatch(updateChainMeta())

    return true;
  } catch (err) {
    console.error(err);

    return false;
  }
};

