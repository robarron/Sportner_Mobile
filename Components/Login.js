import React from 'react'
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native'
import { getToken } from '../API/UserApi'
import IntroLogo from "./IntroLogo";
import LoginForm from './LoginForm';


var height = Dimensions.get('window').height; //full height

class Login extends React.Component {
    render() {
        return (

            <View style={styles.main_container}>
                <View style={styles.container_flex_logo}>
                    <Image style={[styles.logo]} source={require('../Ressources/Img/sportnerLogo2.png')}/>
                    <Image style={[styles.logo]} source={require('../Ressources/Img/sportnerLogo.png')}/>
                    <LoginForm/>
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
})

export default Login