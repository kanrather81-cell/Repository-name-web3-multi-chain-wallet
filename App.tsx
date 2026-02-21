import React from 'react';
import { WagmiConfig, createClient } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Web3Modal } from '@web3modal/react';

const client = createClient({
  autoConnect: true,
  connectors: () => [
    new InjectedConnector(),
  ],
});

function App() {
  return (
    <WagmiConfig client={client}>
      <Web3Modal />
      <div>
        <h1>Multi-Chain Wallet</h1>
        {/* Add wallet related components here */}
      </div>
    </WagmiConfig>
  );
}

export default App;