// Navigation/TopNavigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import {StyleSheet, Image, TouchableOpacity, Text, back} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createSwitchNavigator } from 'react-navigation'
import AdFeed from '../Components/AdFeed'
import Profil from '../Components/Profil'
import Login from '../Components/Login'
import HeaderHome from '../Headers/HeaderHome'
import Parameters from '../Components/Parameters'
import Challenges from '../Components/Challenges'
import Sponsorship from '../Components/Sponsorship'
import Products from '../Components/Products'
import Home from '../Components/_Home'
import ParametersMail from '../Components/ParametersMail'
import ParametersMailNotif from '../Components/ParametersMailNotif'
import ParametersNotifPush from '../Components/ParametersNotifPush'
import ParametersPhone from '../Components/ParametersPhone'
import ParametersPlacement from '../Components/ParametersPlacement'
import ParametersSexe from '../Components/ParametersSexe'
import ParametersSharedContent from '../Components/ParametersSharedContent'
import Css from '../Ressources/Css/Css';
import Informations from '../Components/Informations'

const TopStackNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: () => ({
                headerBackTitle: (<Text style={Css.textHeaderBack}> Terminer </Text>),
                headerLeft:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Challenges")}>
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
                headerTitle:(<Text style={Css.textHeaderMiddle}> Mon profil </Text>),
                headerBackTitle: (<Text style={Css.textHeaderBack}> Terminer </Text>),
            }),
        },
        Challenges: {
            screen: Challenges,
            navigationOptions: () => ({
                headerTitle:(<Text style={Css.textHeaderMiddle}> Mes défis </Text>),
                headerBackTitle: (<Text style={Css.textHeaderBack}> Terminer </Text>),
                headerRight: <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Products")}>
                    <Image
                        style={[Css.imageHeaderMiddle ]}
                        source={require('../Ressources/Img/products.png')}
                    />
                </TouchableOpacity>,
            }),
        },
        Products: {
            screen: Products,
            navigationOptions: () => ({
                headerTitle:(<Text style={Css.textHeaderMiddle}> Mon défis </Text>),
                headerBackTitle: (<Text style={Css.textHeaderBack}> Terminer </Text>),
            }),
        },
        Sponsorship: {
            screen: Sponsorship,
            navigationOptions: () => ({
                headerTitle:(<Text style={Css.textHeaderMiddle}> Mon code Parrainage </Text>),
                headerLeft: null,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Challenges")}>
                        <Text style={Css.textHeaderBack}> Terminer </Text>
                    </TouchableOpacity>
                ,
            }),
        },
        ParametersMail: {
            screen: ParametersMail,
            navigationOptions: () => ({
                headerTitle:(<Text style={Css.textHeaderMiddle}> Adresse E-mail </Text>),
                headerLeft: null,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Parameters")}>
                        <Text style={Css.textHeaderBack}> Terminer </Text>
                    </TouchableOpacity>
                ,
            }),
        },
        ParametersMailNotif: {
            screen: ParametersMailNotif,
            navigationOptions: () => ({
                headerTitle:(<Text style={Css.textHeaderMiddle}> Notifications E-mail </Text>),
                headerLeft: null,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Parameters")}>
                        <Text style={Css.textHeaderBack}> Terminer </Text>
                    </TouchableOpacity>
                ,
            }),
        },
        ParametersNotifPush: {
            screen: ParametersNotifPush,
            navigationOptions: () => ({
                headerTitle:(<Text style={Css.textHeaderMiddle}> Notifications Push </Text>),
                headerLeft: null,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Parameters")}>
                        <Text style={Css.textHeaderBack}> Terminer </Text>
                    </TouchableOpacity>
                ,
            }),
        },
        ParametersPhone: {
            screen: ParametersPhone,
            navigationOptions: () => ({
                headerTitle:(<Text style={Css.textHeaderMiddle}> Numéro de téléphone </Text>),
                headerLeft: null,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Parameters")}>
                        <Text style={Css.textHeaderBack}> Terminer </Text>
                    </TouchableOpacity>
                ,            }),
        },
        ParametersPlacement: {
            screen: ParametersPlacement,
            navigationOptions: () => ({
                headerTitle:(<Text style={Css.textHeaderMiddle}> Localisation </Text>),
                headerLeft: null,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Parameters")}>
                        <Text style={Css.textHeaderBack}> Terminer </Text>
                    </TouchableOpacity>
                ,            }),
        },
        ParametersSexe: {
            screen: ParametersSexe,
            navigationOptions: () => ({
                headerTitle:(<Text style={Css.textHeaderMiddle}> Montrez-moi </Text>),
                headerLeft: null,
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Parameters")}>
                        <Text style={Css.textHeaderBack}> Terminer </Text>
                    </TouchableOpacity>
                ,
            }),
        },
        ParametersSharedContent: {
            screen: ParametersSharedContent,
            navigationOptions: () => ({
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Parameters")}>
                        <Text style={Css.textHeaderBack}> Terminer </Text>
                    </TouchableOpacity>
                ,
                headerTitle:(<Text style={Css.textHeaderMiddle}> Contenu partagé </Text>),
                headerLeft: null
            }),
        },
        Parameters: {
            screen: Parameters,
            navigationOptions: () => ({
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Profil")}>
                        <Text style={Css.textHeaderBack}> Terminer </Text>
                    </TouchableOpacity>
                ,
                headerTitle:(<Text style={Css.textHeaderMiddle}> Réglages </Text>),
                headerLeft: null
            }),
        },
        Informations: {
            screen: Informations,
            navigationOptions: () => ({
                headerRight:
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => global.getNavigationProps("Profil")}>
                        <Text style={Css.textHeaderBack}> Terminer </Text>
                    </TouchableOpacity>
                ,
                headerTitle:(<Text style={Css.textHeaderMiddle}> Informations </Text>),
                headerLeft: null
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