// Navigation/BottomNavigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import AdFeed from '../Components/AdFeed'
import MyPartners from '../Components/MyPartners'
import Home from '../Components/_Home'
import Css from '../Ressources/Css/Css';

const TopStackNavigator = createStackNavigator(
    {
        Home: Home,
        AdFeed: AdFeed,
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none',
        defaultNavigationOptions: {
            gesturesEnabled: false,
        }
    }
);

export default createAppContainer(TopStackNavigator)