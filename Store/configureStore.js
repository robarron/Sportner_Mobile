// Store/configureStore.js

import { createStore } from 'redux';
import toggleParametersInfo from './Reducers/ParametersInfo'
// import toggleSponsorship from './Reducers/Sponsorship'

export default createStore(toggleParametersInfo)