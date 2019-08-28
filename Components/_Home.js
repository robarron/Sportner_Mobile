import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList,
    Text,
    ActivityIndicator,
    ImageBackground,
    Image,
    Modal,
    Alert, TouchableHighlight, TouchableOpacity
} from 'react-native';
import UserItem from './UserItem';
import Swiper from "react-native-deck-swiper/Swiper";
import Css from '../Ressources/Css/Css';
import {
    UserHasMatch,
    createMatchProposition,
    getUserObject,
    getUsersWithoutCurrentUser,
    getImagesWithoutCurrentUser,
    getImagesWithoutCurrentUserAndPaginate,
    getAllImagesWithoutCurrentUser,
} from '../API/GlobalApiFunctions';
import {connect} from "react-redux";

class _Home extends React.Component {

    constructor(props) {
        super(props);
        global.getNavigationProps = (route) => this.props.navigation.navigate(route);
        this.currentCard = null;
        this.state = {
            users: [],
            page: 1,
            results: 1,
            totalPage: 100,
            seed: 'demo',
            isFetching: false,
            allUsersData: null,
            imagesList: null,
            allImageList: null,
            currentCard: null,
            isAMatch: false,
            swipeAll: false
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    setModalVisible(visible) {
        this.setState({ isAMatch: visible });
    }

    NopeSwipeLeft = () => {
        let nextPage = this.state.page + 1;

        // getImagesWithoutCurrentUser(nextPage).then(responseJson => {
        //     responseJson.json().then((data) => {
        //         // global.getImagesListe = data;
        //         this.setState( {imagesList: data, page: nextPage});
        //
        //     }).catch((error) => {
        //         console.log(error);
        //     });
        // }).catch((error) => {
        //     console.log(error);
        // });
    };

    YesSwipeRight = (user1, proposed_to) => {
        createMatchProposition(user1, proposed_to).then(responseJson => {
            responseJson.json().then((data) => {
                UserHasMatch(user1, proposed_to).then(responseJson => {
                    responseJson.json().then((data) => {
                        if (data.id) {
                            this.setModalVisible(true)
                        }
                    }).catch((error) => {
                    console.log(error);
                });
                }).catch((error) => {
                    console.log(error);
                });
            }).catch((error) => {
                console.log(error);
            });
        }).catch((error) => {
            console.log(error);
        });
    };

    render() {
        const user = this.props.globalUser;
        let imagesListObject = this.props.allImagesList;

        return (
            <View style={Css.HomeContainer}>
                <Swiper
                    backgroundColor={"white"}
                    cardVerticalMargin={0}
                    cardHorizontalMargin={0}
                    cards={imagesListObject}
                    renderCard={(card) => {
                        return (
                            !this.state.swipeAll && card ?
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
                                        style={Css.imageHome} imageStyle={{borderRadius: 25}}

                                        source={{uri: 'data:image/jpeg;base64,' + card.profil_pic}}
                                    >
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 30,
                                                color: 'white',
                                                bottom: 0, // position where you want
                                                top: '70%',
                                                marginLeft: 10, width: "90%",
                                                textShadowColor:'#585858',
                                                textShadowOffset:{width: 1, height: 1},
                                                textShadowRadius:1,
                                            }}
                                        >
                                            {card.user_first_name + ' '}
                                            {card.user_last_name + ', ' + card.user_age}
                                        </Text>
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 15,
                                                color: 'white',
                                                bottom: 0, // position where you want
                                                top: '71%',
                                                textShadowColor:'#585858',
                                                textShadowOffset:{width: 1, height: 1},
                                                textShadowRadius: 1,
                                                marginLeft: 10, width: "90%",
                                                marginBottom: 15
                                            }}
                                        >
                                            {card.user_description}
                                        </Text>
                                    </ImageBackground>
                                </View>
                                :
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
                                        style={Css.imageHome} imageStyle={{borderRadius: 25}}
                                        source={{uri: 'https://media.giphy.com/media/3GocNGDdqXcJ2/giphy.gif'}}>
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 15,
                                                color: 'white',
                                                bottom: 0, // position where you want
                                                top: '76%',
                                                textAlign: 'center',
                                                textShadowColor:'#585858',
                                                textShadowOffset:{width: 1, height: 1},
                                                textShadowRadius:1,
                                            }}
                                        >
                                            Plus de sportif pour le moment.
                                        </Text>
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 15,
                                                color: 'white',
                                                bottom: 0, // position where you want
                                                top: '76%',
                                                textAlign: 'center',
                                                textShadowColor:'#585858',
                                                textShadowOffset:{width: 1, height: 1},
                                                textShadowRadius:1,
                                            }}
                                        >
                                            Revenez plus tard !
                                        </Text>
                                    </ImageBackground>
                                </View>
                        )
                    }}
                    onSwipedRight= { () => this.YesSwipeRight( user ? user.id : null, this.currentCard ? this.currentCard.user_id : null)}
                    onSwipedLeft={this.NopeSwipeLeft}
                    onSwiped={(cardIndex) => {this.currentCard = imagesListObject[cardIndex]}}
                    onSwipedAll={() => {this.setState({swipeAll: true})}}
                    cardIndex={1}
                    stackSize= {2}>
                </Swiper>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isAMatch}
                    onDismiss={() =>
                        this.setModalVisible(false)
                        // Alert.alert('Modal has been closed.');
                    }
                    onRequestClose={() =>
                        this.setModalVisible(false)
                        // Alert.alert('Modal has been closed.');
                    }>
                    <View style={Css.modal}>
                        <View style={{
                            width: '98%',
                            height: '100%'
                        }}>
                            {this.currentCard ?
                                <View>
                                    <ImageBackground
                                        style={Css.imageMatch} imageStyle={{ borderRadius: 25 }}
                                        source={{uri: 'data:image/jpeg;base64,'+ this.currentCard.profil_pic}}>
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 20,
                                                color: 'white',
                                                bottom: 0, // position where you want
                                                left: '5%',
                                                top: '70%'
                                            }}
                                        >
                                            { this.currentCard.user_first_name + ' '}
                                            { this.currentCard.user_last_name + ', ' + this.currentCard.user_age }
                                        </Text>
                                        <Text
                                            style={{
                                                fontWeight: 'bold',
                                                fontSize: 10,
                                                color: 'white',
                                                bottom: 0, // position where you want
                                                left: '5%',
                                                top: '70%',
                                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                                textShadowOffset: {width: -1, height: 1},
                                                textShadowRadius: 10
                                            }}
                                        >
                                            { this.currentCard.user_description }
                                        </Text>
                                    </ImageBackground>
                                    <Image
                                        style={[Css.itsAMatchImg]}
                                        source={require('../Ressources/Img/itsaMatch2.png')}
                                    />
                                    <View style={{flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between', paddingTop: 15}}>
                                        <TouchableOpacity style={Css.keepSwiping} onPress={() =>
                                            this.setModalVisible(false)
                                        }>
                                            <Text style={Css.matchingOption}>Continuer de swiper</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={Css.keepSwiping} onPress={() =>
                                            this.setModalVisible(false)
                                        }>
                                            <Text style={Css.matchingOption}>Organiser une rencontre</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                : null
                            }

                        </View>
                    </View>
                </Modal>
            </View>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        globalEmailUser: state.globalEmailUser,
        globalUser: state.globalUser,
        allImagesList: state.allImagesList
    }
};
export default connect(mapStateToProps)(_Home)