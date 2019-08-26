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
    Dimensions, Button, StyleSheet,
} from "react-native";
import {Keyboard} from 'react-native';
import { KeyboardAccessoryView } from 'react-native-keyboard-accessory'
import Css from "../Ressources/Css/Css";
import {postFeedComment, addLikeToFeed} from "../API/GlobalApiFunctions";
import FeedCommentItem from "./FeedCommentItem";
import {connect} from "react-redux";

const { width: screenWidth } = Dimensions.get('window')

class EventItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        let item = this.props.navigation.getParam('item', null);
        console.log(item.picture);
        return (
            <View style={styles.globalView}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imageContainer}
                        source={{uri: item.picture }}
                    />
                </View>
                <View style={styles.textPosition}>
                    <Text style={styles.startDate} numberOfLines={1}>
                        { item ? item.start_date : null}
                    </Text>
                    <Text style={styles.title} numberOfLines={2}>
                        { item ? item.title : null }
                    </Text>
                    <View style={styles.alignCityAndOrganizer}>
                        <Text style={styles.address} numberOfLines={1}>
                            { item ? item.place : null }
                        </Text>
                    </View>
                    <View style={styles.flexRowContainerIcon}>
                        <Image
                            style={styles.ctaIcon}
                            source={require('../Ressources/Img/stars.png')}
                        />
                        <Image
                            style={styles.ctaIcon}
                            source={require('../Ressources/Img/validIcon.png')}
                        />
                        <Image
                            style={styles.ctaIcon}
                            source={require('../Ressources/Img/sharedIcon.png')}
                        />
                    </View>
                    <View style={styles.flexRowContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../Ressources/Img/users_icon.png')}
                        />
                        <Text style={styles.organizer} numberOfLines={1}>
                            { item ? ( item.interested_number > 1 ? item.interested_number + "personnes intéressées" : item.interested_number + "personne intéressé") : null }
                        </Text>
                    </View>
                    <View style={styles.flexRowContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../Ressources/Img/users_icon.png')}
                        />
                        <Text style={styles.organizer} numberOfLines={1}>
                            Évènement public organisé par { item ? item.organizer : null}
                        </Text>
                    </View>
                    <View style={styles.flexRowContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../Ressources/Img/users_icon.png')}
                        />
                        <Text style={styles.organizer} numberOfLines={1}>
                            { item ? item.place : null}
                        </Text>
                    </View>
                    <View style={styles.flexRowContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../Ressources/Img/users_icon.png')}
                        />
                        <View styles={{ flexWrap: 'wrap'}}>
                            <Text style={styles.organizer} numberOfLines={1}>
                                Billets disponibles
                            </Text>
                            <Text style={styles.siteLink} numberOfLines={1}>
                                { item ? item.ticketing_site_link : null}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        height: screenWidth - 180,
        width: screenWidth,
        marginBottom: 20,
    },
    textPosition: {
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    startDate: {
        fontSize: 20,
        color: "#CD0000"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold"
    },
    flexRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    siteLink: {
        color: "#2980b6",
    },
    address: {
      fontSize: 20,
    },
    organizer: {
        fontSize: 17
    },
    iconStyle: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 10
    },
    ctaIcon: {
        resizeMode: 'contain',
        width: 40,
        height: 40,
    },
    flexRowContainerIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-around",
        marginBottom: 25,
        marginTop: 25,
    }
});

export default (EventItem)