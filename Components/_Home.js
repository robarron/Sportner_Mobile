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

    onSwipeLeft(gestureState) {
        let nextPage = this.state.page + 1;

        getImagesWithoutCurrentUser(nextPage).then(responseJson => {
            responseJson.json().then((data) => {
                global.getImagesListe = data;
                this.setState( {imagesList: data, page: nextPage});

            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });    }

    onSwipeRight(gestureState) {
        let nextPage = this.state.page + 1;

        getImagesWithoutCurrentUser(nextPage).then(responseJson => {
            responseJson.json().then((data) => {
                global.getImagesListe = data;
                this.setState( {imagesList: data, page: nextPage});

            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });    }

    GoToNextUser () {
        let nextPage = this.state.page + 1;

        getImagesWithoutCurrentUser(nextPage).then(responseJson => {
            responseJson.json().then((data) => {
                global.getImagesListe = data;
                this.setState( {imagesList: data, page: nextPage});

            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    _displayYepButton() {
        return (
           <View>
               {/*<Button title='Match' onPress={() => {this.GoToNextUser()}}/>*/}
               <Button title='Match' onPress={() => this.GoToNextUser()}/>
           </View>
        )
    }
    _displayNopButton() {
        return (
            <View>
                <Button title='Next' onPress={() => {this.GoToNextUser()}}/>
            </View>
        )
    }

    render() {
        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };
        let imagesListObject = this.state.imagesList ? this.state.imagesList : global.getImagesListe;
        let imagesListArray =  Object.values( imagesListObject );
        console.log("IMAGE");
        console.log(imagesListObject);
        console.log(imagesListArray);
        return (
            <View style={Css.HomeContainer}>
                {/*<GestureRecognizer*/}
                    {/*onSwipeLeft={(state) => this.onSwipeLeft(state)}*/}
                    {/*onSwipeRight={(state) => this.onSwipeRight(state)}*/}
                    {/*config={config}*/}
                    {/*style={{*/}
                        {/*flex: 1,*/}
                        {/*backgroundColor: this.state.backgroundColor*/}
                    {/*}}*/}
                {/*>*/}
                    <FlatList
                        data={imagesListArray}
                        keyExtractor={(item) => item.image_path}
                        renderItem={({item}) => <UserItem images={item}
                                                          page={this.state.page}
                                                          _displayNopButton={this._displayNopButton()}
                                                          _displayYepButton={this._displayYepButton()}/>
                        }
                    />
                {/*</GestureRecognizer>*/}
            </View>

        )

    }
}

export default _Home