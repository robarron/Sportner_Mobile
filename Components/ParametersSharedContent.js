import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, Switch} from 'react-native';
import Css from '../Ressources/Css/Css';
import { connect } from 'react-redux'

class ParametersSharedContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayProfil: null,
            displayPic: null,
            displayMotivations: null,
            displayCaracSportives: null,
            displayDispo: null,
            displayLevel: null,
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    _toggleParametersInfo() {

        const action1 = { type: "TOGGLE_DISPLAYPROFIL", value: this.state.displayProfil};
        const action2 = { type: "TOGGLE_DISPLAYPIC", value: this.state.displayPic};
        const action3 = { type: "TOGGLE_DISPLAYMOTIVATIONS", value: this.state.displayMotivations};
        const action4 = { type: "TOGGLE_DISPLAYCARAC_SPORTIVES", value: this.state.displayCaracSportives};
        const action5 = { type: "TOGGLE_DISPLAYDISPO", value: this.state.displayDispo};
        const action6 = { type: "TOGGLE_DISPLAYLEVEL", value: this.state.displayLevel};
        this.props.dispatch(action1);
        this.props.dispatch(action2);
        this.props.dispatch(action3);
        this.props.dispatch(action4);
        this.props.dispatch(action5);
        this.props.dispatch(action6);

    };

    componentDidUpdate() {
        this._toggleParametersInfo();
    }

    componentWillMount() {
        this.setState({
            displayProfil: this.props.navigation.getParam('displayProfil', null),
            displayPic: this.props.navigation.getParam('displayPic', null),
            displayMotivations: this.props.navigation.getParam('displayMotiv', null),
            displayCaracSportives: this.props.navigation.getParam('displayCaracSportives', null),
            displayDispo: this.props.navigation.getParam('displayDispo', null),
            displayLevel: this.props.navigation.getParam('displayLevel', null),
        });
    }
    render() {
        const trackColor= {
            true: '#6495ED'
        };

        return (
            <View style={Css.ParametersContainer}>
                <Text style={[Css.headerTitleParam]}>CONTENU PARTAGÉ</Text>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Afficher mon profil sur Sportner</Text>
                    <Switch
                        onValueChange={(val) => this.setState({displayProfil: val})}
                        value={this.props.displayProfil !== null ? this.props.displayProfil : this.state.displayProfil}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Photos</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({displayPic: val})}
                        value={this.props.displayPic !== null ? this.props.displayPic : this.state.displayPic}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Vos motivations</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({displayMotivations: val})}
                        value={this.props.displayMotivations !== null ? this.props.displayMotivations : this.state.displayMotivations}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Vos particularités sportives</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({displayCaracSportives: val})}
                        value={this.props.displayCaracSportives != null ? this.props.displayCaracSportives : this.state.displayCaracSportives}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Vos disponibilités</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({displayDispo: val})}
                        value={this.props.displayDispo !== null ? this.props.displayDispo : this.state.displayDispo}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Votre niveau</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({displayLevel: val})}
                        value={this.props.displayLevel !== null ? this.props.displayLevel : this.state.displayLevel}
                        trackColor={trackColor}
                    />
                </View>
            </View>

        )

    }
}
const mapStateToProps = (state) => {
    return {
        displayProfil: state.displayProfil,
        displayPic: state.displayPic,
        displayMotivations: state.displayMotivations,
        displayCaracSportives: state.displayCaracSportives,
        displayDispo: state.displayDispo,
        displayLevel: state.displayLevel,
    }
};
export default connect(mapStateToProps )(ParametersSharedContent)