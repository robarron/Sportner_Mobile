// Components/IntroLogo.js

import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image, Animated, Easing } from 'react-native'
import FadeIn from "../Animations/FadeIn";
import FadeOut from "../Animations/FadeOut";
import FadeInAndOut from "../Animations/FadeInAndOut";

class IntroLogo extends React.Component {

    constructor(props) {
        super(props)
        this._films = []
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
            films: [],
            // topPosition: new Animated.Value(0),
            // positionLeft: new Animated.Value(Dimensions.get('window').width),
            // opacity: new Animated.Value(0)
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    render() {
        const film = this.props.film

        return (
            <View style={styles.main_container}>
                <FadeInAndOut>
                    <Image
                        style={styles.imageLogo2}
                        source={require('../Ressources/Img/sportnerLogo2.png')}
                    />
                    <Image
                        style={styles.imageLogo}
                        source={require('../Ressources/Img/sportnerLogo.png')}
                    />
                    {/*<View style={styles.content_container}>*/}
                        {/*<View style={styles.header_container}>*/}
                            {/*<Text style={styles.title_text}>{film.title}</Text>*/}
                            {/*<Text style={styles.vote_text}>{film.vote_average}</Text>*/}
                        {/*</View>*/}
                        {/*<View style={styles.description_container}>*/}
                            {/*<Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>*/}
                            {/*/!* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne *!/*/}
                        {/*</View>*/}
                        {/*<View style={styles.date_container}>*/}
                            {/*<Text style={styles.date_text}>Sorti le {film.release_date} </Text>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                </FadeInAndOut>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo: {
        width: 350,
        height: 70,
    },
    imageLogo2: {
        width: 350,
        height: 250,
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default IntroLogo