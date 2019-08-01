import React, {Component} from 'react';
import WeatherDataDisplay from "../WeatherDataDisplay";
import axios from 'axios';

const API_KEY = '94bfa8b7d67109e191ec4aef03ce391e';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityInput: 'brno',
            cityResult: null,
            list: [],
            error: null,
        };
        this.changeCity = this.changeCity.bind(this);
        this.getApiData = this.getApiData.bind(this);

    }

    changeCity(event) {
        this.setState({cityInput: event.target.value});
    }

    getApiData(event) {
        event.preventDefault();
        this.setState(
            {list: [], error: null},
        );
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityInput}&appid=${API_KEY}`)
            .then(result => this.setState({list: result.data.list, cityResult: result.data.city}))
            .catch(error => this.setState({error}))
    }

    componentDidMount() {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityInput}&appid=${API_KEY}`)
            .then(result => this.setState({list: result.data.list, cityResult: result.data.city}))
            .catch(error => this.setState({error}))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getApiData}>
                    <input
                        type="text"
                        value={this.state.cityInput}
                        onChange={this.changeCity}
                    />
                    <button type="submit">
                        OK
                    </button>
                </form>
                {this.state.error && <div>
                    <p>Something went wrong. Please try it again :)</p>
                </div>}
                <WeatherDataDisplay
                    data={this.state.list}
                    city={this.state.cityResult}
                />
            </div>
        );
    }
}


export default Search;
