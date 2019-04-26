// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import {getUserByEmail} from "../API/GlobalApiFunctions";
import Css from '../Ressources/Css/Css';
import {getUserFromApi} from "../API/UserApi";


class UserItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            films: [],
        }
    }

    // GoToNextUser () {
    //     var nextPage = this.state.page + 1;
    //     var nbResultatParRequete = this.state.results;
    //
    //     getUserFromApi(nbResultatParRequete, nextPage).then(data => {
    //         this.setState({
    //             users: data.results,
    //             page: nextPage,
    //         })
    //         console.log(this.state.user);
    //         console.log(this.state.users.length)
    //     })
    // }

    render() {
        const images = this.props.images;
        const displayYepButton = this.props._displayYepButton;
        const displayNopButton = this.props._displayNopButton;
        // const userssPath =  user.images.length > 0 ? user.images[0].image_path_for_require : require('../Ressources/Img/tennisNoMatch.jpg');
        const imagesPath =  images.path_for_require;
        const imagesBase64 =  images.base64;

        return (
            <View style={Css.HomeContainer}>
                <View style={Css.txt_container}>
                    {displayNopButton}
                </View>
                <View style={{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 9,
                    },
                    shadowOpacity: 0.50,
                    shadowRadius: 12.35,
                    elevation: 19,
                    borderRadius: 20,
                    width: '98%',
                    height: '70%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        style={Css.imageHome}
                        source={{uri: 'data:image/jpeg;base64,'+imagesBase64}}
                    />
                </View>
                <View style={Css.txt_container}>
                    {displayYepButton}
                </View>
            </View>
        )
    }
}


export default UserItem