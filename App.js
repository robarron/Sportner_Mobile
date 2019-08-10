// App.js

import React from 'react'
import IntroLogo from './Components/IntroLogo'
import BottomNavigation from './Navigation/BottomNavigation'
import TopNavigation from './Navigation/TopNavigation'
import {  View} from 'react-native'
import Profil from "./Components/Profil";
import _Home from "./Components/_Home";
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // positionLeft: new Animated.Value(Dimensions.get('window').width),
        }
    }

    render() {

        return (
            <Provider store={Store}>
                <IntroLogo/>
            </Provider>
        )
    }
}