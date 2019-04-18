// App.js

import React from 'react'
import IntroLogo from './Components/IntroLogo'
import BottomNavigation from './Navigation/BottomNavigation'
import TopNavigation from './Navigation/TopNavigation'
import {  View} from 'react-native'
import Profil from "./Components/Profil";


export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // positionLeft: new Animated.Value(Dimensions.get('window').width),
        }
    }

    render() {

        return (
           <IntroLogo/>
        )
    }
}