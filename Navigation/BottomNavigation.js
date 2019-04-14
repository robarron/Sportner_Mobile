// Navigation/BottomNavigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import AdFeed from '../Components/AdFeed'
import MyPartners from '../Components/MyPartners'
import Home from '../Components/_Home'
import Css from '../Ressources/Css/Css';

const MoviesTabNavigator = createMaterialTopTabNavigator({
    Annonces: {
        screen: AdFeed,
        navigationOptions: {
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                    source={require('../Ressources/Img/iconNews.png')}
                    style={Css.icon}/> // On applique un style pour les redimensionner comme il faut
            }
        }
    },
    Matching: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                    source={require('../Ressources/Img/matchIconHome.png')}
                    style={Css.icon}/> // On applique un style pour les redimensionner comme il faut
            }
        }
    },
    Partenaires: {
        screen: MyPartners,
        navigationOptions: {
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                    source={require('../Ressources/Img/iconChatTRP.png')}
                    style={Css.icon}/> // On applique un style pour les redimensionner comme il faut
            }
        }
    },
},
    {
        initialRouteName : 'Matching',
        tabBarPosition: 'bottom',
        initialLayout: {
            height: 90,
            width: 50
        },
        tabBarOptions: {
            tabBarPosition: 'bottom',
            activeBackgroundColor: '#39A094', // Couleur d'arrière-plan de l'onglet sélectionné
            inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
            inactiveTintColor: '#695D46',
            activeTintColor: '#EA6D00',
            style : {borderWidth: 0,
                borderRadius: 1000,
                backgroundColor: 'white',
                height: 90,
            },
            labelStyle: {
            },
            indicatorStyle: {
                display: "none",
                // backgroundColor: '#695D46',
                // marginBottom: 10,
                // height: 3,
            },
            showLabel: true, // On masque les titres
            showIcon: true, // On informe le TabNavigator qu'on souhaite afficher les icônes définis
        }
    }
);

export default createAppContainer(MoviesTabNavigator)