// Components/Parameters.js

import React from 'react'
import {
    Image,
    ScrollView,
    Slider,
    Text,
    TouchableOpacity,
    View, Share
} from 'react-native'
import Css from "../Ressources/Css/Css";
import { Dialog } from 'react-native-simple-dialogs';
import {connect} from "react-redux";
import {getUserParameter, patchUserParameters, postUserParameters } from '../API/GlobalApiFunctions';

class Parameters extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,
            picNumber: null,
            modalVisible: false,
            modal2Visible: false,
            modal3Visible: false,
            modal4Visible: false,
            distance: 50,
            userPlacement: [],
            minAge: 18,
            maxAge: 50,
            displayProfil:         true,
            displayPic:            true,
            displayMotivations:    true,
            displayCaracSportives: true,
            displayDispo:          true,
            displayLevel:          true,
            userPhone: "Téléphone",
            userMail: "E-mail",
            sexeValue: null,
            sexeName: "Tout le monde",
            msgPush: true,
            matchPush: true,
            notif_maj: true,
            notif_match: true,
            notif_message: true
        }
    }

    deconnexion() {
        // this.props.navigation.dispatch(
        //     NavigationActions.reset({
        //         index: 0,
        //         key: null,
        //         actions: [NavigationActions.navigate({ routeName: "Home" })]
        //     })
        // );
        // this.props.navigation.dismiss();
        global.getJwtToken = null;
    }

    componentWillMount() {
        getUserParameter().then((response) => {
            return response.json().then((json) => {
                if (json) {
                    this.setState({
                        userParams: json,
                        minAge: json.min_age_search,
                        maxAge: json.max_age_search,
                        displayProfil:         json.display_profil,
                        displayPic:            json.display_pic,
                        displayMotivations:    json.display_motivations,
                        displayCaracSportives: json.display_carac_sportives,
                        displayDispo:          json.display_dispo,
                        displayLevel:          json.display_level,
                        userPhone: json.user.phone_number,
                        userMail: json.user.email,
                        sexeValue: json.gender_search.value,
                        sexeName: json.gender_search.name,
                        msgPush: json._msg_push,
                        matchPush: json._match_push,
                        notif_maj: json.notif_maj,
                        notif_match: json.notif_match,
                        notif_message: json.notif_message
                    });

                }
            })
        })
    }

    componentWillUnmount() {
        if (this.state.userParams) {
            patchUserParameters(this.props.userPhone,
                this.props.userMail,
                this.props.userPlacement,
                this.state.distance,
                this.props.sexe,
                this.state.minAge,
                this.state.maxAge,
                this.props.displayProfil,
                this.props.displayPic,
                this.props.displayMotivations,
                this.props.displayCaracSportives,
                this.props.displayDispo,
                this.props.displayLevel,
                this.props.matchNotif,
                this.props.msgNotif,
                this.props.majNotif,
                this.props.matchPush,
                this.props.msgPush
            ).then((response => {
                // console.log(response);
            }))
        }
        else {
            postUserParameters(
                this.props.userPhone,
                this.props.userMail,
                this.props.userPlacement,
                this.state.distance,
                this.props.sexe,
                this.state.minAge,
                this.state.maxAge,
                this.props.displayProfil,
                this.props.displayPic,
                this.props.displayMotivations,
                this.props.displayCaracSportives,
                this.props.displayDispo,
                this.props.displayLevel,
                this.props.matchNotif,
                this.props.msgNotif,
                this.props.majNotif,
                this.props.matchPush,
                this.props.msgPush,
            ).then((response => {
                // console.log(response);
            }))
        }
    }

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Salut ! J\'ai découvert une application qui permet de trouver des partenaires sportifs rapidement ! Viens jeter un coup d\'oeil à l\'application de matching sportif Sportner !' ,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    _handleToggleSwitch = () =>
        this.setState(state => ({
            displayProfil: !state.displayProfil,
        }));

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    setModal2Visible(visible) {
        this.setState({modal2Visible: visible});
    }

    setModal3Visible(visible) {
        this.setState({modal3Visible: visible});
    }

    setModal4Visible(visible) {
        this.setState({modal4Visible: visible});
    }
    render() {
        const trackColor= {
            true: '#6495ED'
        };

        // let caca = this.props.navigation.getParam('displayProfil', 'rien');
        // console.log(willFocusSubscription);
        // console.log(this.state.displayProfil);
        return (
            <ScrollView style={ Css.main_container_profil}>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity
                        style={[Css.PremiumBtn]}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}>
                        <View style={[Css.flexBtn]}>
                            {/*<Image*/}
                                {/*style={[Css.iconBuModel ]}*/}
                                {/*source={require('../Ressources/Img/plus--v1.png')}*/}
                            {/*/>*/}
                            <Text style={[Css.btnPrime]}>Sportner Prime</Text>
                            <Text style={[Css.btnGrey]}>Des Likes illimités et bien plus !</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Css.PremiumBtn]}
                        onPress={() => {
                            this.setModal2Visible(true);
                        }}>
                        <View style={[Css.flexBtn]}>
                            {/*<Image*/}
                                {/*style={[Css.iconBuModel ]}*/}
                                {/*source={require('../Ressources/Img/plus--v1.png')}*/}
                            {/*/>*/}
                            <Text style={[Css.btnGold]}>Sportner Gold</Text>
                            <Text style={[Css.btnGrey]}>Débloquer nos fonctionnalités clés du moment !</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', paddingBottom: 25, justifyContent: 'space-around'}}>
                    <TouchableOpacity
                        style={[Css.PremiumBtn2]}
                        onPress={() => {
                            this.setModal3Visible(true);
                        }}>
                        <View style={[Css.flexBtn]}>
                            {/*<Image*/}
                                {/*style={[Css.iconBuModel ]}*/}
                                {/*source={require('../Ressources/Img/plus--v1.png')}*/}
                            {/*/>*/}
                            <Text style={[Css.btnBoost]}>Matching Boost</Text>
                            <Text style={[Css.btnGrey2]}>La Rapidité avant tout !</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[Css.PremiumBtn2]}
                        onPress={() => {
                            this.setModal4Visible(true);
                        }}>
                        <View style={[Css.flexBtn]}>
                            {/*<Image*/}
                                {/*style={[Css.iconBuModel ]}*/}
                                {/*source={require('../Ressources/Img/plus--v1.png')}*/}
                            {/*/>*/}
                            <Text style={[Css.btnSponso]}>Profil Sponsorisé</Text>
                            <Text style={[Css.btnGrey2]}>Booster vos produits !</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Dialog
                    visible={this.state.modalVisible}
                    title="Sportner Prime"
                    onTouchOutside={() => this.setState({modalVisible: false})} >
                    <View style={Css.dialogContent}>
                        <Text>Bientôt disponible !</Text>
                    </View>
                </Dialog>
                <Dialog
                    visible={this.state.modal2Visible}
                    title="Sportner Gold"
                    onTouchOutside={() => this.setState({modal2Visible: false})} >
                    <View style={Css.dialogContent}>
                        <Text>Bientôt disponible !</Text>
                    </View>
                </Dialog>
                <Dialog
                    visible={this.state.modal3Visible}
                    title="Matching Boost"
                    onTouchOutside={() => this.setState({modal3Visible: false})} >
                    <View style={Css.dialogContent}>
                        <Text>Bientôt disponible !</Text>
                    </View>
                </Dialog>
                <Dialog
                    visible={this.state.modal4Visible}
                    title="Profil Sponsorisé"
                    onTouchOutside={() => this.setState({modal4Visible: false})} >
                    <View style={Css.dialogContent}>
                        <Text>Bientôt disponible !</Text>
                    </View>
                </Dialog>

                <Text style={[Css.headerTitleParam]}>RÉGLAGES</Text>
                <TouchableOpacity style={Css.inputParameters} onPress={() => this.props.navigation.navigate("ParametersPhone", {
                    userPhone: this.props.userPhone || this.state.userPhone,
                })}>
                    <Text style={ Css.paramName }>Numéro de téléphone</Text>
                    <Text style={Css.paramValue}>{this.props.userPhone || this.state.userPhone}  ></Text>
                </TouchableOpacity>
                <TouchableOpacity style={Css.inputParameters} onPress={() => this.props.navigation.navigate("ParametersMail", {
                    userMail: this.props.userMail || this.state.userMail
                })}>
                    <Text style={ Css.paramName }>Adresse e-mail</Text>
                    <Text style={Css.paramValue}>{this.props.userMail || this.state.userMail}  ></Text>
                </TouchableOpacity>

                <Text style={[Css.headerTitleParam]}>DÉCOUVERTE</Text>
                <TouchableOpacity style={Css.inputParameters} onPress={() => this.props.navigation.navigate("ParametersPlacement", {
                    userPlacement: this.props.userPlacement || this.state.userPlacement[1]
                })}>
                    <Text style={ Css.paramName }>Emplacement</Text>
                    <Text style={Css.paramValue}>{this.props.userPlacement || this.state.userPlacement[1]}  ></Text>
                </TouchableOpacity>
                <View style={Css.inputSlider}>
                    <View style={Css.sliderParameters}>
                        <Text style={ Css.paramName }>Distance maximale</Text>
                        <Text style={Css.paramValue}>{this.state.distance + ' km'}</Text>
                    </View>
                    <Slider
                        style={[Css.slider]}
                        minimumValue={0}
                        maximumValue={100}
                        value={this.state.distance}
                        minimumTrackTintColor="#6495ED"
                        maximumTrackTintColor="#00FFFF"
                        onValueChange={(val) =>this.setState({distance: val})}
                        step={1}
                    />
                </View>
                <TouchableOpacity style={Css.inputParametersCity} onPress={() => this.props.navigation.navigate("ParametersSexe", {
                    sexeValue: this.props.sexe || this.state.sexeValue
                })}>
                        <Text style={ Css.paramName }>Montrez moi</Text>
                        <Text style={Css.paramValue}>{this.props.sexe ? (this.props.sexe === 0 ? "Femmes" : (this.props.sexe === 1 ? "Hommes" : "Tout le monde")) : this.state.sexeName }  ></Text>
                </TouchableOpacity>
                <View style={Css.inputDoubleSlider}>
                    <View style={Css.sliderParameters}>
                        <Text style={ Css.paramName }>Tranche d'âge</Text>
                        <Text style={Css.paramValue}>{this.state.minAge} - {this.state.maxAge} ans</Text>
                    </View>
                    <Slider
                        style={[Css.slider]}
                        minimumValue={0}
                        maximumValue={100}
                        value={this.state.minAge}
                        minimumTrackTintColor="#6495ED"
                        maximumTrackTintColor="#00FFFF"
                        onValueChange={(val) =>this.setState({minAge: val})}
                        step={1}
                    />
                    <Slider
                        style={[Css.slider]}
                        minimumValue={0}
                        maximumValue={100}
                        value={this.state.maxAge}
                        minimumTrackTintColor="#6495ED"
                        maximumTrackTintColor="#00FFFF"
                        onValueChange={(val) =>this.setState({maxAge: val})}
                        step={1}
                    />
                </View>
                <Text style={[Css.headerTitleParam]}>RÉGLAGES DE CONTENU</Text>
                <TouchableOpacity style={Css.inputParameters} onPress={() => this.props.navigation.navigate("ParametersSharedContent", {
                    displayProfil: this.props.displayProfil !== null ? this.props.displayProfil : this.state.displayProfil,
                    displayPic: this.props.displayPic !== null ? this.props.displayPic :  this.state.displayPic,
                    displayMotiv: this.props.displayMotiv !== null ? this.props.displayMotiv :  this.state.displayMotiv,
                    displayCaracSportives: this.props.displayCaracSportives !== null ? this.props.displayCaracSportives :  this.state.displayCaracSportives,
                    displayDispo: this.props.displayDispo !== null ? this.props.displayDispo :  this.state.displayDispo,
                    displayLevel: this.props.displayLevel !== null ? this.props.displayLevel :  this.state.displayLevel,
                })}>
                    <Text style={ Css.paramName }>Contenu partagé</Text>
                    <Text style={Css.paramValue}> ></Text>
                </TouchableOpacity>
                <Text style={[Css.headerTitleParam]}>NOTIFICATIONS</Text>
                <TouchableOpacity style={Css.inputParameters} onPress={() => this.props.navigation.navigate("ParametersMailNotif", {
                    notif_maj: this.props.majNotif !== null ? this.props.notif_maj : this.state.notif_maj,
                    notif_match: this.props.matchNotif !== null ? this.props.notif_match : this.state.notif_match,
                    notif_message: this.props.msgNotif !== null ? this.props.notif_message : this.state.notif_message})}>
                    <Text style={ Css.paramName }>Adresse e-mail</Text>
                    <Text style={Css.paramValue}> {this.props.majNotif}></Text>
                </TouchableOpacity>
                <TouchableOpacity style={Css.inputParameters} onPress={() => this.props.navigation.navigate("ParametersNotifPush", {
                    matchPush: this.state.matchPush,
                    msgPush: this.state.msgPush,
                })}>
                    <Text style={ Css.paramName }>Notifications Push</Text>
                    <Text style={Css.paramValue}> ></Text>
                </TouchableOpacity>
                <TouchableOpacity style={Css.shareParameters} onPress={this.onShare}>
                    <Text style={ Css.paramName }>Partager Sportner à vos amis sportifs</Text>
                </TouchableOpacity>
                <Text style={[Css.headerTitleParam]}>CONTACTEZ-NOUS</Text>
                <TouchableOpacity style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Aide et Assistance</Text>
                    <Text style={Css.paramValue}> ></Text>
                </TouchableOpacity>
                <Text style={[Css.headerTitleParam]}>MENTIONS LÉGALES</Text>
                <TouchableOpacity style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Politique de confidentialité</Text>
                    <Text style={Css.paramValue}> ></Text>
                </TouchableOpacity>
                <TouchableOpacity style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Conditions d'utilisation</Text>
                    <Text style={Css.paramValue}> ></Text>
                </TouchableOpacity>
                <TouchableOpacity style={Css.shareParameters} onPress={this.deconnexion}>
                    <Text style={ Css.paramName }>Déconnexion</Text>
                </TouchableOpacity>
                <View style={{paddingTop: 30, paddingBottom: 50, alignItems: 'center'}}>
                    <Image style={{resizeMode: 'contain',
                        width: 120,
                        height: 60}} source={require('../Ressources/Img/sportnerLogo.png')}/>
                </View>
            </ScrollView>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        sexe: state.sexe,
        userPhone: state.userPhone,
        userMail: state.userMail,
        userPlacement: state.userPlacement,
        displayProfil: state.displayProfil,
        displayPic: state.displayPic,
        displayMotivations: state.displayMotivations,
        displayCaracSportives: state.displayCaracSportives,
        displayDispo: state.displayDispo,
        displayLevel: state.displayLevel,
        matchNotif: state.matchNotif,
        msgNotif: state.msgNotif,
        majNotif: state.majNotif,
        matchPush: state.matchPush,
        msgPush: state.msgPush,
    }
};
export default connect(mapStateToProps)(Parameters)