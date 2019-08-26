import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from "react";
import {connect} from "react-redux";
import {GetTopEvents, GetAllEvents} from "../API/GlobalApiFunctions";

const { width: screenWidth } = Dimensions.get('window')

class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            topEvents: [],
            events: [],
        }
    }

    componentDidMount()
    {
        this.getTopEvents();
        this.getEvents();
    }

    getTopEvents()
    {
        GetTopEvents().then((responseJson) => {
            responseJson.json().then((data) => {
                this.setState({topEvents: data});
                console.log(data)
            });
        });
    }

    getEvents()
    {
        GetAllEvents().then((responseJson) => {
            responseJson.json().then((data) => {
                this.setState({events: data});
            });
        });
    }

    render () {
        let navigation = this.props.navigation;
        return (
            <View style={styles.globalView}>
                <View style={styles.secondView}>
                    <Text style={styles.headerTitle}>
                        Évènements à la une
                    </Text>
                        <Carousel
                            sliderWidth={screenWidth}
                            sliderHeight={screenWidth}
                            itemWidth={screenWidth - 60}
                            data={this.state.topEvents}
                            renderItem={({item,index}) =>
                                <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate("EventItem", {
                                    item: item,
                                    // userImages: global.getCurrentUser.images
                                })}>
                                    <ImageBackground
                                        source={{ uri: item.picture }}
                                        containerStyle={styles.imageContainer}
                                        style={styles.image}
                                        imageStyle={{borderRadius: 25}}
                                        // parallaxFactor={0.4}
                                        // spinnerColor={"#036BBB"}
                                    />
                                    <View style={styles.textPosition}>
                                        <Text style={styles.startDate} numberOfLines={1}>
                                            { item.start_date }
                                        </Text>
                                        <Text style={styles.title} numberOfLines={2}>
                                            { item.title }
                                        </Text>
                                        <View style={styles.alignCityAndOrganizer}>
                                            <Text style={styles.organizer} numberOfLines={1}>
                                                { item.organizer } - { item.city }
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                            hasParallaxImages={true}
                        />
                </View>
                <View style={styles.secondView}>
                    <Text style={styles.headerTitle}>
                        Évènements qui pourraient vous intéresser
                    </Text>
                    <Carousel
                        sliderWidth={screenWidth}
                        sliderHeight={screenWidth}
                        itemWidth={screenWidth - 60}
                        data={this.state.events}
                        renderItem={({item,index}) =>
                            <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate("EventItem", {
                                item: item,
                                // userImages: global.getCurrentUser.images
                            })}>
                                <ImageBackground
                                    source={{ uri: item.picture }}
                                    containerStyle={styles.imageContainer}
                                    style={styles.image}
                                    imageStyle={{borderRadius: 25}}
                                    // parallaxFactor={0.4}
                                    // spinnerColor={"#036BBB"}
                                />
                                <View style={styles.textPosition}>
                                    <Text style={styles.startDate} numberOfLines={1}>
                                        { item.start_date }
                                    </Text>
                                    <Text style={styles.title} numberOfLines={2}>
                                        { item.title }
                                    </Text>
                                    <View style={styles.alignCityAndOrganizer}>
                                        <Text style={styles.organizer} numberOfLines={1}>
                                            { item.organizer } -
                                        </Text>
                                        <Text style={styles.organizer} numberOfLines={1}>
                                            { item.city }
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                        hasParallaxImages={true}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        paddingLeft: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingTop: 10,
        width: screenWidth - 50,
        height: screenWidth - 180,
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'contain',
        opacity: 0.5
    },
    headerTitle: {
        fontSize: 20,
        color: 'grey',
        marginLeft: 20,
        marginBottom: 15
    },
    globalView: {
        // marginTop: 10,
    },
    secondView: {
        marginTop: 30
    },
    title: {
        color: 'white',
        fontSize: 21,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    startDate: {
        color: '#CD0000',
        fontSize: 16,
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    organizer: {
        color: 'white',
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
    },
    textPosition: {
        top: "65%"
    },
    alignCityAndOrganizer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});

const mapStateToProps = (state) => {
    return {
        eventItem: state.feedLikes,
    }
};
export default connect(mapStateToProps)(Event)