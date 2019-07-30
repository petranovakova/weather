import React, {Component} from 'react';
import WeatherDataDisplay from "../WeatherDataDisplay";
import axios from 'axios';

const API_KEY = '94bfa8b7d67109e191ec4aef03ce391e';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '[]',
            apiData: '',
            error: null,
        };
        this.changeCity = this.changeCity.bind(this);
        this.getApiData = this.getApiData.bind(this);

    }

    changeCity(event) {
        this.setState({city: event.target.value});
    }

    getApiData(event) {
        event.preventDefault();
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`)
            .then(aData => this.setState({apiData: aData}))
            .catch(error => this.setState({error}))
    }

    render() {
        console.log(this.state.apiData.data);
        return (
            <div>
                <form onSubmit={this.getApiData}>
                    <input
                        type="text"
                        onChange={this.changeCity}
                    />
                    <button type="submit">
                        OK
                    </button>
                </form>
                {this.state.error
                    ? <div>
                        <p>Something went wrong. Please try it again :)</p>
                    </div>
                    : <WeatherDataDisplay
                    data = {this.state.apiData.data}
                    />
                }
            </div>
        );
    }
}


export default Search;
