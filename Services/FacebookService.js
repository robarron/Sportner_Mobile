import React from 'react'
import FBSDK from 'react-native-fbsdk'
import {Button, Text, TouchableOpacity, View} from "react-native";
import * as Facebook from 'expo-facebook';
import Css from "../Ressources/Css/Css";

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

    makeLoginButton2() {
        return (
            <View>
                <TouchableOpacity style={Css.buttonContainer} onPress={() => { this.makeLogFbAction() }}>
                    <Text style={Css.buttonText}>COUCOUTOI</Text>
                </TouchableOpacity>
            </View>
        );
    }

    makeLogFbAction() {
        return (
            async function logIn() {
                try {
                    const {
                        type,
                        token,
                        expires,
                        permissions,
                        declinedPermissions,
                    } = await Facebook.logInWithReadPermissionsAsync('402637407039678', {
                        permissions: ['public_profile'],
                    });
                    if (type === 'success') {
                        // Get the user's name using Facebook's Graph API
                        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
                    } else {
                        // type === 'cancel'
                    }
                } catch ({ message }) {
                    alert(`Facebook Login Error: ${message}`);
                }
            }
        )
    }

    async fetchProfile(callback) {
        return new Promise((resolve, reject) => {
            const request = new GraphRequest(
                '/me',
                null,
                (error, result) => {
                    if (result) {
                        const profile = result;
                        profile.avatar = `https://graph.facebook.com/${result.id}/picture`;
                        resolve(profile)
                    } else {
                        reject(error)
                    }
                }
            );

            this.requestManager.addRequest(request).start()
        })
    }
}

export const facebookService = new FacebookService();