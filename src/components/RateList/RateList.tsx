import React from 'react';

interface Props {
  rates: Rate | [];
}

export const RateList: React.FC<Props> = (props) => {
  const { rates } = props;

  return (
    <div className="container m-5">
      <ul className="d-flex flex-column bd-highlight mb-3">
        {Object.entries(rates).map((rate) => (
          <li key={rate[0]} className="p-2 bd-highlight">
            {`${rate[0]} : ${rate[1]}`}
          </li>
        ))}
      </ul>
    </div>
  );
};
