// Components/Profil.js

import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Image, Text, ActivityIndicator, TouchableOpacity  } from 'react-native'
import {postImage, HasUserProfilPicture, getUserObject } from '../API/GlobalApiFunctions';
import { ImagePicker, Permissions } from 'expo';
import Css from "../Ressources/Css/Css";



class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            isLoading: false,
            image: null,
            hasPictures: false,
            profilPicture: false,
            pic2: false,
            pic3: false,
            pic4: false,
            pic5: false,
            pic6: false,
        }
    }

    checkUserProfilPicture = () => {
        HasUserProfilPicture().then(response => {
            return response.json()
        }).then(responseJson => {
            console.log(responseJson);
            if (responseJson.length !== 0) {
                console.log("CA PASSE LA ?");
                this.setState({hasPictures: true,
                    profilPicture: responseJson[0].profil_pic,
                    pic2: responseJson[0].pic2,
                    pic3: responseJson[0].pic3,
                    pic4: responseJson[0].pic4,
                    pic5: responseJson[0].pic5,
                    pic6: responseJson[0].pic6,})
            }
        }).catch((error) => {
                return Promise.reject(error);
            });
    };

    componentDidMount() {
        this.checkUserProfilPicture();
        getUserObject();
    }

render() {
    return (
        <View style={ Css.main_container_profil}>
            <View style={ Css.infoUser}>
                {/*<TouchableOpacity*/}
                    {/*style={styles.button}*/}
                    {/*onPress={this._pickImage}>*/}
                    {/*<Text style={styles.buttonText}>Ajouter une photo</Text>*/}
                {/*</TouchableOpacity>*/}

                { this.state.profilPicture ?
                    (
                        <Image
                            style={Css.profilesImage}
                            source={{uri: 'data:image/jpeg;base64,' + this.state.profilPicture}}
                        />
                    )
                :
                    (
                        <Image
                            style={Css.profilesImage}
                            source={require('../Ressources/Img/noProfilImg.png')}
                        />
                    )
                }
                {/*<Text style = {[Css.infoText]}>*/}
                    {/*{global.getCurrentUser.first_name}, {global.getCurrentUser.age}*/}
                {/*</Text>*/}
                {/*<Text style = {[Css.infoText]}>*/}
                    {/*{global.getCurrentUser.favorite_sport}*/}
                {/*</Text>*/}

                {/*{*/}
                    {/*global.getCurrentUser.rating ?*/}
                        {/*(*/}
                            {/*<Text style = {[Css.infoText]}>*/}
                                {/*{global.getCurrentUser.rating}*/}
                            {/*</Text>*/}
                        {/*)*/}
                        {/*:*/}
                        {/*(*/}
                            {/*<Text style = {[Css.infoText]}>*/}
                                {/*Pas encore d'évaluation*/}
                            {/*</Text>*/}
                        {/*)*/}
                {/*}*/}

            </View>
            <View style={Css.parametersBtn}>
                <TouchableOpacity onPress={() => global.getNavigationProps("Parameters")} >
                    <Image
                        style={Css.changeInfoBtn}
                        source={require('../Ressources/Img/reglages.png')}
                    />
                    <Text style = {[Css.infoText]}>
                        Réglages
                    </Text>
                </TouchableOpacity>
                { console.log(global.getCurrentUser)}
                <TouchableOpacity onPress={() => {
                    global.getNavigationProps("Informations", {
                        hasPictures: this.state.hasPictures,
                        userImages: global.getCurrentUser.images
                        });
                }} >
                    <Image
                        style={Css.changeInfoBtn}
                        source={require('../Ressources/Img/changeInfo.png')}
                    />
                    <Text style = {[Css.infoText]}>
                        Modifier vos informations
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    buttonText: {
        fontSize: 21,
    },
    button: {
        padding: 13,
        margin: 15,
        backgroundColor: '#dddddd',
        borderRadius: 10,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Profil