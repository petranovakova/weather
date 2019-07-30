import React, { Component } from 'react';

class WeatherDataDisplay extends Component {
  render() {

    const { data } = this.props;
    return data && (
        <div>
          {data.map(item =>

                <span>
                  {item.city}
                </span>

          )}
        </div>
    );
  }
}

export default WeatherDataDisplay;
