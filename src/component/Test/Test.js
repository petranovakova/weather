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

function groupBy (array, length) {
    return array.reduce(function (acc, value) {

        let myArray;
        if (acc[value[length]]) {
            myArray = acc[value[length]]
        } else {
            myArray = [];
        }

        myArray.push(value);
        acc[value[length]] = myArray;


        (acc[value[length]] = acc[value[length]] || []).push(value);
        return acc;
    }, {});
}




const result = [
    {
        key: 3,
        values: ['one', 'two']
    },
    {
        key: 5,
        values: ['three']
    }
];

const result2 = {
    3: ['one', 'two'],
    5: ['three']
};




const array = ['one', 'two', 'three'];

//ukol pouzij reduce a spocitej sumu techto cisel a dale spocitej pomoci reduce maximum
const cisla = [2, 9, 4];

const suma = cisla.reduce(function (acc, val) {
    return acc + val;
});

const maxim = cisla.reduce((acc, value) => acc > value ? acc : value);


const hovna = [1, 2, 3, 4, 5, 6, 7];

const coolArray = groupByArray(hovna, function (value) {
    return value % 2 === 0 ? 'sudy' : 'lichy';
});

const slova = ['hovno', 'sracka', 'fekal', 'bobek', 'lejno', 'hajzl'];

const rozdeleneDlePocatecnihoPismena = groupByArray(slova, (value) => {
    return value.slice(0, 1);
});
console.log(rozdeleneDlePocatecnihoPismena);


// console.log('coolArray', coolArray);


const string = {
    length: 4
};


return (<div>
      {data.map(day => {
            return <p key={day.key}>
              {day.values}
            </p>;
          }
      )}
    </div>)