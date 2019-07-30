import React, {Component} from 'react';
import WeatherDataDisplay from "../WeatherDataDisplay";
import axios from 'axios';

const API_KEY = '94bfa8b7d67109e191ec4aef03ce391e';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '', // '[]' .. tohle je string, ne array + array by tu nedavala smysl
            data: null, // prazdny retezec nedava smysl, to je uplne jiny datovy typ, nez ocekavas
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
            .then(result => this.setState({data: result.data})) // proc si ve statu uchovavas celou response? preci staci ty data, co tam mas, jen ty ti pak vyhazuje reference errory pak
            .catch(error => this.setState({error}))
    }

    render() {
        return (
            <div>
                {/* formular */}
                <form onSubmit={this.getApiData}>
                    <input
                        type="text"
                        onChange={this.changeCity}
                    />
                    <button type="submit">
                        OK
                    </button>
                </form>

                {/* error */}
                {this.state.error && <div> {/*zobrazim error jen kdyz mam error, TODO osetrit, pokud poprve zavolam s errorem a podruhe projde reqeust v pohode*/}
                    <p>Something went wrong. Please try it again :)</p>
                </div>}

                {/* data */}
                <WeatherDataDisplay data={this.state.data}/> {/* pokud je error, tak ti pravdepodobne neprisla zadna data a to osetris uvnitr komponenty*/}
            </div>
        );
    }
}


export default Search;
