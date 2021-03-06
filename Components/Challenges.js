// Components/Challenges.js

import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList,
    Image,
    Text,
    Animated,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import {getUserPartnerShip, checkSponsorShipCode, setDailyPointDate } from '../API/GlobalApiFunctions';
import Css from "../Ressources/Css/Css";
import {connect} from "react-redux";
import { format } from 'date-fns'
// import Carousel from 'react-native-smart-carousel';


class Challenges extends React.Component {

    constructor(props) {
        super(props);
        this.index = 0;
        this.state = {
            isLoading: false,
            user: null,
            sponsorshipCode: null,
            sponsorshipCodeInput: null,
            verifiedSponsorshipCodeInput: false,
            challengePoint: 0,
            dailyPointsDone: false,
            dailyPointsDoneAtDate: null,
            fadeAnim: new Animated.Value(0), // Initial value for opacity: 0,
            curTime: new Date(),
            parrain: null,
            lastDailyPointsDate: null,
        }
    }

    getUser() {
        this.setState({user: this.props.globalUser, challengePoint: this.props.globalUser.challenge_point, sponsorshipCode: this.props.globalUser.sponsorship_code , verifiedSponsorshipCodeInput: this.props.globalUser.sponsorshipchecked, parrainFirstName: this.props.globalUser.partnershipUserFirstname , lastDailyPointsDate: this.props.globalUser.last_daily_points_date , dailyPointsDoneAtDate: new Date(this.props.globalUser.last_daily_points_date)});
        this.dateDiff(new Date(this.props.globalUser.last_daily_points_date), new Date());
    }

    getUserPartnerShip() {
        getUserPartnerShip(this.state.user.id).then((responseJson) => {
            if (responseJson.status !== 404) {
                responseJson.json().then((data) => {
                    this.setState({parrain: data.partnership});
                })
            }
        });
    }

    componentDidMount() {
        this.getUser();
    }

    setDailyPointDate(dailyPointsDoneAtDate) {
        setDailyPointDate(dailyPointsDoneAtDate).then((responseJson) => {
            if (responseJson.status !== 404) {
                responseJson.json().then((data) => {
                })
            }
        });
    }

    AnimationGoldBouton() {
        Animated.timing(
            // Animate over time
            this.state.fadeAnim, // The animated value to drive
            {
                toValue: 1, // Animate to opacity: 1 (opaque)
                duration: 1000, // Make it take a while
            }
        ).start(); // Starts the animation
    }

    ValidationCode(sponsorshipCodeInput) {
        checkSponsorShipCode(sponsorshipCodeInput).then((responseJson) => {
            if (responseJson.status !== 404 || responseJson.status !== 500) {
                responseJson.json().then((data) => {
                    this.setState({verifiedSponsorshipCodeInput: true});
                })
            }
        });
    }

    dateDiff(date1, date2){
        let diff = {};                          // Initialisation du retour
        let tmp = date2 - date1;

        tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60;                    // Extraction du nombre de secondes

        tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
        diff.min = tmp % 60;                    // Extraction du nombre de minutes

        tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
        diff.hour = tmp % 24;                   // Extraction du nombre d'heures

        tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
        diff.day = tmp;

        if (diff.day < 1)
        {
            this.setState({dailyPointsDone: true, fadeAnim: new Animated.Value(1)})
        }

        return diff;
    }

    render() {
        const fadeAnim = this.state.fadeAnim;

        const dailyPointsDoneAtDate = this.state.dailyPointsDoneAtDate;
        const curTimeDailyPointsDone = dailyPointsDoneAtDate ? dailyPointsDoneAtDate.getHours()+":"+dailyPointsDoneAtDate.getMinutes() : null;
        const user = this.state.user;
        const dailyPointsIsDone = this.state.dailyPointsDone;
        const challengePoint = user && this.state.challengePoint ? this.state.challengePoint : 0;

        return (
            <ScrollView style={ Css.main_container_profil}>
                <View style={ Css.infoUser}>
                    <Text style = {[Css.infoText]}>
                        Nombre de points SpN
                    </Text>
                    <Text style = {[Css.infoText]}>
                        {challengePoint} Pts
                    </Text>

                    <TouchableOpacity
                        disabled={dailyPointsIsDone ? true : null}
                        style={[Css.PremiumBtn]}
                        onPress={() => {
                            this.setState({challengePoint: challengePoint+15, dailyPointsDone: true, dailyPointsDoneAtDate: new Date()}, this.AnimationGoldBouton(), this.setDailyPointDate(new Date()));
                        }}>
                        <View style={[Css.flexBtn]}>
                            {/*<Image*/}
                            {/*style={[Css.iconBuModel ]}*/}
                            {/*source={require('../Ressources/Img/plus--v1.png')}*/}
                            {/*/>*/}
                            <Animated.View style={{ opacity: fadeAnim }}>
                                <Image
                                    style={[Css.imageHeader ]}
                                    source={require('../Ressources/Img/goldPiecee.png')}
                                />
                            </Animated.View>
                            <Text style={[Css.dailyPointText]}>Récupérer mes points quotidiens</Text>
                            {dailyPointsIsDone ?
                                <Text style={[Css.btnGrey]}>
                                    Revenez demain à partir de {curTimeDailyPointsDone} pour récupérer de nouveaux points SpN
                                </Text>
                                : null}
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={[Css.btnGrey]}>Revenez chaque jour pour profiter de vos points quotidiens à dépenser dans nos boutiques partenaires </Text>


                <View style={{paddingTop: 40, flexDirection: "column", justifyContent:'center'}}>
                    <TouchableOpacity style={Css.inputParameters} onPress={() => this.props.navigation.navigate("Sponsorship", {
                        sponsorshipCode: this.props.sponsorshipCode || this.state.sponsorshipCode
                    })}>
                        <Text style={ Css.paramName }>Mon code parrainage</Text>
                        <Text style={Css.paramValue}>{this.props.sponsorshipCode || this.state.sponsorshipCode}  ></Text>
                    </TouchableOpacity>
                    <Text style={ Css.indicationValue }>Gagner 100 points SpN pour chaque parrainage efféctué</Text>
                </View>
                { !this.state.verifiedSponsorshipCodeInput ?
                    (
                    <View styles={{paddingBottom: 40}}>
                        <Text style={[Css.headerTitleParam]}>Entrez le code de votre parrain</Text>
                        <TextInput style={[Css.inputParameters, Css.paramName]}
                           value={this.state.sponsorshipCodeInput}
                           placeholder={ this.state.sponsorshipCodeInput || "Code parrainage" }
                           onChangeText={(sponsorshipCodeInput) => {
                               this.setState({sponsorshipCodeInput: sponsorshipCodeInput });
                           }}
                        />
                        <TouchableOpacity style={Css.buttonContainer} onPress={() => {this.ValidationCode(this.state.sponsorshipCodeInput); this.getUserPartnerShip() }}>
                            <Text style={Css.buttonText}>Valider le code</Text>
                        </TouchableOpacity>
                    </View>
                    )
                    :
                    (
                    <View style={{paddingTop: 30, fontSize: 30}}>
                        <Text style={ Css.indicationValue }>Le code de votre parrain a été vérifié !</Text>
                        <Text style={ Css.indicationValue }>Votre parrain est bien  {this.state.parrainFirstName ? this.state.parrainFirstName : null} </Text>
                    </View>
                    )

                }

            </ScrollView>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sponsorshipCode: state.sponsorshipCode,
        globalUser: state.globalUser
    }
};
export default connect(mapStateToProps)(Challenges)