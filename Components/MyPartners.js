// Components/Favorites.js

import {ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native'
import Css from "../Ressources/Css/Css";
import {getUserObject} from "../API/GlobalApiFunctions";
import React, { PureComponent } from 'react';
import Messages from "./Messages";
import AdFeed from "./AdFeed";

class MyPartners extends React.Component {
    channelPreviewButton = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            user: null,
            messages: [],
            msgFocus: true,
            adFocus: false,
        }
    }

    componentWillMount() {
        getUserObject().then((responseJson) => {
            if (responseJson.status !== 404) {
                responseJson.json().then((data) => {
                    this.setState({user: data});
                })
            }
        });
    }

    render() {
        // const { channel } = this.props;
        // const unreadCount = channel.countUnread();
        const user = this.state.user;
        const msgFocus = this.state.msgFocus;
        return (
            <View style={ Css.main_container_profil}>
                <Text style={{fontSize: 20, textAlign: 'center', fontWeight: 'bold', paddingTop: 10 }}>Romain Barron</Text>
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
                            <Messages/>
                        )
                        :
                        (
                            <AdFeed/>
                        )
                }
            </View>
        )
    }
}

export default MyPartners