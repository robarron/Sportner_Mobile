// Navigation/TopNavigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import {StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'
import AdFeed from '../Components/AdFeed'
import Profil from '../Components/Profil'
import HeaderHome from '../Headers/HeaderHome'
import Parameters from '../Components/Parameters'
import Home from '../Components/_Home'
import Css from '../Ressources/Css/Css';
import Informations from '../Components/Informations'

const TopStackNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                headerBackTitle: null,
                headerLeft:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Profil")}>
                        <Image
                            style={[Css.imageHeaderMiddle ]}
                            source={require('../Ressources/Img/defis.png')}
                        />
                    </TouchableOpacity>
                ,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Profil")}>
                        <Image
                        style={[Css.imageHeaderMiddle ]}
                        source={require('../Ressources/Img/iconProfil.png')}
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
                headerTitle:(<Image style={Css.imageHeaderMiddle} source={require('../Ressources/Img/iconProfil.png')}/>)
            }),
        },
        Parameters: {
            screen: Parameters,
            navigationOptions: () => ({
                headerBackTitle: null,
                headerBackImage:  <Image
                    style={[Css.imageHeaderMiddle ]}
                    source={require('../Ressources/Img/sportnerLogo.png')}
                />,
                headerTitle:(<Text style={Css.textHeaderMiddle}> Réglages </Text>)
            }),
        },
        Informations: {
            screen: Informations,
            navigationOptions: () => ({
                headerBackTitle: null,
                headerBackImage:  <Image
                    style={[Css.imageHeaderMiddle ]}
                    source={require('../Ressources/Img/sportnerLogo.png')}
                />,
                headerTitle:(<Text style={Css.textHeaderMiddle}> Informations </Text>)
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