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
        this.navigationOptions = { title: 'Welcome' }
        this.state = {
            username: false,
            password: false,
            isLogged: false
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    _login() {
        let userLogin={
            "username":this.state.username,
            "password":this.state.password
        };
        console.log(this.state.username, this.state.password)
        // axios.post('http://sportnerapii.com:8000/api/login_check', {
        //     username: this.state.username,
        //     password: this.state.password,
        //     config: { headers: {'Content-Type': 'application/json' }}
        // })
        //     .then(function (response) {
        //         //handle success
        //         console.log('coucou');
        //     })
        //     .catch(function (error) {
        //         //handle error
        //         console.log(error);
        //     });
        // axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NTQzMDEwODQsImV4cCI6MTU1NDMwNDY4NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoicmJhcnJvbkBjYXJ2aXZvLmNvbSJ9.Qjt8A-tfqVRsfiLLpSWMIuV7pyK-6A4tdPya5PZ8GyA0n67zXU_YuW_N4BTbvji9z_a2KIMkfTvlPrJQWRDOTrLd3uLddB4teoTQzLgUz7PGjGtTswFvyLIQKcbpD03jmc-d2v0fcfcd9N6HyYWR5d_n2UOfe2Odu93Rt6tAG1vi0nsqV5skJyvbOT_60OctGtTEwy7o0KqTblBiFugSDalNv_MLs2GNapa3jpMlUCfSGt6nEI-tZVKY3CWxRHZHVkwomZRLCLVQPiLJTI7NxwIPCsssFNwtHK0mHGRoI4VKgPkxk66H5Ehz47UftaD-69MF-yCDqUfCDDuxvyQQne4eRXENMemdXu02uomp7XoWzEcmQ1W-0NwONyZ-JyzyYv8_CqOM7NG2aH6FxzowlUH4i4PNTwkWb4bYJWI7VvpJtuhZAVO0VnJfsGUz1-1HxuAGNjqF6BquPGKGQzzxRywAS27Mz4lhWvv8bnoZnx5yYu1ce1v1tsALINfdLLktjCaAQ3RRkMvEjuuIPvoVgtFGvSvwtiJM8lCmhg4vv1T2mSp49VIVvLgLL0Gk22FUjyb_K25xmsWk6se3Thl_4CL51IW0cTbQnWWPwO0bJT5fqDM1BmaBgmu3-DoKJhyNw3tRQyGPq3nlIQjnOAkMLZmCTN-oRd1z4jh1iLTz4-Q';

        fetch("http://192.168.1.62:80/api/login_check", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                // alert(responseJson);
                // this.props.navigation.navigate("Login")
                console.log('coucou');
                this.setState({ isLogged: true })
            }).catch((error) => {
            console.error('MySQL error' + error);
        });
    }

    render() {
        const { navigate } = this.props.navigation;

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

                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigate('Navigation')}>
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
