import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const logoIcon = require('../assets/images/cloudy.svg')
const github = require('../assets/images/github-logo.svg')

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 1260,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logoIcon} alt="weather" className="logo-icon" />
        </Link>
        {siteTitle}
        <Link
          to="https://github.com/gustavocodess/gatsby-weather"
          style={{
            color: 'white',
            textDecoration: 'none',
            float: 'right',
          }}
        >
          <img src={github} alt="github" className="logo-icon" style={{ backgroundColor: 'indigo', borderRadius: '50%' }} />
        </Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
