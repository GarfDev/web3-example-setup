import { ChainData } from "./types";

export enum WALLET {
  METAMASK = "metamask",
}

export const WALLET_STORAGE_KEY = 'wallet_provider';

export const supportedChainMap: { [chainId: number]: ChainData } = {
  1: {
    name: "Ethereum Mainnet",
    chain: "ETH",
    network: "mainnet",
    chainId: 1,
    networkId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    nativeCurrency: {
      symbol: "ETH",
      name: "Ethereum",
      decimals: "18",
      contractAddress: "",
    },
  },
};

/* Can apply something like isProduction ? chain_1 : chain_2 for this variable */
export const fallbackChain = supportedChainMap[1];
