// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import {getUserFromApi} from "../API/UserApi";
import Css from '../Ressources/Css/Css';

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

    GetUsers () {
        fetch("http://192.168.1.62:8000/api/users", {
            // fetch("http://10.42.170.230:8000/api/login_check", {
            method: 'GET',
            headers: {
                'withCredentials': 'true',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization" : global.getJwtToken
            },
        }).then((responseJson) => {
            console.log(responseJson);
            // console.log(responseJson._bodyInit.);
        }).catch((error) => {
            console.log(error);
        });
    }


    render() {
        const user = this.props.user
        const displayYepButton = this.props._displayYepButton;
        const displayNopButton = this.props._displayNopButton;
        // console.log(this.props)
        // console.log(this.props.user)
        // console.log(this.props.user.id.value)
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
                    backgroundColor: '#008575',
                    width: '98%',
                    height: '70%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Image
                        style={Css.imageHome}
                        source={{uri: user.picture.medium}}
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