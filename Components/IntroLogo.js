// Components/IntroLogo.js

import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image, Animated, Easing, InteractionManager } from 'react-native'
import _Home from "./_Home";
import FadeInAndOut from "../Animations/FadeInAndOut";
import Navigation from '../Navigation/Navigation';
import Login from './Login';
import axios from 'axios';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

class IntroLogo extends React.Component {

    constructor(props) {
        super(props)
        this.loginFormLogin = React.createRef();
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
            films: [],
            displayHome: false,
            home: null,
            imageDisplay: 'flex',
            isLogged : false,
            username : null,
            password : null,
            loginStatus : null,
        // topPosition: new Animated.Value(0),
            // positionLeft: new Animated.Value(Dimensions.get('window').width),
            // opacity: new Animated.Value(0)
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    LoginAction = (username, password) => {
        console.log(username, password);

        fetch("http://192.168.1.62:8000/api/login_check", {
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
                // alert(responseJson);
                // this.props.navigation.navigate("Login")
            console.log(responseJson);
            console.log(this.body);
                this.setState({isLogged: true, loginStatus: responseJson.status });
            console.log(this.state.loginStatus);

        }).catch((error) => {
            console.error('MySQL error' + error);
        });

        // fetch("http://192.168.1.62:80/api/users").then((responseJson) => {
        //                 // alert(responseJson);
        //                 // this.props.navigation.navigate("Login")
        //             console.log(responseJson);
        //             console.log(this.body);
        //                 this.setState({isLogged: true, loginStatus: responseJson.status });
        //             console.log(this.state.loginStatus);
        //
        //         }).catch((error) => {
        //             console.error('MySQL error' + error);
        //         });

        // axios.post('http://192.168.1.62:80/api/login_check', {
        //     username: 'rbarron@carvivo.com',
        //     password: 'rbarron@carvivo.com',
        //     config: { headers: {'Content-Type': 'application/json' }}
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
    };

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({displayHome: true});
            this.setState({imageDisplay: 'none'});
        });

    };

    render() {
        const navigationDisplay = <Navigation/>;
        const LoginDisplay = this.state.displayHome ?  <Login LoginAction = {this.LoginAction}/> : null ;

        return (
            <View style={styles.main_container}>
                <View style={styles.container_flex}>
                    <FadeInAndOut>
                        <Image
                            style={[styles.imageLogo2, {display: this.state.imageDisplay} ]}
                            source={require('../Ressources/Img/sportnerLogo2.png')}
                        />
                        <Image
                            style={[styles.imageLogo, {display: this.state.imageDisplay} ]}
                            source={require('../Ressources/Img/sportnerLogo.png')}
                        />
                    </FadeInAndOut>
                </View>
                <View style={styles.Home_style} >
                    {this.state.loginStatus === 201 ? navigationDisplay : LoginDisplay}
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        // height: height
        flex: 1,
    },
    container_flex: {
        top: 150,
        // flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Home_style: {
        flex: 1,
    },
    imageLogo: {
        width: width,
        height: 70,
    },
    imageLogo2: {
        width: width,
        height: 250,
    },
})

export default IntroLogo