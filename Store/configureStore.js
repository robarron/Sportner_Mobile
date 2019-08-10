// Store/configureStore.js

import { createStore } from 'redux';
import toggleParametersInfo from './Reducers/ParametersInfo'

export default createStore(toggleParametersInfo)