// Components/FilmItem.js

import React from 'react'
import {StyleSheet, View, Text, Image, Button, ImageBackground} from 'react-native'
import {getImagesWithoutCurrentUser, getImagesWithoutCurrentUserAndPaginate} from "../API/GlobalApiFunctions";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Css from '../Ressources/Css/Css';
import Swiper from "react-native-deck-swiper/Swiper";

class UserItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageList: []
        }
    }

    render() {
        const images = this.props.images;
        const imagesBase64 =  images.profil_pic;
        return (
            <View style={Css.HomeContainer}>
                { images ?

                    <Swiper
                        backgroundColor={"white"}
                        cardVerticalMargin={0}
                        cardHorizontalMargin={0}
                        cards={this.props.AllImagesList}
                        onSwipedRight={this.props.YesSwipeRight}
                        onSwipedLeft={this.props.NopeSwipeLeft}
                        renderCard={(card) => {
                            return (
                                <View style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 9,
                                    },
                                    shadowOpacity: 0.50,
                                    shadowRadius: 12.35,
                                    elevation: 19,
                                    width: '100%',
                                    height: '100%',
                                }}>
                                <ImageBackground
                                    style={Css.imageHome} imageStyle={{ borderRadius: 25 }}

                                    source={{uri: 'data:image/jpeg;base64,'+imagesBase64}}
                                >
                                    { images ? (
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 30,
                                                color: 'white',
                                                bottom: 0, // position where you want
                                                left: '5%',
                                                top: '75%'
                                            }}
                                        >
                                            { images.user.first_name + ' '}
                                            { images.user.last_name + ', ' +images.user.age }
                                        </Text>  ) : null}
                                    { images ? (
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 15,
                                                color: 'white',
                                                bottom: 0, // position where you want
                                                left: '5%',
                                                top: '76%',
                                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                                textShadowOffset: {width: -1, height: 1},
                                                textShadowRadius: 10
                                            }}
                                        >
                                            { images.user.description }
                                        </Text> ) : null }
                                </ImageBackground>
                                </View>
                            )
                        }}
                        onSwiped={(cardIndex) => {console.log(cardIndex)}}
                        onSwipedAll={() => {console.log('onSwipedAll')}}
                        cardIndex={0}
                        stackSize= {2}>
                    </Swiper>
                    : null }
            </View>
        )
    }
}


export default UserItem