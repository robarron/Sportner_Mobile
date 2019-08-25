import React from "react";
import {FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Css from "../Ressources/Css/Css";
import Chat from "../Components/Chat";
import {getUserLastConversationMessage, addLikeToFeed, getLikes, getFeedComments} from "../API/GlobalApiFunctions";
import {connect} from "react-redux";

class FeedItem extends React.Component {

    constructor(props) {
        super(props);
        this.feedComments = [];
        this.state = {
            isLoading: false,
            likes: this.props.item.likes,
            commentsNumber: this.props.item.comments_number,
            didLike: this.props.item.did_like_feed,
            feedComment : []
        }
    }

    _toggleLikes() {
        const action = { type: "TOGGLE_FEED_LIKES", value: this.state.likes };
        this.props.dispatch(action)
    };

    _toggleCommentsNumber() {
        const action = { type: "TOGGLE_FEEDS_COMMENTS_NUMBER", value: this.state.commentsNumber };
        this.props.dispatch(action)
    };

    _toggleComments() {
        const action = { type: "TOGGLE_FEEDS_COMMENTS", value: this.state.feedComment };
        this.props.dispatch(action)
    };

    componentDidUpdate() {
        this._toggleLikes();
        this._toggleDidLikeFeed();
        this._toggleComments();
    }

    _toggleDidLikeFeed() {
        const action = { type: "TOGGLE_DID_LIKE_FEED", value: this.state.didLike };
        this.props.dispatch(action)
    };

    addLikeToFeed (likes, feedId, userId) {
        addLikeToFeed(likes, feedId, userId).then(responseJson => {
            responseJson.json().then((data) => {
                this.props.item.likes = data;
                this.props.item.did_like_feed = true;
                if (!this.state.didLike) {
                    this.setState(
                        {didLike: true}
                    );
                }
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

    getFeedComments(userId, itemId)
    {
        getFeedComments(userId, itemId).then(responseJson => {
            responseJson.json().then((data) => {
                this.setState({feedComment: data})
            }).catch((error) => {
                return Promise.reject(error);
            });
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    timeSpend(day, hour, minute) {
        if (day === 0 && hour === 0 && minute === 0)
        {
            return ("A l'instant");
        }
        else if (day !== "0")
        {
            return (day + ' ' +(day === "1" ? "jour" : "jours"));
        }
        else if (hour !== "0")
        {
            return (hour + ' ' + (hour === "1" ? "heure" : "heures"));
        }
        else if (minute !== "0")
        {
            return (minute + ' ' + (minute === "1" ? "minute" : "minutes"));
        }
    }

    render() {
        let item = this.props.item;
        let likes = this.state.likes;
        let commentsNumber = this.state.commentsNumber;
        let index = this.props.index;
        let didLike = this.state.didLike;

        return (
            <View style={{ marginTop: index !== 0 ? 15 : null, backgroundColor: 'white', paddingTop: 15, paddingLeft: 15, paddingBottom: 15, paddingRight: 15, shadowColor: "#000",
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
                            <Text style={ Css.feedText2 }>A posté une annonce il y a {this.timeSpend(item.time_spend_since_creation_in_day, item.time_spend_since_creation_in_hour, item.time_spend_since_creation_in_minute)}</Text>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <Text style={ Css.feedContent }>{item.content}</Text>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>

                    <Text style={ Css.creationDate }>{item.createdAt}</Text>

                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity disabled={!!didLike} style={{ marginRight: 15 }} onPressIn = {() => {this.addLikeToFeed(likes + 1, item.id, this.props.userId) }} >
                            <View style={{flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                                { likes ? <Text style={{fontSize: 15, color: didLike ? "#4682B4" : 'grey'}}>{likes}</Text> : null}
                                <Image
                                    style={{ resizeMode: 'contain', width: 30, height: 30 }}
                                    source={require('../Ressources/Img/thumbsUp2.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 15 }} onPressIn = {() => { this.getFeedComments(this.props.userId, item.id) }} onPress = {() => {this.props.navigate("FeedComment", {
                            item: item,
                            likes : likes,
                            addLikeToFeed: this.addLikeToFeed,
                            commentsNumber: commentsNumber,
                            timeSpend: this.timeSpend,
                            userId: this.props.userId,
                            didLike: didLike,
                        })}}>
                            <View style={{flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={ Css.creationDate }>{commentsNumber}</Text>
                                <Image
                                    style={{ resizeMode: 'contain', width: 30, height: 30, }}
                                    source={require('../Ressources/Img/commentIcon.png')}
                                />
                            </View>

                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feedLikes: state.feedLikes,
        commentsNumber: state.commentsNumber,
        feedComments: state.feedComments,
        didLikeFeed: state.didLikeFeed,
    }
};
export default connect(mapStateToProps)(FeedItem)