// Components/IntroLogo.js

import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image, Animated, AsyncStorage, InteractionManager } from 'react-native'
import FadeInAndOut from "../Animations/FadeInAndOut";
import BottomNavigation from '../Navigation/BottomNavigation';
import Login from './Login';
import Css from '../Ressources/Css/Css';

import {usernameValidate, passwordValidate, loginFormValidate} from "../Validators/LoginValidator";
import {
    login_check,
    getUserObject,
    getAllImagesWithoutCurrentUser
} from '../API/GlobalApiFunctions';
import {connect} from "react-redux";

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
        this.toggleEmail(username);
        login_check(username, password).then((responseJson) => {
            responseJson.json().then( async (data) => {
                global.getJwtToken = 'Bearer ' + data.token;
                global.getUserEmail = username;
                this.setState(
                    {loginToken: data.token, loginUsername: username}
                );
            });

            this.usernameValidate = usernameValidate(username);
            this.passwordValidate = passwordValidate(password);
            this.loginFormValidate = loginFormValidate(this.state.loginStatus, username, password);

            this.setState(
                {
                    isLogged: true,
                    loginStatus: responseJson.status,
                }
            );
        }).catch((error) => {
            return Promise.reject(error);
        });

        getUserObject(username).then((responseJson) => {
            // console.log(responseJson);

            if (responseJson.status !== 404) {
                return responseJson.json().then((data) => {
                    this.setState({currentUserInfo: data});
                    global.getCurrentUser = data;
                    this.toggleUser(data);
                    global.getCurrentUserId = data.id;
                });
            }
        });

        getAllImagesWithoutCurrentUser().then(responseJson => {
            responseJson.json().then((data) => {
                // this.setState( {allImageList: data});
                this.toggleImagesList(data);

            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });

    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({displayHome: true});
            this.setState({imageDisplay: 'none'});
        });

    };

    toggleEmail(username) {
        const action = { type: "TOGGLE_GLOBAL_EMAIL_USER", value: username };
        this.props.dispatch(action)
    };

    toggleUser(user) {
        const action = { type: "TOGGLE_GLOBAL_USER", value: user };
        this.props.dispatch(action)
    };

    toggleImagesList(allImagesList) {
        const action = { type: "TOGGLE_ALL_IMAGESLIST", value: allImagesList };
        this.props.dispatch(action)
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
                    {this.state.loginStatus == 200 && this.props.globalUser  ? navigationDisplay : LoginDisplay}
                </View>
            </View>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        globalEmailUser: state.globalEmailUser,
        globalUser: state.globalUser,
        allImagesList: state.allImagesList
    }
};
export default connect(mapStateToProps)(IntroLogo)