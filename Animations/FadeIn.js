// Animations/FadeIn.js

import React from 'react'
import { Animated, Dimensions } from 'react-native'

class FadeIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            opacity: new Animated.Value(0)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 3000,
            }
        ).start();
    }

    render() {
        return (
            <Animated.View style={{ opacity: this.state.opacity }}>
                {this.props.children}
            </Animated.View>

        )
    }
}

export default FadeIn