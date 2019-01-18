import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeahter = (data) => {
        const city = data.city.name;
        const temps = data.list.map(weather => weather.main.temp);
        const pressures = data.list.map(weather => weather.main.pressure);
        const humidities = data.list.map(weather => weather.main.humidity); 
      
        return (
            <tr key={city}>
                <td>{city}</td>
                <td><Chart data={temps} color="green" /></td>
                <td><Chart data={pressures} color="yellow" /></td>
                <td><Chart data={humidities} color="red" /></td>
            </tr>
        );
    };

    render() {
        return (                             
            <table className="table table-hover">
                <thead>
                    <tr> 
                        <th>city</th>                      
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>               
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeahter)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}


export default connect(mapStateToProps) (WeatherList);