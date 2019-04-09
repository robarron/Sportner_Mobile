import React from 'react'
import {StyleSheet, View, Text, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import { getToken } from '../API/UserApi'
import IntroLogo from "./IntroLogo";
import LoginForm from './LoginForm';


var height = Dimensions.get('window').height; //full height

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: false,
            password: false,
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    render() {
        // const loginActi = this.props._login(this.state.username, this.state.password);

        return (

            <View style={styles.main_container}>
                <View style={styles.container_flex_logo}>
                    <Image style={[styles.logo]} source={require('../Ressources/Img/sportnerLogo2.png')}/>
                    <Image style={[styles.logo]} source={require('../Ressources/Img/sportnerLogo.png')}/>
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

                        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.LoginAction(this.state.username, this.state.password)}>
                            <Text  style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
// define your styles
const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        // width: 300,
        // height: 100
    },
    container_flex_logo: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
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
        height: 40,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
})

export default Login