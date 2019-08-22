import React from "react";
import {createAppContainer, createStackNavigator, createDrawerNavigator} from "react-navigation";
import ChannelListScreen from '../Components/ChannelListScreen';
import ChannelScreen from '../Components/ChannelScreen';
import Css from "../Ressources/Css/Css";
import {Image, Text} from "react-native";
import MyPartners from "../Components/MyPartners";
import Messages from "../Components/Messages";
import AdFeed from "../Components/AdFeed";
import Chat from "../Components/Chat";

const ChatNavigation = createStackNavigator(
    {
        Partenaires: {
            screen: MyPartners,
            navigationOptions: {
                headerTitle: (
                    <Text style={{ fontWeight: 'bold' }}>Mes partenaires</Text>
                ),
            }
        },
        Chat: {
            screen: Chat,
            navigationOptions: {
                headerTitle: (
                    <Text style={{ fontWeight: 'bold' }}>Conversation</Text>
                ),
            }
        },
        ChannelList: {
            screen: ChannelListScreen,
        },
        Messages: {
            screen: Messages,
        },
        AdFeed: {
            screen: AdFeed,
        },
        Channel: {
            screen: ChannelScreen,
        },
    },
    {
        initialRouteName: 'Partenaires',
    },
);

export default createAppContainer(ChatNavigation)
