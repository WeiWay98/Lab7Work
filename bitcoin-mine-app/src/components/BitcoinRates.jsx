// components/BitcoinRates.jsx

import React from 'react';
import useBitcoinRates from '../hooks/useBitcoinRates';

const BitcoinRates = () => {
  const { currency, setCurrency, exchangeRate, loading, error } = useBitcoinRates(currencies[0]);

  const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>
          1 Bitcoin equals {exchangeRate} {currency}
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;
