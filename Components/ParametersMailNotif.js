import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList,
    Text,
    ActivityIndicator,
    Switch,
    TouchableOpacity
} from 'react-native';
import Css from '../Ressources/Css/Css';
import {connect} from "react-redux";

class ParametersMailNotif extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matchNotif: true,
            msgNotif: true,
            majNotif: true,
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    dontReceivedEmail() {
        this.setState({
            matchNotif: false,
            msgNotif: false,
            majNotif: false
        })
    }

    ReceivedEmail() {
        this.setState({
            matchNotif: true,
            msgNotif: true,
            majNotif: true
        })
    }

    _toggleParametersInfo() {
        const action1 = { type: "TOGGLE_MATCH_NOTIF", value: this.state.matchNotif};
        const action2 = { type: "TOGGLE_MSG_NOTIF", value: this.state.msgNotif};
        const action3 = { type: "TOGGLE_MAJ_NOTIF", value: this.state.majNotif};
        this.props.dispatch(action1);
        this.props.dispatch(action2);
        this.props.dispatch(action3);
    };

    componentDidUpdate() {
        this._toggleParametersInfo();
    }

    componentDidMount() {
        this.setState({
            matchNotif: this.props.matchNotif,
            msgNotif: this.props.msgNotif,
            majNotif: this.props.majNotif,
        })
    }

    render() {
        const trackColor= {
            true: '#6495ED'
        };

        return (
            <View style={Css.ParametersContainer}>
                <Text style={[Css.headerTitleParam]}>NOTIFICATIONS E-MAIL</Text>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Nouveaux Matchs</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({matchNotif: val})}
                        value={this.state.matchNotif}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Nouveaux messages</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({msgNotif: val})}
                        value={this.state.msgNotif}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Offres et mises à jour</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({majNotif: val})}
                        value={this.state.majNotif}
                        trackColor={trackColor}
                    />
                </View>
                <TouchableOpacity style={Css.shareParameters} onPress={() => { this.dontReceivedEmail()}}>
                    <Text style={ Css.paramName }>Ne plus recevoir aucun e-mails</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Css.shareParameters} onPress={() => { this.ReceivedEmail()}}>
                    <Text style={ Css.paramName }>Activer toutes les notifications e-mails</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        matchNotif: state.matchNotif,
        msgNotif: state.msgNotif,
        majNotif: state.majNotif,
    }
};
export default connect(mapStateToProps)(ParametersMailNotif)