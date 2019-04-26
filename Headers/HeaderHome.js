// Components/Profil.js

import React from 'react'
import {StyleSheet, TouchableOpacity, View, Image, TextInput, Button, FlatList, Text, ActivityIndicator  } from 'react-native'
import Css from "../Ressources/Css/Css";

class HeaderHome extends React.Component {

    constructor(props) {
        super(props)
        this._films = []
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
            films: [],
            isLoading: false
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    render() {
        return (
            <View style={ Css.header_container}>
                {/*<TouchableOpacity activeOpacity = { .5 } onPress={this.props.navigation.navigate("Profil")}>*/}
                    <Image
                        style={[Css.imageHeader ]}
                        source={require('../Ressources/Img/sportnerLogo2.png')}
                    />
                {/*</TouchableOpacity>*/}
                <Image
                    style={[Css.imageHeaderMiddle ]}
                    source={require('../Ressources/Img/sportnerLogo.png')}
                />
                {/*<TouchableOpacity activeOpacity = { .5 } onPress={this.props.navigation.navigate("Profil")}>*/}
                <Image
                    style={[Css.imageHeader ]}
                    source={require('../Ressources/Img/profil.png')}
                />
                {/*</TouchableOpacity>*/}
            </View>
        )
    }
}

export default HeaderHome