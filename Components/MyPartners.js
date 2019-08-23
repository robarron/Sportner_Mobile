// Components/Favorites.js

import { Text, TouchableOpacity, View} from 'react-native'
import Css from "../Ressources/Css/Css";
import {getAllUserMatches, getFeeds} from "../API/GlobalApiFunctions";
import React, { PureComponent } from 'react';
import Messages from "./Messages";
import AdFeed from "./AdFeed";
import {connect} from "react-redux";

class MyPartners extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            messages: [],
            msgFocus: false,
            adFocus: false,
            userFeeds: [],
            userMatches: [],
        }
    }

    _toggleFeeds() {
        const action = { type: "TOGGLE_USER_FEEDS", value: this.state.userFeeds };
        this.props.dispatch(action)
    };

    _toggleMatchs() {
        const action = { type: "TOGGLE_USER_MATCHES", value: this.state.userMatches };
        this.props.dispatch(action)
    };

    componentDidUpdate() {
        this._toggleFeeds();
        this._toggleMatchs();
    }

    componentDidMount() {
        if (this.props.globalUser) {
            getAllUserMatches(this.props.globalUser.id).then((responseJson) => {
                return responseJson.json().then((data) => {
                    this.setState({userMatches: data, msgFocus: true});
                });
            });
            getFeeds(this.props.globalUser.id).then((responseJson) => {
                return responseJson.json().then((data) => {
                    this.setState({userFeeds: data});
                });
            });
        }
    }

    render() {
        // const { channel } = this.props;
        const userFeeds = this.props.userFeeds;
        const userMatches = this.props.userMatches;
        const user = this.props.globalUser ? this.props.globalUser : null;
        const msgFocus = this.state.msgFocus;
        return (
            <View style={ Css.main_container_profil}>
                <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>{user ? user.first_name : null} {user ? user.last_name : null}</Text>
                <View style={{flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between', paddingTop: 40}}>
                    <TouchableOpacity style={Css.sectionChat} onPress={() => this.setState({msgFocus: true, adFocus: false})}>
                        <Text style={ Css.paramName }>Messages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Css.sectionChat} onPress={() => this.setState({adFocus: true, msgFocus: false})}>
                        <Text style={ Css.paramName }>Annonces</Text>
                    </TouchableOpacity>
                </View>
                {
                    msgFocus
                        ?
                        (
                            <Messages userMatches = {userMatches} navigate = {this.props.navigation.navigate} userId ={this.props.globalUser ? this.props.globalUser.id : null}/>
                        )
                        :
                        (
                            <AdFeed userFeeds = {userFeeds} navigate = {this.props.navigation.navigate} userId ={this.props.globalUser ? this.props.globalUser.id : null}/>
                        )
                }
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        globalEmailUser: state.globalEmailUser,
        globalUser: state.globalUser,
        allImagesList: state.allImagesList,
        userFeeds: state.userFeeds,
        userMatches: state.userMatches
    }
};
export default connect(mapStateToProps)(MyPartners)