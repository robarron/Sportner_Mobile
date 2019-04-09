import React from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity,  Image, Dimensions} from 'react-native'

import { getToken } from '../API/UserApi'
import axios from 'axios';
import IntroLogo from "./IntroLogo";
import {getFilmsFromApiWithSearchedText} from "../API/TMBAPI";
import Navigation from '../Navigation/Navigation'
import { createStackNavigator, createAppContainer } from "react-navigation";

var height = Dimensions.get('window').height; //full height


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: false,
            password: false,
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    render() {

        return (

            <View style={styles.main_container}>
                <TextInput style = {styles.input}
                           autoCapitalize="none"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           autoCorrect={false}
                           keyboardType='email-address'
                           returnKeyType="next"
                           placeholder='Adresse email'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           onChangeText={(username) => this.setState({username: username })}
                />

                <TextInput style = {styles.input}
                           returnKeyType="go"
                           ref={(input)=> this.passwordInput = input}
                           placeholder='Mot de passe'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           onChangeText={(password) => this.setState({password: password})}
                           secureTextEntry
                />

                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.login}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
})

export default LoginForm;
