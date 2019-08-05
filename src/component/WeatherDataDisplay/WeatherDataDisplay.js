import React from 'react';
import groupBy from "../../function/groupBy";
import DailyData from "../DailyData";


const WeatherDataDisplay = ({data, city}) => {

    if (!data) {
        return null;
    }

    const groupedByDayData = groupBy(data, (value) => {
        return value.dt_txt.slice(0, 11);
    });

    console.log(groupedByDayData);

    return <div>
        // hours
        <div>00:00</div>
        <div>03:00</div>
        <div>06:00</div>
        <div>09:00</div>
        <div>12:00</div>
        <div>15:00</div>
        <div>18:00</div>
        <div>21:00</div>

        //data
        {groupedByDayData.map(day => {
            return <DailyData data={day} key={day.key}/>
        })}
    </div>;
};

export default WeatherDataDisplay;