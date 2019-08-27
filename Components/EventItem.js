import React from "react";
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    Dimensions, StyleSheet, Share,
} from "react-native";
import {patchCurrentEventInterestedNumber, patchCurrentEventParticipatedNumber} from "../API/GlobalApiFunctions";

const { width: screenWidth } = Dimensions.get('window');

class EventItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            participatedNumber: null,
            interestedNumber: null,
            participate: false,
            interested: false,
        }
    }

    addParticipate(eventId) {
        patchCurrentEventParticipatedNumber(eventId).then(responseJson => {
            responseJson.json().then((data) => {
                console.log(data)
                this.setState({participatedNumber: data.participated_number, participate: true})
            }).catch((error) => {
                return Promise.reject(error);
            });
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    addInterested(eventId) {
        patchCurrentEventInterestedNumber(eventId).then(responseJson => {
            responseJson.json().then((data) => {
                this.setState({interestedNumber: data.interested_number})
            }).catch((error) => {
                return Promise.reject(error);
            });
        }).catch((error) => {
            return Promise.reject(error);
        });
    }

    onShare = async (title, startDate, place, organizer) => {
        try {
            const result = await Share.share({
                message:
                    'Salut ! Rejoins moi et participe à l\'évènement ' + title + 'organisé par ' + organizer + 'qui se déroulera le ' + startDate + 'à l\'adresse suivante : ' + place + '!' ,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    render () {
        let item = this.props.navigation.getParam('item', null);
        console.log(item.picture);
        console.log(this.state.interestedNumber);
        console.log(this.state.participatedNumber);
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
                        <TouchableOpacity style={styles.flexColumnContainer} onPress= {() => {this.addInterested(item.id); this.setState({interested: true})}}>
                            <Image
                                style={styles.ctaIcon}
                                source={require('../Ressources/Img/starr.png')}
                            />
                            <Text style={!this.state.interested ? styles.organizer : styles.blueCta} numberOfLines={1}>
                                Intéressé(e)
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.flexColumnContainer} onPress= {() => {this.addParticipate(item.id); this.setState({participate: true})}}>
                            <Image
                                style={styles.ctaIcon}
                                source={require('../Ressources/Img/validIcon.png')}
                            />
                            <Text style={!this.state.participate ? styles.organizer : styles.blueCta} numberOfLines={1}>
                                J'y participe
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.flexColumnContainer} onPress= {() => {this.onShare(item.title, item.start_date, item.place, item.organizer)}}>
                            <Image
                                style={styles.ctaIcon}
                                source={require('../Ressources/Img/sharedIcon.png')}
                            />
                            <Text style={styles.organizer} numberOfLines={1}>
                                Partager
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.flexRowContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../Ressources/Img/users_icon.png')}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.organizer} numberOfLines={1}>
                                { !this.state.interestedNumber ?
                                    (item ?
                                        ( item.interested_number > 1 ?
                                            item.interested_number + " personnes intéressées "
                                            : item.interested_number + " personne intéressé ")
                                        : null)
                                    : this.state.interestedNumber +  " personnes intéressées "
                                }

                                et

                                { !this.state.participatedNumber ?
                                    (item  && item.participate_number > 1 ?
                                        ' ' + item.participate_number + " personnes y participent" :
                                        ' ' + item.participate_number + " personne y participe") :
                                    ' ' + this.state.participatedNumber + " personnes y participent"
                                }
                            </Text>
                        </View>
                    </View>
                    <View style={styles.flexRowContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../Ressources/Img/publicIcon.png')}
                        />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.organizer} numberOfLines={1}>
                                Évènement public organisé par { item ? item.organizer : null}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.flexRowContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../Ressources/Img/location-icon.png')}
                        />
                        <Text style={styles.organizer} numberOfLines={1}>
                            { item ? item.place : null}
                        </Text>
                    </View>
                    <View style={styles.flexRowContainer}>
                        <Image
                            style={styles.iconStyle}
                            source={require('../Ressources/Img/ticketsgreytransparent.png')}
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
        flexShrink: 1,
    },
    siteLink: {
        color: "#2980b6",
    },
    address: {
      fontSize: 20,
    },
    organizer: {
        fontSize: 17,
        flexWrap: 'wrap'
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
    },
    flexColumnContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    blueCta: {
        color: "#2980b6",
        fontSize: 17
    },
});

export default (EventItem)