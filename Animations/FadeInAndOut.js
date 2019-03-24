// Animations/FadeIn.js

import React from 'react'
import { Animated, Dimensions } from 'react-native'
import FadeIn from "../Animations/FadeIn";
import FadeOut from "../Animations/FadeOut";
import Search from "../Components/Search";

class FadeInAndOut extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // positionLeft: new Animated.Value(Dimensions.get('window').width),
            opacity: new Animated.Value(0),
        }
    }

    fadeOut() {
            Animated.timing(
                this.state.opacity,
                {
                    toValue: 0,                   // Animate to opacity: 0 (opaque)
                    duration: 2000,
                }
            ).start();
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 2000,
            }
        ).start(() => this.fadeOut());
    }

    render() {
        return (
            <Animated.View style={{ opacity: this.state.opacity }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default FadeInAndOut