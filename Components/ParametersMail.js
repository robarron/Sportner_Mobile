import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator  } from 'react-native';
import Css from '../Ressources/Css/Css';
import {connect} from "react-redux";

class ParametersMail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mail: "E-mail",
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    _toggleParametersInfo() {
        const action = { type: "TOGGLE_USERMAIL", value: this.state.mail };
        this.props.dispatch(action)
    };

    componentDidUpdate() {
        this._toggleParametersInfo();
    }

    componentWillMount() {
        this.setState({mail: this.props.navigation.getParam('userMail', null)});
    }

    render() {
        return (
            <View style={Css.ParametersContainer}>
                <Text style={[Css.headerTitleParam]}>ADRESSE E-MAIL</Text>
                <TextInput style={[Css.inputParameters, Css.paramName]}
                           placeholder={ this.state.mail }
                           value={this.state.mail}
                           onChangeText={(mail) => this.setState({mail: mail })}
                />
            </View>

        )

    }
}
const mapStateToProps = (state) => {
    return {
        userMail: state.userMail
    }
};
export default connect(mapStateToProps)(ParametersMail)