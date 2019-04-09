// App.js

import React from 'react'
import IntroLogo from './Components/IntroLogo'


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
