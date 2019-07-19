// Components/FilmItem.js

import React from 'react'
import {StyleSheet, View, Text, Image, Button, ImageBackground} from 'react-native'
import {getUserByEmail} from "../API/GlobalApiFunctions";
import Css from '../Ressources/Css/Css';

class UserItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            films: [],
        }
    }

    render() {
        const images = this.props.images;
        console.log(images)
        const displayYepButton = this.props._displayYepButton;
        const displayNopButton = this.props._displayNopButton;
        // const userssPath =  user.images.length > 0 ? user.images[0].image_path_for_require : require('../Ressources/Img/tennisNoMatch.jpg');
        const imagesPath =  images.path_for_require;
        const imagesBase64 =  images.base64;

        return (
            <View style={Css.HomeContainer}>
                {/*<View style={Css.txt_container}>*/}
                    {/*{displayNopButton}*/}
                {/*</View>*/}
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
                            { images.user.first_name + ' ' }
                            { images.user.last_name }
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
                {/*<View style={Css.txt_container}>*/}
                    {/*{displayYepButton}*/}
                {/*</View>*/}
            </View>
        )
    }
}


export default UserItem