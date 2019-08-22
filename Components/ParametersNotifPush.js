import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator, Switch} from 'react-native';
import Css from '../Ressources/Css/Css';
import {connect} from "react-redux";

class ParametersNotifPush extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            matchPush: true,
            msgPush: true,
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    _toggleParametersInfo() {
        const action1 = { type: "TOGGLE_PUSH_MATCH", value: this.state.matchPush};
        const action2 = { type: "TOGGLE_PUSH_MESSAGE", value: this.state.msgPush};
        this.props.dispatch(action1);
        this.props.dispatch(action2);
    };

    componentDidMount() {
        this.setState({
            matchPush: this.props.navigation.getParam('matchPush', null),
            msgPush: this.props.navigation.getParam('msgPush', null),
        })
    }

    componentDidUpdate() {
        this._toggleParametersInfo();
    }

    render() {
        const trackColor= {
            true: '#6495ED'
        };
        return (
            <View style={Css.ParametersContainer}>
                <Text style={[Css.headerTitleParam]}>NOTIFICATIONS PUSH</Text>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Nouveaux Matchs</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({matchPush: val})}
                        value={this.props.matchPush || this.state.matchPush}
                        trackColor={trackColor}
                    />
                </View>
                <View style={Css.inputParameters}>
                    <Text style={ Css.paramName }>Nouveaux messages</Text>
                    <Switch
                        onValueChange={ (val) => this.setState({msgPush: val})}
                        value={this.props.msgPush || this.state.msgPush}
                        trackColor={trackColor}
                    />
                </View>
            </View>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        matchPush: state.matchPush,
        msgPush: state.msgPush,
    }
};
export default connect(mapStateToProps)(ParametersNotifPush)