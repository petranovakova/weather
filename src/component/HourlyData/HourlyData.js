import React from 'react';
import sun from '../../icons/01d.png'
import fewclouds from '../../icons/02d.png'

function fromKelvinToCelsius(temperature) {
  return (temperature - 273.15)
}


const HourlyData = ({data}) => {
  const celsius = '\u2103';

  if(!data) {
    return null;
  }
  return (<div>
    <span>
      {data.dt_txt.slice(11, 16)}
    </span>
    <span>
      {Math.round(fromKelvinToCelsius(data.main.temp))} {celsius}
    </span>
    <span>
      {data.weather[0].main}
    </span>
    <img
        src={require('../../icons/'+data.weather[0].icon+'.png')}
        alt="weather icon"
        style={{width: 50, height: 50}}
    />

  </div>);
};

export default HourlyData;
