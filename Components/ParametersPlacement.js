import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, TouchableOpacity, Platform} from 'react-native';
import Css from '../Ressources/Css/Css';
import Constants from 'expo-constants';
// import * as Location from 'expo-location';
import {Permissions } from 'expo';
import {connect} from "react-redux";

class ParametersPlacement extends React.Component {

    state = {
        locationCoord: null,
        locationName: null,
        errorMessage: null,
        userPlacement: []
    };

    componentDidMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _toggleParametersInfo() {
        const action = { type: "TOGGLE_USERPLACEMENT", value: this.state.userPlacement};
        this.props.dispatch(action);
    };

    componentDidUpdate() {
        this._toggleParametersInfo();
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }
        let userPlacement = [];
        let location = await Location.getCurrentPositionAsync({});

        let coord = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
        };

        let city = await Location.reverseGeocodeAsync(coord);

        this.setState({ locationCoord: location, locationName: city[0] });

        userPlacement = [
            this.state.locationName.region,
            this.state.locationName.city,
            this.state.locationName.postalCode,
        ];
        this.setState({userPlacement: userPlacement});
    };

    render() {
        let text = 'Waiting..';
        let userPlacement = [];
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.locationName) {
            text = this.state.locationName;
            text = text.region + " - " + text.city + " - -" + text.postalCode;
        }

        return (
            <View style={Css.ParametersContainer}>
                <Text style={[Css.headerTitleParam]}>MA LOCALISATION </Text>
                <View style={Css.inputParameters} onPress={() => ""}>
                    <Text style={[Css.paramName]}>{text}</Text>
                </View>
            </View>


        )

    }
}

const mapStateToProps = (state) => {
    return {
        userPlacement: state.userPlacement,
    }
};
export default connect(mapStateToProps)(ParametersPlacement)