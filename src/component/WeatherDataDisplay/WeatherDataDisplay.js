import React from 'react';

const WeatherDataDisplay = ({data}) => data && <div>
    <ul>
        <li>id: {data.id}</li>
        <li>name: {data.name}</li>
        <li>visibility: {data.visibility}</li>
    </ul>
</div>;

export default WeatherDataDisplay;
