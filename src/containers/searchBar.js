import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {searchCity: ''};
    }

    onInputValueChange = (event) => {        
        this.setState({searchCity: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();        
        this.props.fetchWeather(this.state.searchCity);
        this.setState({searchCity: ''});
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input 
                        placeholder="Enter city for 5 days forecast"
                        className="form-control"
                        value={this.state.searchCity}
                        onChange={this.onInputValueChange}
                    />
                    <span className="input-group-btn">
                        <button id='button' type="submit" className="btn btn-secondary">Submit</button>
                    </span>
                </form>
            </div>
        );        
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);