import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

type ProviderState = ethers.providers.Web3Provider | null;

export const useProvider = (): ProviderState => {
  const chainMeta = useSelector((state: any) => state?.web3Reducer?.chainMeta);
  const [provider, setProvider] = useState<ProviderState>(null);

  useEffect(() => {
    if (chainMeta) {
      setProvider(window.ethersWeb3Provider);
    } else {
      setProvider(null);
    }
  }, [chainMeta]);

  return provider;
};
