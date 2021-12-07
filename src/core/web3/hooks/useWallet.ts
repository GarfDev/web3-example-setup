import { useEffect, useState } from "react";
import { useProvider } from "./useProvider";

export const useWallet = () => {
  const provider = useProvider();
  const [wallet, setWallet] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      if (provider) {
        setWallet((await provider.listAccounts())[0].toLowerCase());
      } else {
        setWallet(null);
      }
    })();
  }, [provider]);

  return wallet;
};
