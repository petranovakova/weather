import React from 'react';

function fromKelvinToCelsius(temperature) {
  return (temperature - 273.15)
}


const HourlyData = ({data}) => {
  const celsius = '\u2103';

  if(!data) {
    return null;
  }
  return <div>
    {Math.round(fromKelvinToCelsius(data.main.temp))} {celsius}

  </div>;
};

export default HourlyData;
