import React from "react";
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    TextInput,
    DeviceEventEmitter,
    Dimensions, Button,
} from "react-native";
import {Keyboard} from 'react-native';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'
import Css from "../Ressources/Css/Css";
import {postFeedComment, addLikeToFeed} from "../API/GlobalApiFunctions";
import FeedCommentItem from "./FeedCommentItem";
import {connect} from "react-redux";

class FeedComment extends React.Component {

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.count = 0;
        this.state = {
            isLoading: false,
            feedComments: null,
            likes : this.props.navigation.getParam('likes', null),
            commentInput: null,
            btnLocation: 0,
            hasFocus: false,
            commentsNumber: this.props.navigation.getParam('commentsNumber', null)
        }
    }

    postComment(userId, feedId, commentInput) {
        postFeedComment(userId, feedId, commentInput).then(responseJson => {
            responseJson.json().then((data) => {
                let tmpArray = [data];
                tmpArray.push(...this.props.feedComments);

                this.props.feedComments = tmpArray;
                console.log(this.props.navigation.getParam('commentsNumber', null));
                this.props.navigation.setParams({'commentsNumber': this.props.commentsNumber + 1});
                console.log(this.props.navigation.getParam('commentsNumber', null));
                console.log("coucou");
                // this.props.commentsNumber = this.state.commentsNumber + 1;
                this.setState({
                    feedComments: tmpArray, commentsNumber: this.props.commentsNumber + 1
                });
                // this.props.commentsNumber = this.props.commentsNumber + 1;
                // console.log(this.props.commentsNumber);
            }).catch((error) => {
                return Promise.reject(error);
            });
        });
    }

    _toggleCommentsNumber() {
        const action = { type: "TOGGLE_FEEDS_COMMENTS_NUMBER", value: this.state.commentsNumber};
        this.props.dispatch(action);
        console.log(this.props.commentsNumber);
    };

    _toggleLikes() {
        const action = { type: "TOGGLE_FEED_LIKES", value: this.state.likes };
        this.props.dispatch(action)
    };

    _keyboardDidShow() {
        console.log('Keyboard Shown');
    }

    _keyboardDidHide() {
        console.log('Keyboard Hidden');
    }

    componentDidMount() {
        console.log('DidMount FeedComment');
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    componentDidUpdate() {
        this._toggleLikes();
        this._toggleCommentsNumber();
    }

    addLikeToFeed (likes, feedId, userId) {
        addLikeToFeed(likes, feedId, userId).then(responseJson => {
            responseJson.json().then((data) => {
                this.setState(
                    {likes: data}
                );
            }).catch((error) => {
                return Promise.reject(error);
            });
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    setFocus (hasFocus) {
        this.setState({hasFocus});
    }

    render() {
        let item = this.props.navigation.getParam('item', null);
        let likes = this.state.likes;
        let commentsNumber = this.state.commentsNumber;
        let userId = this.props.navigation.getParam('userId', null);
        let timeSpend = this.props.navigation.getParam('timeSpend', null);
        let didLike = this.props.navigation.getParam('didLike', null);
        let feedComments = this.props.feedComments;
        // console.log(feedComments);
        // console.log(this.state.feedComments)

        let hasFocus = this.state.hasFocus;

        return (
            <View style={ {height: '100%'}}>
                <View style={{backgroundColor: 'white', paddingTop: 15, paddingLeft: 15, paddingBottom: 15, paddingRight: 15, shadowColor: "#000",    borderBottomWidth: 1, borderBottomColor: "#E1ECF4",

                    shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.18,
                        shadowRadius: 1.00,
                        elevation: 1}}>

                        <View style={{flexDirection: 'row' , alignItems: 'center'}}>
                            <Image
                                style={{ resizeMode: 'contain', borderRadius : 45 / 2, width: 45, height: 45, }}
                                source={{uri: 'data:image/jpeg;base64,'+item.user_profil_pic}}
                            />
                            <View style={{ flexWrap: 'wrap', marginLeft: 10 }}>
                                <View>
                                    <Text style={ Css.feedText }>{item.user_name}</Text>
                                </View>
                                <View>
                                    <Text style={ Css.feedText2 }>A posté une annonce il y a {timeSpend(item.time_spend_since_creation_in_day, item.time_spend_since_creation_in_hour, item.time_spend_since_creation_in_minute)}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{flexDirection: 'column'}}>
                            <Text style={ Css.feedContent }>{item.content}</Text>
                        </View>

                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>

                            <Text style={ Css.creationDate }>{item.createdAt}</Text>

                            <View style={{flexDirection: 'row', alignItems: 'center'}}>

                                <TouchableOpacity disabled={!!didLike} style={{ marginRight: 15 }} onPressIn = {() => {this.addLikeToFeed(likes + 1, item.id, userId) }} >
                                    <View style={{flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                                        { likes ? <Text style={{fontSize: 15, color: didLike ? "#4682B4" : 'grey'}}>{likes}</Text> : null}
                                        <Image
                                            style={{ resizeMode: 'contain', width: 30, height: 30 }}
                                            source={require('../Ressources/Img/thumbsUp2.png')}
                                        />
                                    </View>
                                </TouchableOpacity>

                                <View style={{ marginRight: 15 }}>
                                    <View style={{flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={ Css.creationDate }>{this.state.commentsNumber ? this.state.commentsNumber : commentsNumber}</Text>
                                        <Image
                                            style={{ resizeMode: 'contain', width: 30, height: 30, }}
                                            source={require('../Ressources/Img/commentIcon.png')}
                                        />
                                    </View>
                                </View>

                            </View>

                        </View>
                </View>
                { !feedComments
                    ?
                    <ActivityIndicator size='large' color="#036BBB" />
                    :
                    <ScrollView style={!hasFocus ? Css.marginbotKbNotFocus : null}>
                        <FlatList
                            extraData={this.state}
                            data={this.state.feedComments ? this.state.feedComments : feedComments}
                            keyExtractor={(item) => item.comment_id.toString()}
                            renderItem={({item, index}) => <FeedCommentItem index = {index} timeSpend = {timeSpend} item = {item} navigate = {this.props.navigate} userId ={userId}/>
                            }
                        />
                    </ScrollView>
                }
                    <View style={!hasFocus ? Css.navBarStyle : Css.navBarNotAbsolute}>
                        <View style={{  paddingTop: 10, paddingBottom: 10, width: '100%', borderTopWidth: 1, borderTopColor: '#E1ECF4', backgroundColor: 'white', height: 76, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{backgroundColor: "#E1ECF4", width: '70%', flexDirection: 'column', alignItems: 'center',  marginLeft: 10, borderRadius: 25,}}>
                                <TextInput
                                    style={{ paddingTop: 15, paddingLeft: 15, paddingBottom: 15, paddingRight: 15, color:'grey'}}
                                    placeholder='Votre commentaire...'
                                    onSubmitEditing={() => console.log("")}
                                    ref={(input)=> this.commentInput = input}
                                    autoFocus={true}
                                    onChangeText={(comment) => this.setState({commentInput: comment})}
                                    onFocus={this.setFocus.bind(this, true)}
                                    onBlur={this.setFocus.bind(this, false)}
                                    showSoftInputOnFocus={true}
                                />
                            </View>
                            <Button
                                style={{}}
                                title="Envoyer"
                                onPress={() => {this.postComment(userId, item.id, this.state.commentInput); this.setFocus.bind(this, false)}}
                            />
                        </View>
                    </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feedComments: state.feedComments,
        feedLikes: state.feedLikes,
        commentsNumber: state.commentsNumber,
    }
};
export default connect(mapStateToProps)(FeedComment)