import React from 'react';
import {FaTimes} from 'react-icons/fa';

type PropertyRatesProps = {
  rates?: {
    nightly?: number;
    weekly?: number;
    monthly?: number;
  };
};

type PriceDisplayProps = {
  price: number | undefined;
};

const PriceDisplay = ({price}: PriceDisplayProps): React.ReactElement => {
  if (price !== undefined) {
    return <div className="text-2xl font-bold text-blue-500">${price.toLocaleString()}</div>;
  }
  return (
    <div className="text-2xl font-bold text-red-500">
      <FaTimes />
    </div>
  );
};

const PropertyRates = ({rates}: PropertyRatesProps): React.ReactElement => {
  return (
    <>
      <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">Rates & Options</h3>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex items-center justify-center gap-2 mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
          <div className="text-gray-500 font-bold">Nightly</div>
          <PriceDisplay price={rates?.nightly} />
        </div>
        <div className="flex items-center justify-center gap-2 mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
          <div className="text-gray-500 font-bold">Weekly</div>
          <PriceDisplay price={rates?.weekly} />
        </div>
        <div className="flex items-center justify-center gap-2 mb-4 pb-4 md:pb-0">
          <div className="text-gray-500 font-bold">Monthly</div>
          <PriceDisplay price={rates?.monthly} />
        </div>
      </div>
    </>
  );
};

export default PropertyRates;
