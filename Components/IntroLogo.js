// Components/IntroLogo.js

import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image, Animated, Easing, InteractionManager } from 'react-native'
import FadeInAndOut from "../Animations/FadeInAndOut";
import Navigation from '../Navigation/Navigation';
import Login from './Login';
import isEmail from 'validator/lib/isEmail';
import Css from '../Ressources/Css/Css';
import {usernameValidate, passwordValidate} from "../Validators/LoginValidator";

class IntroLogo extends React.Component {

    constructor(props) {
        super(props)
        this.usernameValidate = null
        this.passwordValidate = null
        this.state = {
            films: [],
            displayHome: false,
            home: null,
            imageDisplay: 'flex',
            isLogged : false,
            username : null,
            password : null,
            loginStatus : null,
        }
    }

    LoginAction = (username, password) => {
        console.log(username, password);

        fetch("http://192.168.1.62:8000/api/login_check", {
        // fetch("http://10.42.170.230:8000/api/login_check", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {
                username: username,
                password: password
            }),
    }).then((responseJson) => {
            console.log(responseJson);
            console.log(isEmail(username));
            this.setState({isLogged: true, loginStatus: responseJson.status, username: username, password : password });
            this.usernameValidate = usernameValidate(username);
            this.passwordValidate = passwordValidate(password);


            // if (this.state.loginStatus === 401) {
            //   alert("Vos identifiants sont erronés");
            // }
        }).catch((error) => {
            return Promise.reject(error);
        });

    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({displayHome: true});
            this.setState({imageDisplay: 'none'});
        });

    };

    render() {
        const navigationDisplay = <Navigation/>;
        const LoginDisplay = this.state.displayHome ?
            <Login LoginAction = {this.LoginAction}
                   usernameValidate = {this.usernameValidate}
                   passwordValidate = {this.passwordValidate}
            /> : null ;

        return (
            <View style={Css.main_container}>
                <View style={Css.container_flex}>
                    <FadeInAndOut>
                        <Image
                            style={[Css.imageLogo2, {display: this.state.imageDisplay} ]}
                            source={require('../Ressources/Img/sportnerLogo2.png')}
                        />
                        <Image
                            style={[Css.imageLogo, {display: this.state.imageDisplay} ]}
                            source={require('../Ressources/Img/sportnerLogo.png')}
                        />
                    </FadeInAndOut>
                </View>
                <View style={Css.Home_style} >
                    {this.state.loginStatus === 200 ? navigationDisplay : LoginDisplay}
                </View>
            </View>


        )
    }
}

export default IntroLogo