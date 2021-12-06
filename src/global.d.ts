interface EthereumProvider extends EventEmitter {
  isMetaMask?: boolean;
  selectedAddress?: string;
  request: (args: EthereumRequestArguments) => Promise<unknown>;
  removeAllListeners: (name: string) => void;
  on(name: string, callback: () => void): void;

  _metamask: {
    isUnlocked(): Promise<boolean>;
  };
}
interface Window {
    ethereum: EthereumProvider;
  }
