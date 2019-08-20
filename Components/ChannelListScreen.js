import React, { PureComponent } from 'react';
import { SafeAreaView, Text, View} from "react-native";
import { StreamChat } from 'stream-chat';
import {
    Avatar,
    Chat,
    Channel,
    MessageList,
    MessageInput,
    ChannelList,
    IconBadge,
} from 'stream-chat-expo';
import ChannelScreen from "./ChannelScreen";
import MyPartners from './MyPartners'

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
class ChannelListScreen extends PureComponent {
    static navigationOptions = () => ({
        headerTitle: (
            <Text style={{ fontWeight: 'bold' }}>Awesome Conversations</Text>
        ),
    });

    render() {
        return (
            <SafeAreaView>
                <Chat client={chatClient}>
                    <View style={{ display: 'flex', height: '100%', padding: 10 }}>
                        <ChannelList
                            filters={{ type: 'messaging', members: { $in: ['wild-lake-0'] } }}
                            sort={{ last_message_at: -1 }}
                            Preview={MyPartners}
                            onSelect={(channel) => {
                                this.props.navigation.navigate('Channel', {
                                    channel,
                                });
                            }}
                        />
                    </View>
                </Chat>
            </SafeAreaView>
        );
    }
}

export default ChannelListScreen