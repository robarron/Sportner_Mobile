// Components/IntroLogo.js

import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image, Animated, AsyncStorage, InteractionManager } from 'react-native'
import FadeInAndOut from "../Animations/FadeInAndOut";
import BottomNavigation from '../Navigation/BottomNavigation';
import Login from './Login';
import Css from '../Ressources/Css/Css';
import {usernameValidate, passwordValidate, loginFormValidate} from "../Validators/LoginValidator";
import {login_check, getUserObject, getResponseProps, register, getImagesWithoutCurrentUser, getUsersWithoutCurrentUser} from '../API/GlobalApiFunctions';

class IntroLogo extends React.Component {

    constructor(props) {
        super(props);
        this.usernameValidate = null;
        this.passwordValidate = null;
        this.fbLogResponseProps = null;
            this.state = {
            films: [],
            displayHome: false,
            home: null,
            imageDisplay: 'flex',
            isLogged : false,
            username : null,
            password : null,
            loginStatus : null,
            loginToken : null,
            loginUsername : null,
            usersList : null,
            imagesList : null,
            fbLogResponse : null,
            currentUserInfo: null
        }
    }

    _retrieveData = async () => {
        try {
            await AsyncStorage.getItem('fbLogStatus').then((responseJson) =>
                this.setState({fbLogResponse: responseJson})
            );
            this.LoginAction(username, password)
        } catch (error) {
            // Error retrieving data
        }
    };



    LoginAction = (username, password) => {
        login_check(username, password).then((responseJson) => {
            responseJson.json().then( async (data) => {
                global.getJwtToken = 'Bearer ' + data.token;
                global.getUserEmail = username;
                const page = 1;
                getUserObject().then((responseJson) => {
                    if (responseJson.status !== 404) {
                        responseJson.json().then((data) => {
                            console.log(data);
                            this.setState({currentUserInfo: data[0]});
                            global.getCurrentUser = data[0];
                            global.getCurrentUserId = data[0].id;

                            getImagesWithoutCurrentUser(data[0].id ,page).then((responseJson) =>
                            {
                                responseJson.json().then((data) => {
                                    console.log(data);
                                    global.getImagesListe = data;
                                    this.setState( {imagesList: data});
                                }).catch((error) => {
                                    console.log(error);
                                });
                            });
                        });
                    }
                });

                this.setState(
                    {loginToken: data.token, loginUsername: username}
                );
            });
            this.setState(
                {
                    isLogged: true,
                    loginStatus: responseJson.status,
                    username: username,
                    password: password,
                }
            );

            this.usernameValidate = usernameValidate(username);
            this.passwordValidate = passwordValidate(password);
            this.loginFormValidate = loginFormValidate(this.state.loginStatus, username, password);
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
        const navigationDisplay = <BottomNavigation/>;
        const LoginDisplay = this.state.displayHome ?
            <Login LoginAction = {this.LoginAction}
                   usernameValidate = {this.usernameValidate}
                   passwordValidate = {this.passwordValidate}
                   loginFormValidate = {this.loginFormValidate}
                   FacebookLoginAction = {this.login}
                   _retrieveData = {this._retrieveData}
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
                    {/*{console.log(this.state.loginStatus + "this.state.loginStatus")}*/}
                    {/*{console.log(this.state.imagesList + "this.state.imagesList")}*/}
                    {/*{console.log(this.state.fbLogResponse + "this.state.fbLogResponse")}*/}
                    {(this.state.loginStatus == 200 && this.state.imagesList)  ? navigationDisplay : LoginDisplay}
                </View>
            </View>


        )
    }
}

export default IntroLogo