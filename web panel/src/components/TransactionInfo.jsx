import React, { useState } from 'react';

const TransactionInfo = () => {
  const [hash, setHash] = useState('');
  const [transactionData, setTransactionData] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setHash(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch(`https://apilist.tronscanapi.com/api/transaction-info?hash=${hash}`);
      if (!response.ok) {
        throw new Error('Transaction not found or invalid hash');
      }
      const data = await response.json();
      setTransactionData(data);
    } catch (err) {
      setError(err.message);
      setTransactionData(null);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Transaction Info Lookup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={hash}
          onChange={handleChange}
          placeholder="Enter Transaction Hash"
          style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
          required
        />
        <button type="submit" style={{ padding: '10px', width: '100%' }}>Get Transaction Info</button>
      </form>
       Example Hash - 3194a00c5cf427a931b908453588b2ca3f661dafa3860b76a6362d08b3b08583
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {transactionData && (
        <div style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h2>Transaction Details</h2>
          <p><strong>Block:</strong> {transactionData.block}</p>
          <p><strong>Hash:</strong> {transactionData.hash}</p>
          <p><strong>Owner Address:</strong> {transactionData.ownerAddress}</p>
          <p><strong>To Address:</strong> {transactionData.toAddress}</p>
          <p><strong>Contract Type:</strong> {transactionData.contractType}</p>
          <p><strong>Confirmations:</strong> {transactionData.confirmations}</p>
          <p><strong>Contract Result:</strong> {transactionData.contractRet}</p>
          
          {transactionData.contractData && (
            <>
              <h3>Contract Data</h3>
              <p><strong>Amount:</strong> {transactionData.contractData.amount}</p>
              <p><strong>Asset Name:</strong> {transactionData.contractData.asset_name}</p>
              <p><strong>Owner Address:</strong> {transactionData.contractData.owner_address}</p>
              <p><strong>To Address:</strong> {transactionData.contractData.to_address}</p>
              <h4>Token Info</h4>
              <p><strong>Token Name:</strong> {transactionData.contractData.tokenInfo.tokenName}</p>
              <p><strong>Token Abbreviation:</strong> {transactionData.contractData.tokenInfo.tokenAbbr}</p>
              <p><strong>Token Type:</strong> {transactionData.contractData.tokenInfo.tokenType}</p>
              <img
                src={transactionData.contractData.tokenInfo.tokenLogo}
                alt={transactionData.contractData.tokenInfo.tokenName}
                style={{ width: '100px', marginTop: '10px' }}
              />
            </>
          )}

          <h3>Cost</h3>
          <p><strong>Net Fee:</strong> {transactionData.cost.net_fee_cost}</p>
          <p><strong>Energy Fee:</strong> {transactionData.cost.energy_fee_cost}</p>

          <h3>Super Representative Confirmations</h3>
          <ul>
            {transactionData.srConfirmList.map((sr, index) => (
              <li key={index}>
                <strong>Name:</strong> {sr.name} - <strong>Address:</strong> {sr.address} - <strong>Block:</strong> {sr.block} - <strong>URL:</strong> <a href={sr.url} target="_blank" rel="noopener noreferrer">{sr.url}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TransactionInfo;
