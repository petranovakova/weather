import React, {Component} from 'react';
import axios from 'axios'


const cityList = require('./city.list.json');
const finalList = {};

class Test extends Component {
    static apiKey = '94bfa8b7d67109e191ec4aef03ce391e';

    constructor(props) {
        super(props);
        this.state = {
            city: '',
        };
        this.findCity = this.findCity.bind(this);
        this.findCitySubmit = this.findCitySubmit.bind(this);
        // this.finalList = {};
        // this.findCityId = this.findCityId.bind(this);
        // this.polyfill();
    }

    findCitySubmit (event) {
        console.log('submitting...');
        console.log(this.state.city);
        event.preventDefault();
    }

    findCity (event) {
        // event.preventDefault();
        this.setState({city: event.target.value})
    }
    // findCityId ({city}) {
    //     return finalList.city;
    // }

    render() {
        console.log('finalList', finalList);
        console.log("rendering...");
        return (
            <div>
            <form onSubmit={this.findCitySubmit}>
                <input
                    type="text"
                    onChange={this.findCity}
                    // value={this.state.city}
                />
                <button type="submit">ok</button>
            </form>
                <div className="result">
                    results....
                </div>
            </div>
        );
    }

    componentDidMount() {
        cityList.forEach(city => finalList[city.name] = city.id);
        console.log(finalList);
        // console.log(axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + Test.apiKey));
    }

}
export default Test;
