import React from "react";
import {createAppContainer, createStackNavigator, createDrawerNavigator} from "react-navigation";
import {Image, Text, TouchableOpacity} from "react-native";
import Event from "../Components/Event";
import EventItem from "../Components/EventItem";
import Css from "../Ressources/Css/Css";

const EventNavigation = createStackNavigator(
    {
        Event: {
            screen: Event,
            navigationOptions: {
                headerTitle: (
                    <Text style={{ fontWeight: 'bold' }}>Évènements</Text>
                ),
                headerLeft: null,
            }
        },
        EventItem: {
            screen: EventItem,
            navigationOptions: {
                headerTitle: null,
                headerLeft:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Event")}>
                        <Text style={Css.textHeaderBack}> Retour </Text>
                    </TouchableOpacity>
                ,
                headerRight: null,
            }
        },
    },
    {
        initialRouteName: 'Event',
    },
);

export default createAppContainer(EventNavigation)
