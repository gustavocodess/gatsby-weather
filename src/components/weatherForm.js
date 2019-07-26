import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchWeatherUpdate } from '../actions/weather'
import './weatherForm.css'


class WeatherForm extends React.Component {
  state = {
    city: '',
    country: '',
  }

  handleCityChange = (e) => {
    this.setState({
      city: e.target.value,
    })
  }

  handleCountryChange = (e) => {
    this.setState({
      country: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchWeatherUpdate(this.state.city, this.state.country)
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="col"
        style={{ marginLeft: 0, maxWidth: '30%', minWidth: 320 }}
      >
        <input
          onChange={this.handleCityChange}
          value={this.state.city}
          placeholder="Enter your city"
        />
        <input
          onChange={this.handleCountryChange}
          value={this.state.country}
          placeholder="Enter your country"
        />
        <button>Get Update</button>
      </form>
    )
  }
}


WeatherForm.propTypes = {
  fetchWeatherUpdate: PropTypes.func,
}

WeatherForm.defaultProps = {
  fetchWeatherUpdate: () => {},
}

const actionProps = dispatch => ({
  fetchWeatherUpdate(city, country) {
    dispatch(fetchWeatherUpdate(city, country))
  },
})

export default connect(null, actionProps)(WeatherForm)
