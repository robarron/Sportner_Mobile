// Components/Products.js

import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Image, Text, ActivityIndicator, TouchableOpacity  } from 'react-native'
import {postImage, HasUserProfilPicture, getUserObject } from '../API/GlobalApiFunctions';
import Css from "../Ressources/Css/Css";
// import Carousel from 'react-native-smart-carousel';


class Products extends React.Component {

    constructor(props) {
        super(props);
        this.index = 0;
        this.state = {
            isLoading: false,
            user: 0,
        }
    }

    componentWillMount() {
        getUserObject().then((responseJson) => {
            if (responseJson.status !== 404) {
                responseJson.json().then((data) => {
                    this.setState({user: data});
                })
            }
        });
    }

    render() {
        return (
            <View style={ Css.main_container_profil}>
                <View style={ Css.infoUser}>
                    <Text style = {[Css.infoText]}>
                        Nombre de points SpN
                    </Text>
                    <Text style = {[Css.infoText]}>
                        {/*{user.challengePoint ? user.challengePoint : '0'} Pts*/}
                    </Text>

                    {/*{*/}
                    {/*global.getCurrentUser.rating ?*/}
                    {/*(*/}
                    {/*<Text style = {[Css.infoText]}>*/}
                    {/*{global.getCurrentUser.rating}*/}
                    {/*</Text>*/}
                    {/*)*/}
                    {/*:*/}
                    {/*(*/}
                    {/*<Text style = {[Css.infoRating]}>*/}
                    {/*Pas encore d'évaluation*/}
                    {/*</Text>*/}
                    {/*)*/}
                    {/*}*/}

                </View>
                {/*<Carousel*/}
                {/*height={150}*/}
                {/*data={this.datacarousel}*/}
                {/*navigationType={'dots'}*/}
                {/*navigationColor={'#0879B9' }*/}
                {/*navigation={true}*/}
                {/*align={'center'}*/}
                {/*titleColor={'#0879B9'}*/}
                {/*currentItem={this.indexCarousel}*/}
                {/*>{console.log(this.datacarousel)}</Carousel>*/}
                {/*<View style={Css.parametersBtn}>*/}
                {/*</View>*/}
            </View>
        )
    }
}

export default Products