// Animations/FadeIn.js

import React from 'react'
import { Animated } from 'react-native'

class FadeOut extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            opacity: new Animated.Value(1)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 0,                   // Animate to opacity: 1 (opaque)
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
export default FadeOut