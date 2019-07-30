import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/layout'
import SEO from '../components/seo'
import WeatherForm from '../components/weatherForm'
import WeatherCard from '../components/weatherCard'

const IndexPage = () => (
  <Layout>
    <SEO title="Hello" />
    <div className="row">
      <div className="col" style={{ flex: 0.7 }}>
        <h3>
          A unique way to check the current weather of your place.
        </h3>
        <WeatherForm />
      </div>
      <div className="col">
        <WeatherCard />
      </div>
    </div>

  </Layout>
)

const stateProps = state => ({
  weather: state.weather,
})

export default connect(stateProps)(IndexPage)
