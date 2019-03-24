// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { getImageFromApi } from '../API/TMBAPI'
import  _Home  from './_Home'
import {getUserFromApi} from "../API/UserApi";

class UserItem extends React.Component {

    GoToNextUser () {
        var nextPage = this.state.page + 1;
        var nbResultatParRequete = this.state.results;

        getUserFromApi(nbResultatParRequete, nextPage).then(data => {
            this.setState({
                users: data.results,
                page: nextPage,
            })
            console.log(this.state.user);
            console.log(this.state.users.length)
        })
    }

    render() {
        const user = this.props.user
        const displayYepButton = this.props._displayYepButton;
        const displayNopButton = this.props._displayNopButton;
        // console.log(this.props)
        // console.log(this.props.user)
        // console.log(this.props.user.id.value)
        return (
            <View style={styles.main_container}>
                <View style={styles.img_container}>
                    <Image
                        style={styles.image}
                        source={{uri: user.picture.medium}}
                    />
                    {/*<View style={styles.content_container}>*/}
                        {/*<View style={styles.header_container}>*/}
                            {/*<Text style={styles.title_text}>{user.PacketName}</Text>*/}
                            {/*<Text style={styles.vote_text}>{user.email}</Text>*/}
                        {/*</View>*/}
                        {/*<View style={styles.description_container}>*/}
                            {/*<Text style={styles.description_text} numberOfLines={6}>{user.packet}</Text>*/}
                             {/*La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
                        {/*</View>*/}
                        {/*<View style={styles.date_container}>*/}
                            {/*<Text style={styles.date_text}>Sorti le {user.PacketName} </Text>*/}
                        {/*</View>*/}
                    {/*</View>*/}
                    <View style={styles.txt_container}>
                        {displayNopButton}
                        {displayYepButton}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        width: 300,
        height: 190,
        flexDirection: 'row'
    },
    image: {
        width: 310,
        height: 270,
        margin: 5,
        backgroundColor: 'gray'
    },
    img_container: {
        position: 'absolute',
        left: 180,
        top: 34
    },
    txt_container: {
        position:'absolute',
        left: 18,
        top: 31,
        fontSize: 36,
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default UserItem