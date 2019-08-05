// Components/Informations.js

import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native'
import Css from "../Ressources/Css/Css";
import { ImagePicker, Permissions } from 'expo';
import {postImage, patchImage, suppressImage, HasUserProfilPicture} from "../API/GlobalApiFunctions";

class Informations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            picNumber: null,
            hasUserPicture: false,
            userImages: null,
            profil_pic: null,
            pic2: null,
            pic3: null,
            pic4: null,
            pic5: null,
            pic6: null,
        }
    }

    checkUserProfilPicture = () => {
        HasUserProfilPicture().then(response => {
            return response.json()
        }).then(responseJson => {
            if (responseJson.length !== 0) {
                this.setState({hasPictures: true,
                    profil_pic: responseJson[0].profil_pic,
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
        const { navigation } = this.props;
        this.setState({
            hasUserPicture: navigation.getParam('hasPictures'),
            userImages: navigation.getParam('userImages', false),
        });
        this.checkUserProfilPicture();
    }

    AlertSuppressImage = () => {
        Alert.alert(
            'Confirmation',
            '',
            [
                {text: 'Voulez vous supprimer cette photo ?', onPress: () =>
                        suppressImage(this.state.picNumber).then((responseJson) => {

                            this.state.picNumber == "profil_pic" ? this.setState({profil_pic: null}) : null;
                            this.state.picNumber == "pic2" ? this.setState({pic2: null}) : null;
                            this.state.picNumber == "pic3" ? this.setState({pic3: null}) : null;
                            this.state.picNumber == "pic4" ? this.setState({pic4: null}) : null;
                            this.state.picNumber == "pic5" ? this.setState({pic5: null}) : null;
                            this.state.picNumber == "pic6" ? this.setState({pic6: null}) : null;
                        }).catch((error) => {
                            return Promise.reject(error);
                        })
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            {cancelable: false},
        );
    };

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

            // Upload the image using the fetch and FormData APIs
            let formData = new FormData();
            formData.append('photo', { uri: localUri});
            formData.append('userEmail',  global.getUserEmail);
            formData.append(this.state.picNumber, result.base64 );
            if (!result.cancelled) {
                this.setState({image: result.uri});
            }

            console.log(this.state.hasUserPicture + 'before post');
            if (!this.state.profil_pic && !this.state.pic2 && !this.state.pic3 && !this.state.pic4 && !this.state.pic5 && !this.state.pic6)
            {
                postImage(this.state.picNumber, result.base64).then((responseJson) => {
                    // console.log(responseJson);
                    console.log(this.state.picNumber);
                    console.log(this.state.hasUserPicture + "before setstate");

                    this.setState({hasUserPicture: true});
                    this.state.picNumber == "profil_pic" ? this.setState({profil_pic: result.base64}) : null;
                    this.state.picNumber == "pic2" ? this.setState({pic2: result.base64}) : null;
                    this.state.picNumber == "pic3" ? this.setState({pic3: result.base64}) : null;
                    this.state.picNumber == "pic4" ? this.setState({pic4: result.base64}) : null;
                    this.state.picNumber == "pic5" ? this.setState({pic5: result.base64}) : null;
                    this.state.picNumber == "pic6" ? this.setState({pic6: result.base64}) : null;
                    console.log(this.state.hasUserPicture + "after setstate");
                }).catch((error) => {
                    return Promise.reject(error);
                });
            } else {
                patchImage(this.state.picNumber, result.base64).then((responseJson) => {
                    console.log(this.state.picNumber);
                    this.state.picNumber == "profil_pic" ? this.setState({profil_pic: result.base64}) : null;
                    this.state.picNumber == "pic2" ? this.setState({pic2: result.base64}) : null;
                    this.state.picNumber == "pic3" ? this.setState({pic3: result.base64}) : null;
                    this.state.picNumber == "pic4" ? this.setState({pic4: result.base64}) : null;
                    this.state.picNumber == "pic5" ? this.setState({pic5: result.base64}) : null;
                    this.state.picNumber == "pic6" ? this.setState({pic6: result.base64}) : null;
                }).catch((error) => {
                    return Promise.reject(error);
                });
            }

        }
    };

    PicturesHandler = () => {

       return <View style = {{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'  }} >
           { this.state.profil_pic ?
               <TouchableOpacity
                   onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "profil_pic"})}} key={"profil_pic"}>
                   <Image
                       style={Css.picturesHandler}
                       source={{uri: 'data:image/jpeg;base64,' + this.state.profil_pic}}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/crossIcon.png')}
                   />
               </TouchableOpacity>
               :
               <TouchableOpacity
                   onPress={this._pickImage} onPressIn={() => {this.setState({picNumber: "profil_pic"})}} key={"profil_pic"}>
                   <Image
                       style={Css.picturesHandler}
                       source={require('../Ressources/Img/noProfilImg.png')}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/iconPlus.png')}
                   />
               </TouchableOpacity>
           }
           { this.state.pic2 ?
               <TouchableOpacity
                   onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "pic2"})}}>
                   <Image
                       style={Css.picturesHandler}
                       source={{uri: 'data:image/jpeg;base64,' + this.state.pic2}}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/crossIcon.png')}
                   />
               </TouchableOpacity>
               :
               <TouchableOpacity
                   onPress={this._pickImage} onPressIn={() => {this.setState({picNumber: "pic2"})}} key={"pic2"}>
                   <Image
                       style={Css.picturesHandler}
                       source={require('../Ressources/Img/noProfilImg.png')}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/iconPlus.png')}
                   />
               </TouchableOpacity>
           }
           { this.state.pic3 ?
               <TouchableOpacity
                   onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "pic3"})}}>
                   <Image
                       style={Css.picturesHandler}
                       source={{uri: 'data:image/jpeg;base64,' + this.state.pic3}}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/crossIcon.png')}
                   />
               </TouchableOpacity>
               :
               <TouchableOpacity
                   onPress={this._pickImage} onPressIn={() => {this.setState({picNumber: "pic3"})}} key={"pic3"}>
                   <Image
                       style={Css.picturesHandler}
                       source={require('../Ressources/Img/noProfilImg.png')}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/iconPlus.png')}
                   />
               </TouchableOpacity>
           }
           { this.state.pic4 ?
               <TouchableOpacity
                   onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "pic4"})}}>
                   <Image
                       style={Css.picturesHandler}
                       source={{uri: 'data:image/jpeg;base64,' + this.state.pic4}}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/crossIcon.png')}
                   />
               </TouchableOpacity>
               :
               <TouchableOpacity
                   onPress={this._pickImage} onPressIn={() => {this.setState({picNumber: "pic4"})}} key={"pic4"}>
                   <Image
                       style={Css.picturesHandler}
                       source={require('../Ressources/Img/noProfilImg.png')}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/iconPlus.png')}
                   />
               </TouchableOpacity>
           }
           { this.state.pic5 ?
               <TouchableOpacity
                   onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "pic5"})}}>
                   <Image
                       style={Css.picturesHandler}
                       source={{uri: 'data:image/jpeg;base64,' + this.state.pic5}}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/crossIcon.png')}
                   />
               </TouchableOpacity>
               :
               <TouchableOpacity
                   onPress={this._pickImage} onPressIn={() => {this.setState({picNumber: "pic5"})}} key={"pic5"}>
                   <Image
                       style={Css.picturesHandler}
                       source={require('../Ressources/Img/noProfilImg.png')}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/iconPlus.png')}
                   />
               </TouchableOpacity>
           }
           { this.state.pic6 ?
               <TouchableOpacity
                   onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "pic6"})}}>
                   <Image
                       style={Css.picturesHandler}
                       source={{uri: 'data:image/jpeg;base64,' + this.state.pic6}}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/crossIcon.png')}
                   />
               </TouchableOpacity>
               :
               <TouchableOpacity
                   onPress={this._pickImage} onPressIn={() => {this.setState({picNumber: "pic6"})}} key={"pic6"}>
                   <Image
                       style={Css.picturesHandler}
                       source={require('../Ressources/Img/noProfilImg.png')}
                   />
                   <Image
                       style={Css.crossPlusIcon}
                       source={require('../Ressources/Img/iconPlus.png')}
                   />
               </TouchableOpacity>
           }
       </View>
    };

    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{ paddingTop: 10, marginBottom: 20}}>Gérer vos photos</Text>

                { this.PicturesHandler() }
            </View>
        )
    }
}

export default Informations