// Components/IntroLogo.js

import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image, Animated, Easing, InteractionManager } from 'react-native'
import _Home from "./_Home";
import FadeInAndOut from "../Animations/FadeInAndOut";
import Navigation from '../Navigation/Navigation';
import Login from './Login';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class IntroLogo extends React.Component {

    constructor(props) {
        super(props)
        this._films = []
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
            films: [],
            displayHome: false,
            home: null,
            imageDisplay: 'flex',
            // topPosition: new Animated.Value(0),
            // positionLeft: new Animated.Value(Dimensions.get('window').width),
            // opacity: new Animated.Value(0)
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({displayHome: true});
            this.setState({imageDisplay: 'none'});
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
        console.log(this.state.imageDisplay)

        return (
            <View style={styles.main_container}>
                <View style={styles.container_flex}>
                    <FadeInAndOut>
                        <Image
                            style={[styles.imageLogo2, {display: this.state.imageDisplay} ]}
                            source={require('../Ressources/Img/sportnerLogo2.png')}
                        />
                        <Image
                            style={[styles.imageLogo, {display: this.state.imageDisplay} ]}
                            source={require('../Ressources/Img/sportnerLogo.png')}
                        />
                    </FadeInAndOut>
                </View>
                <View style={styles.Home_style} >
                    {/*{this.state.displayHome ?  <Navigation/>*/}
                    {/*: null}*/}
                    {this.state.displayHome ?  <Login/>
                        : null}

                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        // height: height
        flex: 1,
    },
    container_flex: {
        top: 150,
        // flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Home_style: {
        flex: 1,
    },
    imageLogo: {
        width: width,
        height: 70,
    },
    imageLogo2: {
        width: width,
        height: 250,
    },
})

export default IntroLogo