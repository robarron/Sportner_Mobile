import React from "react";
import {FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Css from "../Ressources/Css/Css";
import Chat from "../Components/Chat";
import {getUserLastConversationMessage} from "../API/GlobalApiFunctions";
import MessageItem from "./MessageItem";

class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.tmp = [];
        this.flatIndex = null;
        const { navigation } = this.props;
        this.state = {
            isLoading: false,
            profilPicture: null,
            infotext: false,
            lastConvInfo: null,
            flatIndex: null,
        }
    }

    render() {
        const userMatches = this.props.userMatches;
        const infoText = this.state.infotext;
        const flatId = this.flatIndex;
        const lastConvInfo = this.tmp ? this.tmp : null;
        return (
            <ScrollView style={{paddingTop: 30, paddingLeft: 15}}>
                <FlatList
                    data={userMatches}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item, index}) => <MessageItem index = {index} userMatches = {userMatches} item = {item} navigate = {this.props.navigate} userId ={this.props.userId}/>
                    }
                />
            </ScrollView>
        )
    }
}

export default Messages