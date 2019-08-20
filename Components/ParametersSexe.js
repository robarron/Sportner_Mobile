import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator  } from 'react-native';
import Css from '../Ressources/Css/Css';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {connect} from "react-redux";

class ParametersSexe extends React.Component {

    constructor(props) {
        super(props);
        this.radio_props_level = [
            {label: 'Femmes', value: 0 },
            {label: 'Hommes', value: 1 },
            {label: 'Tout le monde', value: 2 }
        ];
        this.state = {
            checked: 'first',
            sexeValue: 0
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    _toggleParametersInfo() {
        const action = { type: "TOGGLE_SEXE_WANTED", value: this.state.sexeValue };
        this.props.dispatch(action)
    };

    componentWillMount() {
        this.setState({sexeValue: this.props.navigation.getParam('sexeValue', null)});
    }

    componentDidUpdate() {
        this._toggleParametersInfo();
    }

    render() {
        // console.log(this.state.sexeValue);
        const sexeVal = (this.state.sexeValue === 1) ? 1 : 0;

        return (
            <View style={Css.ParametersContainer}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={[Css.headerTitleParam]}>GENRE SPORTIF RECHERCHÉ</Text>
                    <View style={{backgroundColor: '#F0F4F6', width: '100%', flexDirection: 'column', alignItems: 'center'}}>
                        <RadioForm style={{marginBottom: 20, paddingTop: 20}}
                                   radio_props={this.radio_props_level}
                                   onPress={(value) => {this.setState({sexeValue:value})}}
                                   initial={sexeVal}
                                   formHorizontal={true}
                                   labelHorizontal={false}
                        />
                    </View>
                </View>
            </View>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        sexe: state.sexe
    }
};
export default connect(mapStateToProps)(ParametersSexe)