// Components/Challenges.js

import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Image, Text, ActivityIndicator, TouchableOpacity  } from 'react-native'
import {postImage, HasUserProfilPicture, getUserObject } from '../API/GlobalApiFunctions';
import Css from "../Ressources/Css/Css";
import {connect} from "react-redux";
// import Carousel from 'react-native-smart-carousel';


class Challenges extends React.Component {

    constructor(props) {
        super(props);
        this.index = 0;
        this.state = {
            isLoading: false,
            user: null,
            sponsorshipCode: null,
            challengePoint: 0,
            dailyPointsDone: false
        }
    }

    componentDidMount() {
        getUserObject().then((responseJson) => {
            if (responseJson.status !== 404) {
                responseJson.json().then((data) => {
                    this.setState({user: data, challengePoint: data.challenge_point});
                })
            }
        });
    }

    render() {
        const user = this.state.user;
        const challengePoint = user && this.state.challengePoint ? this.state.challengePoint : 0;
        console.log(this.state.user);
        return (
            <View style={ Css.main_container_profil}>
                <View style={ Css.infoUser}>
                    <Text style = {[Css.infoText]}>
                        Nombre de points SpN
                    </Text>
                    <Text style = {[Css.infoText]}>
                        {challengePoint} Pts
                    </Text>
                </View>

                <TouchableOpacity
                    style={[Css.PremiumBtn]}
                    onPress={() => {
                        this.setState({challengePoint: challengePoint+15, dailyPointsDone: true});
                    }}>
                    <View style={[Css.flexBtn]}>
                        {/*<Image*/}
                        {/*style={[Css.iconBuModel ]}*/}
                        {/*source={require('../Ressources/Img/plus--v1.png')}*/}
                        {/*/>*/}
                        <Text style={[Css.btnPrime]}>Points quotidiens</Text>
                        <Text style={[Css.btnGrey]}>Revenez chaque jour pour profiter de vos points quotidiens à dépenser dans nos boutiques partenaires </Text>
                    </View>
                </TouchableOpacity>

                <View style={{paddingTop: 40, flexDirection: "column", justifyContent:'center'}}>
                    <TouchableOpacity style={Css.inputParameters} onPress={() => this.props.navigation.navigate("Sponsorship", {
                        sponsorshipCode: this.props.sponsorshipCode || this.state.sponsorshipCode
                    })}>
                        <Text style={ Css.paramName }>Mon code parrainage</Text>
                        <Text style={Css.paramValue}>{this.props.sponsorshipCode || this.state.sponsorshipCode}  ></Text>
                    </TouchableOpacity>
                    <Text style={ Css.indicationValue }>Gagner 100 points SpN pour chaque parrainage efféctuer</Text>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sponsorshipCode: state.sponsorshipCode,
    }
};
export default connect(mapStateToProps)(Challenges)