import { useState, useEffect, useReducer } from 'react';

const actionTypes = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return { ...state, loading: true, error: null };
    case actionTypes.SUCCESS:
      return { ...state, loading: false, data: action.payload, error: null };
    case actionTypes.ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const useBitcoinRates = initialCurrency => {
  const [currency, setCurrency] = useState(initialCurrency);
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: actionTypes.LOADING });

      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
        const data = await response.json();
        dispatch({ type: actionTypes.SUCCESS, payload: data.bitcoin[currency.toLowerCase()] });
      } catch (error) {
        console.error('Error fetching exchange rate:', error);
        dispatch({ type: actionTypes.ERROR, payload: 'Error fetching data' });
      }
    };

    fetchData();
  }, [currency]);

  return {
    currency,
    setCurrency,
    exchangeRate: state.data,
    loading: state.loading,
    error: state.error,
  };
};

export default useBitcoinRates;
