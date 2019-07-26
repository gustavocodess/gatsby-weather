import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Lottie from 'react-lottie'
import get from 'lodash.get'
import './weatherCard.css'

const waitingAnimation = require('../assets/animations/weather-loading.json')
const errorAnimation = require('../assets/animations/weather-error.json')

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: waitingAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Header = ({ weatherData }) => {
  if (weatherData && weatherData.cod === 200) {
    return (
      <div className="weather-card-container">
        <h5 style={{ marginLeft: 24 }}>
          {`Weather conditions for ${weatherData.name} - ${get(weatherData, 'sys.country', '')}`}
        </h5>
        <div className="row">
          <div className="col">
            <div className="info-card">
              <h1>
                {get(weatherData, 'main.temp', '')}
                º C
              </h1>
              <span>{get(weatherData, 'weather[0].main', '')}</span>
            </div>
            <div className="info-card">
              <img
                src={`http://openweathermap.org/img/wn/${get(weatherData, 'weather[0].icon', '')}@2x.png`}
                alt="conditions"
              />
              <span>{get(weatherData, 'weather[0].description', '')}</span>
            </div>
          </div>
          <div className="col">
            <div className="info-card">
              <p>Wind speed</p>
              <h3>{get(weatherData, 'wind.speed', '')}</h3>
              <br />
              <p>Air Humidity</p>
              <h3>{`${get(weatherData, 'main.humidity', '')}%`}</h3>
              <br />
            </div>
          </div>
        </div>
        <span>
          Last updated at:
          <span style={{ marginLeft: 8 }}>{weatherData.updateDate}</span>
        </span>
      </div>
    )
  }
  if (weatherData && weatherData.cod !== 200) {
    return (
      <div className="weather-card-container">
        <Lottie
          options={{
            ...defaultOptions,
            animationData: errorAnimation,
          }}
          height={200}
          width={200}
          isStopped={false}
          isPaused={false}
        />
        <h5 style={{ textAlign: 'center' }}>{`Error: ${weatherData.message || 'Something went wrong :('}`}</h5>
      </div>
    )
  }
  return (
    <div className="weather-card-container">
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isStopped={false}
        isPaused={false}
      />
      <h5 style={{ textAlign: 'center' }}>Please enter your location information...</h5>
    </div>
  )
}

Header.propTypes = {
  weatherData: PropTypes.object,
}

Header.defaultProps = {
  weatherData: null,
}

const stateProps = state => ({
  weatherData: state.weather,
})

export default connect(stateProps)(Header)
