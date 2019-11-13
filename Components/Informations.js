// Components/Informations.js

import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View, Alert, ScrollView, TextInput, Picker} from 'react-native'
import Css from "../Ressources/Css/Css";
import { ImagePicker, Permissions } from 'expo';
import {postImage, patchImage, suppressImage, HasUserProfilPicture, modifyUserInfo} from "../API/GlobalApiFunctions";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from "react-native-datepicker";
import {connect} from "react-redux";

class Informations extends React.Component {

    constructor(props) {
        super(props);
        this.radio_props_level = [
            {label: 'Amateur', value:  0},
            {label: 'Confirmé', value: 1 },
            {label: 'Expert', value: 2 }
        ];
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
            favoriteSport: "",
            city: "",
            sexe: "",
            motivation: "",
            userSportCarac: "",
            level: "",
            mondayDispoBeginning: null,
            mondayDispoClosing: null,
            tuesdayDispoBeginning: null,
            tuesdayDispoClosing: null,
            wednesdayDispoBeginning: null,
            wednesdayDispoClosing: null,
            thursdayDispoBeginning: null,
            thursdayDispoClosing: null,
            fridayDispoBeginning: null,
            fridayDispoClosing: null,
            saturdayDispoBeginning: null,
            saturdayDispoClosing: null,
            sundayDispoBeginning: null,
            sundayDispoClosing: null,
            delProfilPic: false,
            delPic2: false,
            delPic3: false,
            delPic4: false,
            delPic5: false,
            delPic6: false,
        }
    }

    availabilityHandler() {
        return (
            <View>
                <Text style={{marginBottom: 10, padding: 10, fontSize: 20}}>Disponibilités</Text>

                <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent:'center', paddingBottom: 25}}>
                    <Text style={Css.dayTitle}>Lundi</Text>
                    <DatePicker
                        date={this.state.mondayDispoBeginning}
                        mode="time"
                        placeholder={ this.state.mondayDispoBeginning ? this.state.mondayDispoBeginning : 'début' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({mondayDispoBeginning: date})}}
                    />
                    <DatePicker
                        date={this.state.mondayDispoClosing}
                        mode="time"
                        placeholder={ this.state.mondayDispoClosing ? this.state.mondayDispoClosing : 'fin' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({mondayDispoClosing: date})}}
                    />
                    <Text style={Css.dayTitle}>Mardi</Text>
                    <DatePicker
                        date={this.state.tuesdayDispoBeginning}
                        mode="time"
                        placeholder={ this.state.tuesdayDispoBeginning ? this.state.tuesdayDispoBeginning : 'début' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({tuesdayDispoBeginning: date})}}
                    />
                    <DatePicker
                        date={this.state.tuesdayDispoClosing}
                        mode="time"
                        placeholder={ this.state.tuesdayDispoClosing ? this.state.tuesdayDispoClosing : 'fin' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({tuesdayDispoClosing: date})}}
                    />
                    <Text style={Css.dayTitle}>Mercredi</Text>
                    <DatePicker
                        date={this.state.wednesdayDispoBeginning}
                        mode="time"
                        placeholder={ this.state.wednesdayDispoBeginning ? this.state.wednesdayDispoBeginning : 'début' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({wednesdayDispoBeginning: date})}}
                    />
                    <DatePicker
                        date={this.state.wednesdayDispoClosing}
                        mode="time"
                        placeholder={ this.state.wednesdayDispoClosing ? this.state.wednesdayDispoClosing : 'fin' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({wednesdayDispoClosing: date})}}
                    />
                    <Text style={Css.dayTitle}>Jeudi</Text>
                    <DatePicker
                        date={this.state.thursdayDispoBeginning}
                        mode="time"
                        placeholder={ this.state.thursdayDispoBeginning ? this.state.thursdayDispoBeginning : 'début' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({thursdayDispoBeginning: date})}}
                    />
                    <DatePicker
                        date={this.state.thursdayDispoClosing}
                        mode="time"
                        placeholder={ this.state.thursdayDispoClosing ? this.state.thursdayDispoClosing : 'fin' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({thursdayDispoClosing: date})}}
                    />
                    <Text style={Css.dayTitle}>Vendredi</Text>
                    <DatePicker
                        date={this.state.fridayDispoBeginning}
                        mode="time"
                        placeholder={ this.state.fridayDispoBeginning ? this.state.fridayDispoBeginning : 'début' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({fridayDispoBeginning: date})}}
                    />
                    <DatePicker
                        date={this.state.fridayDispoClosing}
                        mode="time"
                        placeholder={ this.state.fridayDispoClosing ? this.state.fridayDispoClosing : 'fin' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({fridayDispoClosing: date})}}
                    />
                    <Text style={Css.dayTitle}>Samedi</Text>
                    <DatePicker
                        date={this.state.saturdayDispoBeginning}
                        mode="time"
                        placeholder={ this.state.saturdayDispoBeginning ? this.state.saturdayDispoBeginning : 'début' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({saturdayDispoBeginning: date})}}
                    />
                    <DatePicker
                        date={this.state.saturdayDispoClosing}
                        mode="time"
                        placeholder={ this.state.saturdayDispoClosing ? this.state.saturdayDispoClosing : 'fin' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({saturdayDispoClosing: date})}}
                    />
                    <Text style={Css.dayTitle}>Dimanche</Text>
                    <DatePicker
                        date={this.state.sundayDispoBeginning}
                        mode="time"
                        placeholder={ this.state.sundayDispoBeginning ? this.state.sundayDispoBeginning : 'début' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({sundayDispoBeginning: date})}}
                    />
                    <DatePicker
                        date={this.state.saturdayDispoClosing}
                        mode="time"
                        placeholder={ this.state.saturdayDispoClosing ? this.state.saturdayDispoClosing : 'fin' }
                        format="LT"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                borderWidth: 0,
                                color: '#fff',
                            }
                        }}
                        onDateChange={(date) => {this.setState({saturdayDispoClosing: date})}}
                    />
                </View>
            </View>
        )
    }

    componentDidMount() {
        const { navigation } = this.props;

        this.setState({
            hasUserPicture: navigation.getParam('hasPictures'),
            userImages: navigation.getParam('userImages', false),
            favoriteSport:this.props.globalUser.favorite_sport,
            city: this.props.globalUser.city,
            sexe: this.props.globalUser.sexe,
            motivation: this.props.globalUser.motivation,
            userSportCarac: this.props.globalUser.sport_caractertics,
            level: this.props.globalUser.level,
            mondayDispoBeginning: this.props.globalUser.monday_beginning_hour,
            mondayDispoClosing: this.props.globalUser.monday_finish_hour,
            tuesdayDispoBeginning: this.props.globalUser.tuesday_beginning_hour,
            tuesdayDispoClosing: this.props.globalUser.tuesday_finish_hour,
            wednesdayDispoBeginning: this.props.globalUser.wednesday_beginning_hour,
            wednesdayDispoClosing: this.props.globalUser.wednesday_finish_hour,
            thursdayDispoBeginning: this.props.globalUser.thursday_beginning_hour,
            thursdayDispoClosing: this.props.globalUser.thursday_finish_hour,
            fridayDispoBeginning: this.props.globalUser.friday_beginning_hour,
            fridayDispoClosing: this.props.globalUser.friday_finish_hour,
            saturdayDispoBeginning: this.props.globalUser.saturday_beginning_hour,
            saturdayDispoClosing: this.props.globalUser.saturday_finish_hour,
            sundayDispoBeginning: this.props.globalUser.sunday_beginning_hour,
            sundayDispoClosing: this.props.globalUser.sunday_finish_hour,
        });
    }

    componentWillUnmount(){
        modifyUserInfo(

            this.state.motivation,
            this.state.userSportCarac,
            this.state.sexe,
            this.state.city,
            this.state.favoriteSport,
            this.state.level,
            this.state.mondayDispoBeginning,
            this.state.mondayDispoClosing,
            this.state.tuesdayDispoBeginning,
            this.state.tuesdayDispoClosing,
            this.state.wednesdayDispoBeginning,
            this.state.wednesdayDispoClosing,
            this.state.thursdayDispoBeginning,
            this.state.thursdayDispoClosing,
            this.state.fridayDispoBeginning,
            this.state.fridayDispoClosing,
            this.state.saturdayDispoBeginning,
            this.state.saturdayDispoClosing,
            this.state.sundayDispoBeginning,
            this.state.sundayDispoClosing
        ).then((response) => {
            return response.json().then((data) => {
            })
        }).then((json) => {
            // console.log(json);
        });
    }

    AlertSuppressImage = () => {
        Alert.alert(
            'Confirmation',
            '',
            [
                {text: 'Voulez vous supprimer cette photo ?', onPress: () =>
                        suppressImage(this.state.picNumber).then((responseJson) => {
                            this.state.picNumber === "profil_pic" ?  this.setState({profil_pic : null, delProfilPic: true}) : null;
                            this.state.picNumber === "pic2" ?  this.setState({pic2 : null, delPic2: true}) : null;
                            this.state.picNumber === "pic3" ?  this.setState({pic3 : null, delPic3: true}) : null;
                            this.state.picNumber === "pic4" ?  this.setState({pic4 : null, delPic4: true}) : null;
                            this.state.picNumber === "pic5" ?  this.setState({pic5 : null, delPic5: true}) : null;
                            this.state.picNumber === "pic6" ?  this.setState({pic6 : null, delPic6: true}) : null;
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

            if (!result.cancelled) {
                this.setState({image: result.uri});
            }

            if ((!this.props.globalUser.profil_pic && !this.props.globalUser.pic2 && !this.props.globalUser.pic3 && !this.props.globalUser.pic4 && !this.props.globalUser.pic5 && !this.props.globalUser.pic6) && (!this.state.profil_pic && !this.state.pic2 && !this.state.pic3 && !this.state.pic4 && !this.state.pic5 && !this.state.pic6))
            {
                postImage(this.state.picNumber, result.base64).then((responseJson) => {
                    this.setState({hasUserPicture: true});
                    this.state.picNumber === "profil_pic" ?  this.setState({profil_pic : result.base64, delProfilPic: false}) : null;
                    this.state.picNumber === "pic2" ?  this.setState({pic2 : result.base64, delPic2: false}) : null;
                    this.state.picNumber === "pic3" ?  this.setState({pic3 : result.base64, delPic3: false}) : null;
                    this.state.picNumber === "pic4" ?  this.setState({pic4 : result.base64, delPic4: false}) : null;
                    this.state.picNumber === "pic5" ?  this.setState({pic5 : result.base64, delPic5: false}) : null;
                    this.state.picNumber === "pic6" ?  this.setState({pic6 : result.base64, delPic6: false}) : null;

                }).catch((error) => {
                    return Promise.reject(error);
                });
            } else {
                patchImage(this.state.picNumber, result.base64).then((responseJson) => {
                    responseJson.json().then((data) => {
                        this.state.picNumber === "profil_pic" ?  this.setState({profil_pic : result.base64, delProfilPic: false}) : null;
                        this.state.picNumber === "pic2" ?  this.setState({pic2 : result.base64, delPic2: false}) : null;
                        this.state.picNumber === "pic3" ?  this.setState({pic3 : result.base64, delPic3: false}) : null;
                        this.state.picNumber === "pic4" ?  this.setState({pic4 : result.base64, delPic4: false}) : null;
                        this.state.picNumber === "pic5" ?  this.setState({pic5 : result.base64, delPic5: false}) : null;
                        this.state.picNumber === "pic6" ?  this.setState({pic6 : result.base64, delPic6: false}) : null;
                    });
                }).catch((error) => {
                    return Promise.reject(error);
                });
            }

        }
    };

    render() {
        let user =      this.props.globalUser;
        let profilPic = this.state.profil_pic || this.state.delProfilPic ? this.state.profil_pic : user.profil_pic;
        let pic2 =      this.state.pic2 || this.state.delPic2 ? this.state.pic2 : user.pic2;
        let pic3 =      this.state.pic3 || this.state.delPic3 ? this.state.pic3 : user.pic3;
        let pic4 =      this.state.pic4 || this.state.delPic4 ? this.state.pic4 : user.pic4;
        let pic5 =      this.state.pic5 || this.state.delPic5 ? this.state.pic5 : user.pic5;
        let pic6 =      this.state.pic6 || this.state.delPic6 ? this.state.pic6 : user.pic6;

        return (
            <ScrollView style={Css.main_container_login}>
                <Text style={Css.headerTitle}>Gérer vos photos</Text>

                <View style = {{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', paddingBottom: 20  }} >
                    { profilPic ?
                        <TouchableOpacity
                            onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "profil_pic"})}} key={"profil_pic"}>
                            <Image
                                style={Css.picturesHandler}
                                source={{uri: 'data:image/jpeg;base64,' + profilPic}}
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
                    { pic2 ?
                        <TouchableOpacity
                            onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "pic2"})}}>
                            <Image
                                style={Css.picturesHandler}
                                source={{uri: 'data:image/jpeg;base64,' + pic2}}
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
                    { pic3 ?
                        <TouchableOpacity
                            onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "pic3"})}}>
                            <Image
                                style={Css.picturesHandler}
                                source={{uri: 'data:image/jpeg;base64,' + pic3}}
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
                    { pic4 ?
                        <TouchableOpacity
                            onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "pic4"})}}>
                            <Image
                                style={Css.picturesHandler}
                                source={{uri: 'data:image/jpeg;base64,' + pic4}}
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
                    { pic5 ?
                        <TouchableOpacity
                            onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "pic5"})}}>
                            <Image
                                style={Css.picturesHandler}
                                source={{uri: 'data:image/jpeg;base64,' + pic5}}
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
                    { pic6 ?
                        <TouchableOpacity
                            onPress={this.AlertSuppressImage} onPressIn={() => {this.setState({picNumber: "pic6"})}}>
                            <Image
                                style={Css.picturesHandler}
                                source={{uri: 'data:image/jpeg;base64,' + pic6}}
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


                <Text style={Css.headerTitle}>A propos de moi</Text>
                <View style={[Css.textAreaContainer]} >
                    <TextInput
                        style={Css.textArea}
                        underlineColorAndroid="transparent"
                        placeholder={this.state.motivation ? this.state.motivation : "Votre motivation et état d'esprit"}
                        placeholderTextColor="grey"
                        numberOfLines={3}
                        multiline={true}
                        onChangeText={(motivation) => this.setState({motivation: motivation })}
                        onSubmitEditing={() => this.sportCaracInput.focus()}
                    />
                </View>
                <View style={Css.textAreaContainer} >
                    <TextInput
                        style={Css.textArea}
                        underlineColorAndroid="transparent"
                        placeholder={this.state.userSportCarac ? this.state.userSportCarac : "Vos Caractéristiques de sportifs (points fort / points faibles)"}
                        placeholderTextColor="grey"
                        numberOfLines={3}
                        multiline={true}
                        onChangeText={(userSportCarac) => this.setState({userSportCarac: userSportCarac })}
                        ref={(input)=> this.sportCaracInput = input}
                    />
                </View>
                <Picker selectedValue = {this.state.sexe} onValueChange={(itemValue, itemIndex) =>
                    this.setState({sexe: itemValue})}
                        itemStyle={[Css.infoPicker]}
                        value={this.state.sexe}
                        ref={(input)=> this.sexeInput = input}
                        onSubmitEditing={() => this.cityInput.focus()}
                >
                    <Picker.Item label = "Sexe" value = "null" />
                    <Picker.Item label = "Homme" value = "homme" />
                    <Picker.Item label = "Femme" value = "femme" />
                </Picker>
                <TextInput style = {Css.infoInput}
                           autoCapitalize="none"
                           autoCorrect={false}
                           returnKeyType="next"
                           ref={(input)=> this.cityInput = input}
                           placeholder={ this.state.city ? this.state.city : 'Ville' }
                           placeholderTextColor='black'
                           onChangeText={(city) => this.setState({city: city })}
                           onSubmitEditing={() => this.sportInput.focus()}
                />
                <TextInput style = {Css.infoInput}
                           autoCapitalize="none"
                           autoCorrect={false}
                           returnKeyType="next"
                           ref={(input)=> this.sportInput = input}
                           onSubmitEditing={() => this.levelInput.focus()}
                           placeholder={ this.state.favoriteSport ? this.state.favoriteSport : 'Sport préféré' }
                           placeholderTextColor='black'
                           onChangeText={(favoriteSport) => this.setState({favoriteSport: favoriteSport })}
                />
                <Text style={{marginBottom: 10, padding: 10, fontSize: 20}}>Niveau sportif</Text>
                <RadioForm style={{marginBottom: 20}}
                    radio_props={this.radio_props_level}
                    value={this.state.level}
                    initial={this.state.level ? this.state.level : 0}
                    onPress={(value) => {this.setState({level:value})}}
                    ref={(input)=> this.levelInput = input}
                />
                {this.availabilityHandler()}
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        globalUser: state.globalUser
    }
};
export default connect(mapStateToProps)(Informations)