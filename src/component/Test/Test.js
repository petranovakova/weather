import React, {Component} from 'react';
import axios from 'axios'


const cityList = require('./city.list.json');
console.log(cityList[23])

const niceList = cityList.map(city => ( {name: city.name, id: city.id}))
console.log(niceList[2])


class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '',
        }
        this.findCity = this.findCity.bind(this);
    }

    findCity (event) {
        this.setState({city: event.target.value})

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
        // axios.get('https://openweathermap.org/data/2.5/forecast?id=524901&appid=94bfa8b7d67109e191ec4aef03ce391e')
      console.log(axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + Test.apiKey));
    }

}
export default Test;
