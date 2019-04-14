// Components/Profil.js

import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator  } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMBAPI' // import { } from ... car c'est un export nommé dans TMDBApi.js

class Profil extends React.Component {

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
            <View style={ styles.main_container}>
                <Text>
                    Mon Profil
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Profil