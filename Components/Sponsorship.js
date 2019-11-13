import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import Css from '../Ressources/Css/Css';
import {connect} from "react-redux";
import {postSponsorShipCode, getUserObject, patchSponsorShipCode} from "../API/GlobalApiFunctions";

class Sponsorship extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sponsorshipCode: "Mon code",
            user: null
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    toggleSponsorship() {
        const action = { type: "TOGGLE_SPONSORSHIPCODE", value: this.state.sponsorshipCode };
        this.props.dispatch(action)
    };

    componentDidUpdate() {
        this.toggleSponsorship();
    }

    componentDidMount() {
        this.setState({sponsorshipCode: this.props.navigation.getParam('sponsorshipCode', null)});
        getUserObject().then((responseJson) => {
            if (responseJson.status !== 404) {
                responseJson.json().then((data) => {
                    this.setState({user: data});
                })
            }
        });
    }

    componentWillUnmount() {
        if (this.state.user && !this.state.user.sponsorship)
        {
            postSponsorShipCode(this.state.sponsorshipCode).then((responseJson) => {
                if (responseJson.status !== 404) {
                    responseJson.json().then((data) => {
                    })
                }
            });
        } else if (this.state.user && this.state.user.sponsorship !== this.state.sponsorshipCode)
        {
            patchSponsorShipCode(this.state.sponsorshipCode).then((responseJson) => {
                if (responseJson.status !== 404) {
                    responseJson.json().then((data) => {
                    })
                }
            });
        }

    }

    render() {
        return (
            <View style={Css.ParametersContainer}>
                <Text style={[Css.headerTitleParam]}>CONFIGURER MON CODE</Text>
                <TextInput style={[Css.inputParameters, Css.paramName]}
                           placeholder={ this.state.sponsorshipCode || "Mon code" }
                           value={this.state.sponsorshipCode}
                           onChangeText={(sponsorshipCode) => this.setState({sponsorshipCode: sponsorshipCode })}
                />
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sponsorshipCode: state.sponsorshipCode
    }
};
export default connect(mapStateToProps)(Sponsorship)