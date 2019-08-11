import React from 'react';
import {StyleSheet, View, TextInput, Button, FlatList, Text, ActivityIndicator  } from 'react-native';
import UserItem from './UserItem';
import Css from '../Ressources/Css/Css';
import {
    getUserObject,
    getUsersWithoutCurrentUser,
    getImagesWithoutCurrentUser,
    getImagesWithoutCurrentUserAndPaginate
} from '../API/GlobalApiFunctions';

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
            allImageList: []
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    componentDidMount() {
        getImagesWithoutCurrentUserAndPaginate().then(responseJson => {
            responseJson.json().then((data) => {
                let allImagesListArray =  Object.values( data );

                this.setState( {allImageList: allImagesListArray});
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    NopeSwipeLeft = () => {
        let nextPage = this.state.page + 1;

        getImagesWithoutCurrentUser(nextPage).then(responseJson => {
            responseJson.json().then((data) => {
                // global.getImagesListe = data;
                this.setState( {imagesList: data, page: nextPage});

            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    YesSwipeRight = () => {
        let nextPage = this.state.page + 1;

        getImagesWithoutCurrentUser(nextPage).then(responseJson => {
            responseJson.json().then((data) => {
                // global.getImagesListe = data;
                this.setState( {imagesList: data, page: nextPage});

            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    // _displayYepButton() {
    //     return (
    //        <View>
    //            {/*<Button title='Match' onPress={() => {this.GoToNextUser()}}/>*/}
    //            <Button title='Match' onPress={() => this.GoToNextUser()}/>
    //        </View>
    //     )
    // }
    // _displayNopButton() {
    //     return (
    //         <View>
    //             <Button title='Next' onPress={() => {this.GoToNextUser()}}/>
    //         </View>
    //     )
    // }

    render() {
        let imagesListObject = this.state.imagesList ? this.state.imagesList : global.getImagesListe;
        let imagesListArray =  Object.values( imagesListObject );
        return (
            <View style={Css.HomeContainer}>
                    <FlatList
                        data={imagesListArray}
                        keyExtractor={(item) => item.image_path}
                        renderItem={({item}) => <UserItem images={item}
                                                          page={this.state.page}
                                                          NopeSwipeLeft={this.NopeSwipeLeft}
                                                          YesSwipeRight={this.YesSwipeRight}
                                                          AllImagesList={this.state.allImageList}  />
                        }
                    />
            </View>

        )

    }
}

export default _Home