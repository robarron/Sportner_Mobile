import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator  } from 'react-native';
import Css from '../Ressources/Css/Css';
import {connect} from "react-redux";

class ParametersPhone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            phone: "Téléphone"

        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    _toggleParametersInfo() {
        const action = { type: "TOGGLE_USERPHONE", value: this.state.phone };
        this.props.dispatch(action)
    };

    componentWillMount() {
            this.setState({phone: this.props.navigation.getParam('userPhone', null)});
    }

    componentDidUpdate() {
        this._toggleParametersInfo();
    }

    render() {

        return (
            <View style={Css.ParametersContainer}>
                <Text style={[Css.headerTitleParam]}>RÉGLAGES DE CONTENU</Text>
                <TextInput style={[Css.inputParameters, Css.paramName]}
                           value={this.state.phone}
                           placeholder={ this.state.phone }
                           onChangeText={(phone) => {
                               this.setState({phone: phone });
                           }}
                />
            </View>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        userPhone: state.userPhone
    }
};
export default connect(mapStateToProps)(ParametersPhone)