import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator  } from 'react-native';
import Css from '../Ressources/Css/Css';
import {connect} from "react-redux";

class Sponsorship extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sponsorshipCode: "Mon code",
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