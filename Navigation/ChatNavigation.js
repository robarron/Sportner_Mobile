import React from "react";
import {createAppContainer, createStackNavigator, createDrawerNavigator} from "react-navigation";
import ChannelListScreen from '../Components/ChannelListScreen';
import ChannelScreen from '../Components/ChannelScreen';
import Css from "../Ressources/Css/Css";
import {Image, Text, TouchableOpacity} from "react-native";
import MyPartners from "../Components/MyPartners";
import Messages from "../Components/Messages";
import AdFeed from "../Components/AdFeed";
import Chat from "../Components/Chat";
import FeedComment from "../Components/FeedComment";

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
                headerLeft: null,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Partenaires")}>
                        <Text style={Css.textHeaderBack}> Retour </Text>
                    </TouchableOpacity>
                ,
            }
        },
        FeedComment: {
            screen: FeedComment,
            navigationOptions: {
                headerTitle: (
                    <Text style={{ fontWeight: 'bold' }}>Commentaires</Text>
                ),
                headerLeft: null,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Partenaires")}>
                        <Text style={Css.textHeaderBack}> Retour </Text>
                    </TouchableOpacity>
                ,
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
