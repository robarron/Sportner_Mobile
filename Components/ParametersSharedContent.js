import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, Switch} from 'react-native';
import Css from '../Ressources/Css/Css';
import { connect } from 'react-redux'
import {batchActions, enableBatching, batchDispatchMiddleware} from 'redux-batched-actions';

class ParametersSharedContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayProfil: true,
            displayPic: true,
            displayMotivations: true,
            displayCaracSportives: true,
            displayDispo: true,
            displayLevel: true,
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

    componentDidMount() {
        this.setState({
            displayProfil: this.props.displayProfil,
            displayPic: this.props.displayPic,
            displayMotivations: this.props.displayMotivations,
            displayCaracSportives: this.props.displayCaracSportives,
            displayDispo: this.props.displayDispo,
            displayLevel: this.props.displayLevel,
        })
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
                        value={this.state.displayProfil}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Photos</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({displayPic: val})}
                        value={this.state.displayPic}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Vos motivations</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({displayMotivations: val})}
                        value={this.state.displayMotivations}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Vos particularités sportives</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({displayCaracSportives: val})}
                        value={this.state.displayCaracSportives}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Vos disponibilités</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({displayDispo: val})}
                        value={this.state.displayDispo}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Votre niveau</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({displayLevel: val})}
                        value={this.state.displayLevel}
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