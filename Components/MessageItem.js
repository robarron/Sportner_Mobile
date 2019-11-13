import React from "react";
import {FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Css from "../Ressources/Css/Css";
import Chat from "../Components/Chat";
import {getUserLastConversationMessage} from "../API/GlobalApiFunctions";

class MessageItem extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.count = 0;
        this.state = {
            isLoading: false,
            profilPicture: null,
            userLastMsg : null,
            infotext: false,
        }
    }

    getUserConversationMessage (senderId, receptorId) {
        this.count = this.count + 1;
        if (this.count < this.props.userMatches.length)
        {
            getUserLastConversationMessage(senderId, receptorId).then((responseJson) => {
                responseJson.json().then(responseJson => {
                    if (responseJson.id) {
                        this.setState({infotext: true});
                        this.props.item.last_conversation = responseJson.text;
                        this.props.item.last_conversation_creation_date = responseJson.createdAt
                    }
                }).catch((error) => {
                    return Promise.reject(error);
                });
            });
        }
    }

    render() {
        const item = this.props.item;
        let infotext = this.state.infotext;
        this.getUserConversationMessage(this.props.userId, this.props.item.user_id)
        return (
            <TouchableOpacity style={{flexDirection: 'row', paddingBottom: 15}} onPress = {() => {this.props.navigate("Chat", {
                userId: item.user_id,
            })}}>
                {/*{        this.getUserConversationMessage(this.props.userId, this.props.item.user_id)*/}
                {/*}*/}

                <Image
                    style={Css.picturesPicto}
                    source={{uri: 'data:image/jpeg;base64,'+item.profil_pic}}
                />
                <View style={{ width: '75%'}}>
                    <Text style={ Css.convText }>{item.user_first_name} {item.user_last_name}</Text>
                        {infotext
                        ?
                        (
                            <View style={{flexDirection: 'row',
                                justifyContent: 'space-between'}}>
                                <Text>{item.last_conversation}</Text>
                                <Text>{item.last_conversation_creation_date}</Text>
                            </View>
                        )
                        :
                            <Text>{"Lancer la discussion"}</Text>
                        }
                </View>
            </TouchableOpacity>
        )
    }
}

export default MessageItem