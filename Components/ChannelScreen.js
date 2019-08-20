import React from "react";
import {SafeAreaView, Text, View} from "react-native";
import { StreamChat } from 'stream-chat';
import { GiftedChat } from 'react-native-gifted-chat'
import {
    Chat,
    Channel,
    MessageList,
    MessageInput,
} from 'stream-chat-expo';

const chatClient = new StreamChat('f8wwud5et5jd');
const userToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoid2lsZC1sYWtlLTAifQ.vZjKThY1EzYtpkbDT2FghD3vG1n3MWmbjiZGcHaiHJ8';

const user = {
    id: 'wild-lake-0',
    name: 'Wild lake',
    image:
        'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
};

chatClient.setUser(user, userToken);

class ChannelScreen extends React.Component {

    render() {
        const { navigation } = this.props;
        const channel = navigation.getParam('channel');

        return (
            <SafeAreaView>
                <Chat client={chatClient}>
                    <Channel client={chatClient} channel={channel}>
                        <View style={{ display: 'flex', height: '100%' }}>
                            <MessageList />
                            <MessageInput />
                        </View>
                    </Channel>
                </Chat>
            </SafeAreaView>
        );
    }
}

export default ChannelScreen