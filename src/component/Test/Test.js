import React, {Component} from 'react';
import axios from 'axios'

//uploading JSON file
const cityList = require('./city.list.json');
//getting needed values (name and id)
const niceList = cityList.map(city => ( {name: city.name, id: city.id}));
//creating object from array, where city is the key for city ID
const finalList = {};
niceList.forEach(item => finalList[item.name] = item.id);


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
        }
        this.findCity = this.findCity.bind(this);
        this.findCityId = this.findCityId.bind(this);
    }

    findCity (event) {
        this.setState({city: event.target.value});
    }
    findCityId ({city}) {
        return finalList.city;
    }

    render() {
        console.log(this.state.city)
        return (
            <form>
                <input
                    type="text"
                    onChange={this.findCity}
                />
            </form>
        );
    }

    static apiKey = '94bfa8b7d67109e191ec4aef03ce391e';

    componentDidMount() {
        console.log('niceList', niceList);
        // axios.get('https://openweathermap.org/data/2.5/forecast?id=524901&appid=94bfa8b7d67109e191ec4aef03ce391e')
      console.log(axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + Test.apiKey));
    }

}
export default Test;
