import React from "react";
import {FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Css from "../Ressources/Css/Css";
import Chat from "../Components/Chat";


class Messages extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.state = {
            isLoading: false,
            profilPicture: null,
        }
    }

    render() {
        const userMatches = this.props.userMatches;
        // console.log(userMatches);
        return (
            <ScrollView style={{paddingTop: 30, paddingLeft: 15}}>
                <FlatList
                    data={userMatches}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) =>
                        <TouchableOpacity style={{flexDirection: 'row', paddingBottom: 15}} onPress = {() => {this.props.navigate("Chat", {
                            userId: item.user_id,
                        })}}>
                            <Image
                                style={Css.picturesPicto}
                                source={{uri: 'data:image/jpeg;base64,'+item.profil_pic}}
                            />
                            <Text style={ Css.convText }>{item.user_first_name} {item.user_last_name}</Text>
                        </TouchableOpacity>
                    }
                />
            </ScrollView>
        )
    }
}

export default Messages