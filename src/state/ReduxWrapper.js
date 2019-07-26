import React from 'react'
import { Provider } from 'react-redux'
import store from './index'
import '../fonts/glober.css'


export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
)
