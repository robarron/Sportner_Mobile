// Components/Profil.js

import React from 'react'
import {StyleSheet, View, TextInput, Button, FlatList, Image, Text, ActivityIndicator, TouchableOpacity  } from 'react-native'
import {postImage, HasUserProfilPicture, getUserObject } from '../API/GlobalApiFunctions';
import Css from "../Ressources/Css/Css";
import Carousel from 'react-native-smart-carousel';
import {connect} from "react-redux";


class Profil extends React.Component {

    constructor(props) {
        super(props);
        this.indexCarousel= 0;
            this.datacarousel = [
            {
                "id": 339964,
                "title": "Passer à Sportner Prime",
                "subtitle": "Mettez les publicités de coté et accordez vous un matching illimité",
            },
            {
                "id": 339403,
                "title": "Passer à Sportner Gold",
                "subtitle": "Vous offre d'avantage de récompenses grâce à vos points virtuels !",
            },
            {
                "id": 339404,
                "title": "Obtenez un boost de matching",
                "subtitle": "Augmenter vos chances de vue de votre profil ainsi que vos chances de matching !",
            },
            {
                "id": 339405,
                "title": "Essayez le profil sponsorisé",
                "subtitle": "Mettez en avant votre produit sous forme de profil sportif !",
            },
        ];
        this.state = {
            isLoading: false,
            image: null,
            hasPictures: false,
            profilPicture: null,
            pic2: null,
            pic3: null,
            pic4: null,
            pic5: null,
            pic6: null,
        }
    }

    checkUserProfilPicture = () => {
        HasUserProfilPicture().then(response => {
            return response.json()
        }).then(responseJson => {
            if (responseJson.length !== 0) {
                this.setState({hasPictures: true})
            }
        }).catch((error) => {
                return Promise.reject(error);
            });
    };

    componentDidMount() {
        this.checkUserProfilPicture();
    }

render() {
    const profil_pic = this.props.globalUser.images ? this.props.globalUser.images.profil_pic : null;

    return (
        <View style={ Css.main_container_profil}>
            <View style={ Css.infoUser}>
                { profil_pic ?
                    (
                        <Image
                            style={Css.profilesImage}
                            source={{uri: 'data:image/jpeg;base64,' + profil_pic}}
                        />
                    )
                :
                    (
                        <Image
                            style={Css.profilesImage}
                            source={require('../Ressources/Img/noProfilImg.png')}
                        />
                    )
                }
                <Text style = {[Css.infoText]}>
                    {this.props.globalUser.first_name}, {this.props.globalUser.age}
                </Text>
                <Text style = {[Css.infoText]}>
                    {this.props.globalUser.favorite_sport ? this.props.globalUser.favorite_sport : "Pas encore de sport renseigné"}
                </Text>

                {
                    this.props.globalUser.rating ?
                        (
                            <Text style = {[Css.infoText]}>
                                {this.props.globalUser.rating}
                            </Text>
                        )
                        :
                        (
                            <Text style = {[Css.infoRating]}>
                                Pas encore d'évaluation
                            </Text>
                        )
                }

            </View>
            <Carousel
                autoPlay={true}
                playTime={4000}
                height={150}
                data={this.datacarousel}
                navigationType={'dots'}
                navigationColor={'#0879B9'}
                navigation={true}
                align={'center'}
                titleColor={'#0879B9'}
                currentItem={this.indexCarousel}
            />
            <View style={Css.parametersBtn}>
                <TouchableOpacity
                    style={{ width: 160, height: 160, borderStyle: 'solid', borderColor: '#E1ECF4',borderRadius: 160 / 2, borderWidth: 2, paddingTop: 15}}
                    onPress={() => global.getNavigationProps("Parameters")} >
                    <Image
                        style={Css.changeInfoBtn}
                        source={require('../Ressources/Img/reglages.png')}
                    />
                    <Text style = {[Css.parametersBtnTxt]}>
                        Réglages
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ width: 160, height: 160, borderStyle: 'solid', borderColor: '#E1ECF4',borderRadius: 160 / 2, borderWidth: 2, paddingTop: 15 }}
                    onPress={() => {
                    global.getNavigationProps("Informations", {
                        hasPictures: this.state.hasPictures,
                        // userImages: global.getCurrentUser.images
                        });
                }} >
                    <Image
                        style={Css.changeInfoBtn}
                        source={require('../Ressources/Img/changeInfo.png')}
                    />
                    <Text style = {[Css.parametersBtnTxt]}>
                        Vos informations
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
}

const mapStateToProps = (state) => {
    return {
        sponsorshipCode: state.sponsorshipCode,
        globalUser: state.globalUser
    }
};
export default connect(mapStateToProps)(Profil)