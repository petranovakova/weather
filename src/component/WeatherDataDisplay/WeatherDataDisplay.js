import React, {Component} from 'react';

class WeatherDataDisplay extends Component {
    render() {

        const {data} = this.props;  // data neni array, ale object, takze nemuzes volat .map()
        console.log(data);

        // zobrazim data jen, pokud data neni null
        return data && <div>
            <ul>
                <li>id: {data.id}</li>
                <li>name: {data.name}</li>
                <li>visibility: {data.visibility}</li>
            </ul>
        </div>;
    }
}

export default WeatherDataDisplay;
