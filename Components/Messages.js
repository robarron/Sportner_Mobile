import React from "react";
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import { StreamChat } from 'stream-chat';
import { GiftedChat } from 'react-native-gifted-chat'
import {
    Chat,
    Channel,
    MessageList,
    MessageInput,
} from 'stream-chat-expo';
import Css from "../Ressources/Css/Css";


class Messages extends React.Component {

    render() {

        return (
            <View style={ Css.main_container_profil}>
                <View style={{flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center', paddingTop: 40}}>
                    {/*<FlatList*/}
                        {/*data={this.state.films}*/}
                        {/*keyExtractor={(item) => item.id.toString()}*/}
                        {/*renderItem={({item}) => <FilmItem film={item}/>}*/}
                    {/*/>*/}
                    <TouchableOpacity>
                        <Text style={ Css.paramName }>Messages</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default Messages