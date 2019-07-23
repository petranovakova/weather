import React, {Component} from 'react';
import axios from 'axios'

class Test extends Component {
    render() {
        return <div>Test</div>;
    }
    apiKey = '94bfa8b7d67109e191ec4aef03ce391e';

    componentDidMount() {
        // axios.get('https://openweathermap.org/data/2.5/forecast?id=524901&appid=94bfa8b7d67109e191ec4aef03ce391e')
      console.log(axios.get('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + this.apiKey));
    }

}

export default Test;
