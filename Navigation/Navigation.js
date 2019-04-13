// Navigation/Navigation.js

import React from 'react' // N'oubliez pas l'import de React ici. On en a besoin pour rendre nos components React Native Image !
import { StyleSheet, Image } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import AdFeed from '../Components/AdFeed'
import MyPartners from '../Components/MyPartners'
import Home from '../Components/_Home'
import Css from '../Ressources/Css/Css';

const MoviesTabNavigator = createBottomTabNavigator({
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
    Accueil: {
        screen: Home,
        navigationOptions: {
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
                return <Image
                    source={require('../Ressources/Img/home-icon3.png')}
                    style={Css.icon}/> // On applique un style pour les redimensionner comme il faut
            }
        }
    },
    MyPartners: {
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
        tabBarOptions: {
            activeBackgroundColor: '#39A094', // Couleur d'arrière-plan de l'onglet sélectionné
            inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
            showLabel: false, // On masque les titres
            showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
        }
    }
)

export default createAppContainer(MoviesTabNavigator)