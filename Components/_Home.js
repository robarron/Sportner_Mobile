// Components/Search.js
import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator  } from 'react-native'
import Navigation from '../Navigation/Navigation'

class _Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    render() {
        return (
            <View style={ styles.main_container}>
                <TextInput
                >coucou</TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
    },
})

export default _Home