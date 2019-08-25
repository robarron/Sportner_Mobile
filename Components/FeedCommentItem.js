import React from "react";
import {FlatList, Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import Css from "../Ressources/Css/Css";
import Chat from "../Components/Chat";
import {addLikeToComment} from "../API/GlobalApiFunctions";
import {connect} from "react-redux";

class FeedCommentItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            likes: this.props.item.likes,
            commentsNumber: this.props.item.comments_number,
            commentsLikes: this.props.item.comment_likes,
            didLike: this.props.item.did_like_comment,
        }
    }

    addLikeToComment (likes, feedId, userId) {
        addLikeToComment(likes, feedId, userId).then(responseJson => {
            responseJson.json().then((data) => {
                this.props.item.comment_likes = data;
                if (!this.state.didLike) {
                    this.setState(
                        {didLike: true}
                    );                }
                this.setState(
                    {commentsLikes: data}
                );
            }).catch((error) => {
                return Promise.reject(error);
            });
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    _toggleDidLike() {
        const action = { type: "TOGGLE_DID_LIKE_COMMENT", value: this.state.didLike };
        this.props.dispatch(action)
    };

    _toggleCommentsLikes() {
        const action = { type: "TOGGLE_COMMENTS_LIKES", value: this.state.commentsLikes };
        this.props.dispatch(action)
    };

    componentDidUpdate() {
        this._toggleCommentsLikes();
        this._toggleDidLike();

    }

    render() {
        let item = this.props.item;
        let index = this.props.index;
        let timeSpend = this.props.timeSpend;
        let commentsLikes = this.state.commentsLikes;
        let didLike = this.state.didLike;
        return (
            <ScrollView style={{ marginTop: index !== 0 ? 15 : null, backgroundColor: 'white', paddingTop: 15, paddingLeft: 15, paddingBottom: 15, paddingRight: 15}}>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        style={{ resizeMode: 'contain', borderRadius : 45 / 2, width: 45, height: 45, }}
                        source={{uri: 'data:image/jpeg;base64,'+item.comment_user_profil_pic}}
                    />
                    <View style={{flexWrap: 'wrap', marginLeft: 10, width: '80%'}}>
                        <View style={{ flexWrap: 'wrap', backgroundColor: '#E1ECF4', borderRadius: 20, marginLeft: 10, paddingTop: 7, paddingLeft: 7, paddingBottom: 7, paddingRight: 7 }}>
                            <View>
                                <Text style={ Css.feedText }>{item.comment_user_name}</Text>
                            </View>
                            <View>
                                <Text style={ Css.feedText2 }>{item.comment_content}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center',  justifyContent: 'space-between', marginLeft: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center',}}>
                                <Text style={ Css.feedText2 }>{timeSpend(item.comment_time_spend_since_creation_in_day, item.comment_time_spend_since_creation_in_hour, item.comment_time_spend_since_creation_in_minute)}</Text>
                                <TouchableOpacity disabled={!!didLike} style={{marginLeft: 15}} onPressIn = {() => {this.addLikeToComment(commentsLikes + 1, item.comment_id, this.props.userId) }}>
                                    <Text style={{  fontSize: 15,
                                        fontWeight: 'bold',
                                        color: didLike ? "#E1ECF4" : 'grey' }}>j'aime </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                                <Text style={{fontSize: 12,
                                    color: didLike ? '#4682B4' : 'grey'}}>{commentsLikes}</Text>
                                <Image
                                    style={{ resizeMode: 'contain', width: 12, height: 12 }}
                                    source={require('../Ressources/Img/thumbsUp2.png')}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feedLikes: state.feedLikes,
        commentsNumber: state.commentsNumber,
        commentsLikes: state.commentsLikes,
        didLikeComment: state.didLikeComment,
    }
};
export default connect(mapStateToProps)(FeedCommentItem)