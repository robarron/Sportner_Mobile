// Components/AdFeed.js

import React from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList,
    Text,
    ActivityIndicator,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMBAPI'
import Css from "../Ressources/Css/Css";
import FeedItem from "./FeedItem";
import {getLikes, getUserObject} from "../API/GlobalApiFunctions";
import {connect} from "react-redux"; // import { } from ... car c'est un export nommé dans TMDBApi.js

class AdFeed extends React.Component {

    constructor(props) {
        super(props);
        this.searchedText = "" ;// Initialisation de notre donnée searchedText en dehors du state
        this.state = {
            isLoading: false,
            likes: null
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    getLikes = (feedId) => {
        getLikes(feedId).then(responseJson => {
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
    };

    render() {
        let userFeeds = this.props.userFeeds;
        let likes = this.state.likes;
        return (
            <ScrollView style={{ backgroundColor : '#F0F4F6'}}>
                <FlatList
                    data={userFeeds}
                    keyExtractor={(item) => item.id ? item.id.toString() : null}
                    renderItem={({item, index}) => <FeedItem getLikes = {this.getLikes} likes = {this.state.likes} index = {index} item = {item} navigate = {this.props.navigate} userId ={this.props.userId}/> }/>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        feedLikes: state.feedLikes
    }
};
export default connect(mapStateToProps)(AdFeed)