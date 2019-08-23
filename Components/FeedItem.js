import React from "react";
import {FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import Css from "../Ressources/Css/Css";
import Chat from "../Components/Chat";
import {getUserLastConversationMessage, addLikeToFeed, getLikes} from "../API/GlobalApiFunctions";
import {connect} from "react-redux";

class FeedItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            likes: this.props.item.likes,
        }
    }

    _toggleLikes() {
        const action = { type: "TOGGLE_FEED_LIKES", value: this.state.likes };
        this.props.dispatch(action)
    };

    componentDidUpdate() {
        this._toggleLikes();
    }

    getLikes = (feedId) => {
        getLikes(feedId).then(responseJson => {
            responseJson.json().then((data) => {
                console.log(data)
                console.log("LIKES")
                this.setState(
                    {likes: data}
                );
            }).catch((error) => {
                return Promise.reject(error);
            });
        }).catch((error) => {
            return Promise.reject(error);
        });
    };

    addLikeToFeed (likes, feedId) {
        addLikeToFeed(likes, feedId).then(responseJson => {
            responseJson.json().then((data) => {
                this.props.item.likes = data;
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
    timeSpend(day, hour, minute) {
        if (day !== "0")
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
        const item = this.props.item;
        const likes = this.state.likes;
        const index = this.props.index;
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
                    <View style={{ flexWrap: 'wrap' }}>
                        <View styles={{paddingLeft: 15}}>
                            <Text style={ Css.feedText }>{item.user_name}</Text>
                        </View>
                        <View styles={{paddingLeft: 15}}>
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
                        <TouchableOpacity style={{ marginRight: 15 }} onPressIn = {() => {this.addLikeToFeed(likes + 1, item.id) }} >
                            <View style={{flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                                { likes ? <Text style={ Css.creationDate }>{likes}</Text> : null}
                                <Image
                                    style={{ resizeMode: 'contain', width: 30, height: 30 }}
                                    source={require('../Ressources/Img/thumbsUp2.png')}
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginRight: 15 }} onPress={() => { this.setState({step2: 1, step1 : 0 }); this.FirstValidation(this.state.lastName, this.state.firstName, this.state.sexe) }}>
                            <View style={{flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
                                { likes ? <Text style={ Css.creationDate }>{this.props.feedLikes ? this.props.feedLikes : likes}</Text> : null}
                                <Image
                                    style={{ resizeMode: 'contain', width: 30, height: 30, }}
                                    source={require('../Ressources/Img/commentIcon.png')}
                                />
                            </View>

                            {/*<Text style={ Css.creationDate }>{item.createdAt}</Text>*/}
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feedLikes: state.feedLikes
    }
};
export default connect(mapStateToProps)(FeedItem)