import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator  } from 'react-native';
import UserItem from './UserItem';
import Css from '../Ressources/Css/Css';
import {getUserObject, getUsersWithoutCurrentUser, getImagesWithoutCurrentUser} from '../API/GlobalApiFunctions';

class _Home extends React.Component {

    constructor(props) {
        super(props);
        global.getNavigationProps = (route) => this.props.navigation.navigate(route);
        this.state = {
            users: [],
            page: 1,
            results: 1,
            totalPage: 100,
            seed: 'demo',
            isFetching: false,
            allUsersData: null,
            imagesList: null,
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

//     GoToNextUser () {
//         var nextPage = this.state.page + 1;
//
//         getImagesWithoutCurrentUser(nextPage).then(responseJson => {
//             responseJson.json().then((data) => {
//                 global.getImagesListe = data;
//                 this.setState( {imagesList: data, page: nextPage});
//
//             }).catch((error) => {
//                 console.log(error);
//             });
//         }).catch((error) => {
//             console.log(error);
//         });
//     }
//
//     _displayYepButton() {
//         return (
//            <View>
//                {/*<Button title='Match' onPress={() => {this.GoToNextUser()}}/>*/}
//                <Button title='Match' onPress={() => this.GoToNextUser()}/>
//            </View>
//         )
//     }
//     _displayNopButton() {
//         return (
//             <View>
//                 <Button title='Next' onPress={() => {this.GoToNextUser()}}/>
//             </View>
//         )
//     }
//
    render() {
//         let imagesListObject = this.state.imagesList ? this.state.imagesList : global.getImagesListe;
//         let imagesListArray =  Object.values( imagesListObject );
        return (
            <View style={Css.HomeContainer}>

            </View>

        )

    }
}

export default _Home