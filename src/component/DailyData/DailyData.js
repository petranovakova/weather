import React from 'react';
import HourlyData from "../HourlyData";
import Time from "../Time";

const DailyData = ({data}) => {
    if (!data) {
        return null;
    }

    const year = data.key.slice(0, 4);
    const month = data.key.slice(5, 7) - 1;
    const day = data.key.slice(8, 10);

    const event = new Date(Date.UTC(year, month, day));

    const dayName = event.toLocaleDateString('us-US', {weekday: 'long'});


    return <div>
        <div>{dayName}</div>
        {data.values.map(hourBlock => {
            return (
                <HourlyData data={hourBlock} key={hourBlock.dt}/>
            )
        })}
    </div>;
};

export default DailyData;
