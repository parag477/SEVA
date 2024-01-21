import React, { useEffect, useState } from 'react';
import { Connection, clusterApiUrl } from '@solana/web3.js';

const solana = () => {
  const [connection, setConnection] = useState(null);
  const [balance, setBalance] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const connectToSolana = async () => {
      try {
        const newConnection = new Connection(clusterApiUrl('devnet'));
        setConnection(newConnection);
        getBalance();
      } catch (error) {
        setError(error); // Handle connection errors
      } finally {
        setIsLoading(false); // Update loading state
      }
    };

    connectToSolana();
  }, []);

  const getBalance = async () => {
    if (connection) {
      try {
        const wallet = connection.getWallet();
        if (wallet) {
          const balance = await connection.getBalance(wallet.publicKey);
          setBalance(balance.toString());
        }
      } catch (error) {
        setError(error); // Handle balance retrieval errors
      }
    }
  };

  return (
    <div>
      <h1>Solana Account Balance</h1>
      {isLoading && <p>Connecting to Solana...</p>} 
      {error && <p>Error: {error.message}</p>} 
      {balance ? (
        <p>Your balance is: {balance} SOL</p>
      ) : (
        <p>Connect to a Solana wallet to view your balance.</p>
      )}
      {connection && connection.isConnected && (
        <button onClick={() => connection.disconnect()}>Disconnect</button>
      )}
    </div>
  );
};

export default solana;