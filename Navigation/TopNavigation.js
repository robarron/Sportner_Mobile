// Navigation/BottomNavigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'
import AdFeed from '../Components/AdFeed'
import Profil from '../Components/Profil'
import HeaderHome from '../Headers/HeaderHome'
import Home from '../Components/_Home'
import Css from '../Ressources/Css/Css';

const TopStackNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                headerBackTitle: null,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Profil")}>
                        <Image
                        style={[Css.imageHeaderMiddle ]}
                        source={require('../Ressources/Img/iconProfil.png')}
                        />
                    </TouchableOpacity>
                ,
                headerLeft:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Profil")}>
                        <Image
                        style={[Css.imageHeaderMiddle ]}
                        source={require('../Ressources/Img/defis.png')}
                        />
                    </TouchableOpacity>
                ,
                headerTitle:(<Image style={Css.imageHeaderMiddle} source={require('../Ressources/Img/sportnerLogo.png')}/>)
            }),
        },
        HeaderHome: {
            screen: HeaderHome,
            navigationOptions: () => ({
                headerBackTitle: null
            }),
        },
        AdFeed: {
            screen: AdFeed,
            navigationOptions: () => ({
                headerBackTitle: null
            }),
        },
        Profil: {
            screen: Profil,
            navigationOptions: () => ({
                headerBackTitle: null,
                headerBackImage:  <Image
                    style={[Css.imageHeaderMiddle ]}
                    source={require('../Ressources/Img/sportnerLogo.png')}
                />,
            }),
        },
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            gesturesEnabled: false,
        }
    }
);

export default createAppContainer(TopStackNavigator)