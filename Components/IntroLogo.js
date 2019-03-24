// Components/IntroLogo.js

import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image, Animated, Easing, InteractionManager } from 'react-native'
import _Home from "./_Home";
import FadeInAndOut from "../Animations/FadeInAndOut";
import Navigation from '../Navigation/Navigation';

class IntroLogo extends React.Component {

    constructor(props) {
        super(props)
        this._films = []
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
            films: [],
            displayHome: false,
            home: null
            // topPosition: new Animated.Value(0),
            // positionLeft: new Animated.Value(Dimensions.get('window').width),
            // opacity: new Animated.Value(0)
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({displayHome: true});
        });
    }

    render() {
        const film = this.props.film;
        const visible = this.props.visible;
// if (this.state.displayHome === true)
// {
//     this.state.home =                 <Search/>;
//     console.log(this.state.home)
// }
        return (
            <View style={styles.main_container}>
                <View style={styles.container_flex}>
                    <FadeInAndOut>
                        <Image
                            style={styles.imageLogo2}
                            source={require('../Ressources/Img/sportnerLogo2.png')}
                        />
                        <Image
                            style={styles.imageLogo}
                            source={require('../Ressources/Img/sportnerLogo.png')}
                        />
                    </FadeInAndOut>
                </View>
                <View style={styles.Home_style} >
                    {this.state.displayHome ?  <Navigation/>
                        : null}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    container_flex: {
        top: 150,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Home_style: {
        flex: 1,
    },
    imageLogo: {
        width: 350,
        height: 70,
    },
    imageLogo2: {
        width: 350,
        height: 250,
    },
})

export default IntroLogo