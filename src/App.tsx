import React, { useState } from 'react';
import './App.scss';
import { RateList } from './components/RateList';
import data from './api/data.json';

export const App: React.FC = () => {
  const [rates, setRates] = useState<Rate | []>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = () => {
    setLoading(true);

    return new Promise(() => {
      setTimeout(() => {
        setRates(data.rates);
        setLoading(false);
      }, 2000);
    });
  };

  return (
    <div className="m-5">
      {loading ? (
        <div className="spinner-border"></div>
      ) : (
        <button type="button" onClick={handleChange} className="btn btn-primary">Get rates</button>
      )}
      <RateList rates={rates} />
    </div>
  );
};
