// Components/Profil.js

import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Image, Text, ActivityIndicator, TouchableOpacity  } from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMBAPI' // import { } from ... car c'est un export nommé dans TMDBApi.js
import { getUserObject, postImage } from '../API/GlobalApiFunctions';
import { ImagePicker, Permissions } from 'expo';
import Css from "../Ressources/Css/Css";
import { FileSystem } from 'expo';
import {loginFormValidate, passwordValidate, usernameValidate} from "../Validators/LoginValidator";



class Profil extends React.Component {

    constructor(props) {
        super(props)
        this._films = []
        this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
        this.state = {
            films: [],
            isLoading: false,
            image: null,
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    _pickImage = async () => {
        const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (permission.status !== 'granted') {
            const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (newPermission.status === 'granted') {
                //its granted.
            }
        } else {
            let result = await ImagePicker.launchImageLibraryAsync({
                base64: true,
                allowsEditing: true,
                aspect: [4, 3],
            });
            // ImagePicker saves the taken photo to disk and returns a local URI to it
            let localUri = result.uri;
            let filename = localUri.split('/').pop();

            // Infer the type of the image
            let match = /\.(\w+)$/.exec(filename);

            // Upload the image using the fetch and FormData APIs
            let formData = new FormData();
            // Assume "photo" is the name of the form field the server expects
            formData.append('photo', { uri: localUri, name: filename});
            formData.append('userEmail',  global.getUserEmail, 'profilImage', true );
            formData.append('profilImage', true );
            formData.append('base64', result.base64 );

            if (!result.cancelled) {
                this.setState({image: result.uri});
            }

            postImage(formData).then((responseJson) => {
                console.log(responseJson);
            }).catch((error) => {
                return Promise.reject(error);
            });
        }
    };
render() {
    return (
        <View style={ styles.main_container_profil}>
            <Text>
                Mon Profil
            </Text>
            { this.state.image ?
                (   <Image
                        style={Css.profilesImage}
                        source={{uri: this.state.image}}
                    />
                ) : null
            }
            <TouchableOpacity
                style={styles.button}
                onPress={this._pickImage}>
                <Text style={styles.buttonText}>Ajouter une photo</Text>
            </TouchableOpacity>
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
})

export default Profil