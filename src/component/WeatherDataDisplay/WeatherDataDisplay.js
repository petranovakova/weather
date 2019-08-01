import React from 'react';
import groupBy from "../../function/groupBy";
import DailyData from "../DailyData";

function fromKelvinToCelsius(temperature) {
    return (temperature - 273.15)
}

const WeatherDataDisplay = ({data, city}) => {

    if (!data) {
        return null;
    }

    const groupedByDayData = groupBy(data, (value) => {
        return value.dt_txt.slice(0, 11);
    });

    return groupedByDayData.map(day => {
        return <DailyData data={day} key={day.key} />
    });
};

export default WeatherDataDisplay;