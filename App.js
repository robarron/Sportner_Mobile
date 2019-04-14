// App.js

import React from 'react'
import IntroLogo from './Components/IntroLogo'
import Navigation from './Navigation/BottomNavigation'


export default class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // positionLeft: new Animated.Value(Dimensions.get('window').width),
        }
    }

    render() {

        return (
            <Navigation/>
        )
    }
}
