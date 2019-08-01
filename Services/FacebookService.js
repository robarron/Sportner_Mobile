import React from 'react'
import { Facebook } from 'expo';
import FBSDK from 'react-native-fbsdk'
import {Button, Text, TouchableOpacity, View} from "react-native";
import { logInWithReadPermissionsAsync } from 'expo-facebook';
import Css from "../Ressources/Css/Css";


let fbLogedStatus = null;
const { LoginButton, AccessToken, GraphRequest, GraphRequestManager } = FBSDK;

class FacebookService {
    constructor() {
        this.requestManager = new GraphRequestManager()
    }

    makeLoginButton(callback) {
        return (
            <LoginButton
                readPermissions={["public_profile"]}
                onLoginFinished={(error, result) => {
                    if (error) {

                    } else if (result.isCancelled) {

                    } else {
                        AccessToken.getCurrentAccessToken()
                            .then((data) => {
                                callback(data.accessToken)
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    }
                }} />
        )
    }

    FacebookSignInBtn() {
        return (
            <View>
                <TouchableOpacity style={Css.buttonContainer} onPress = {this.LogFbAction()}>
                    <Text style={Css.buttonText}>FACEBOOK</Text>
                </TouchableOpacity>
            </View>
        );
    };

    // makeGoogleSignIn() {
    //     console.log("wooow");

        // return (
        //     async function signInWithGoogleAsync() {
        //         try {
        //             console.log("wooow");
        //             await GoogleSignIn.initAsync({ clientId: '458186033389-pbemf78joknodqk2hlcomeb9lo5l7mog.apps.googleusercontent.com' });
        //         } catch ({ message }) {
        //             alert('GoogleSignIn.initAsync(): ' + message);
        //         }
        //         console.log("eula");
        //         try {
        //             await GoogleSignIn.askForPlayServicesAsync();
        //             const { type, user } = await GoogleSignIn.signInAsync();
        //             if (type === 'success') {
        //                 // ...
        //             }
        //         } catch ({ message }) {
        //             alert('login: Error:' + message);
        //         }
        //     }
        // )
    // }

    LogFbAction() {
        return (
            async function logIn() {
                const {
                    type,
                    token
                } = await Facebook.logInWithReadPermissionsAsync("402637407039678", {
                    permissions: ["public_profile", "email"]
                });
                if (type === "success") {
                    // Get the user's name using Facebook's Graph API
                    const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                    // console.log("Logged in!", `Hi ${(await response.json()).name}!`);
                    global.fbLogedStatus = response.status;
                }
            }
        )
    }
}

export const facebookService = new FacebookService();