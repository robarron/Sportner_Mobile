import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native'
import Css from '../Ressources/Css/Css';
import Inscription from './Inscription';
import {register, getUserObject} from "../API/GlobalApiFunctions";
import { facebookService } from '../Services/FacebookService';
import {Facebook} from "expo";
import Moment from 'moment';
import {
    SkypeIndicator,
} from 'react-native-indicators';
import Spinner from 'react-native-loading-spinner-overlay';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            passwordFB: "",
            noAccount: 0,
            fbUserInfo: null,
            showIndicator: false
        }
    }

    login = async () => {
        try {
            const {
                type,
                token
            } = await Facebook.logInWithReadPermissionsAsync("402637407039678", {
                permissions: ["public_profile", "email", "user_likes", "user_location"]
            });
            if (type === "success") {
                this.setState({showIndicator: true});
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,address,first_name,email,last_name,interested_in,gender,link,name_format,political,test_group,sports,location,about,picture,birthday,relationship_status,short_name,groups{name,subdomain,link,description}`);

                const responseJSON = await response.json();
                this.setState({fbUserInfo: responseJSON });

                register(responseJSON['last_name'], responseJSON['first_name'], null, responseJSON['gender'], null, responseJSON['email'], null, null, responseJSON)
                .then((response) => {
                    // console.log(response);

                if (response.status === 201) {
                    return response.json().then((json) => {
                        this.setState({passwordFB: json.password_plain_text});
                        this.props.LoginAction(json.email, json.password_plain_text)
                    })
                }
                }).catch((error, response) => {
                    return Promise.reject(error);
                });
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    };

    InscriptionAction = (lastName, firstName, age, sexe, phoneNumber, email, password, confirmPassword, passwordsValidate = null) => {
        if (passwordsValidate === null)
        {
            register(lastName, firstName, age, sexe, phoneNumber, email, password, confirmPassword).then((responseJson) => {

                if (responseJson.status === 201) {
                    this.props.LoginAction(email, password)
                }
            }).catch((error, response) => {
                // console.log(response);
                return Promise.reject(error);
            });
        }
    };

    render() {
        return (

            <View style={[Css.main_container_blue]}>
                <Image style={[Css.backgroundImg]} source={require('../Ressources/Img/terre_battue8.jpg')}/>
                <View >
                    <Image style={[Css.logo]} source={require('../Ressources/Img/sportnerLogo.png')}/>
                </View>

                {this.state.noAccount === 0 ?
                    (
                    <View style={Css.main_container_login}>
                        { this.props.loginFormValidate }

                        <TextInput style = {[Css.input, this.props.usernameValidate ? Css.error : null]}
                                   autoCapitalize="none"
                                   autoCorrect={false}
                                   keyboardType='email-address'
                                   returnKeyType="next"
                                   onSubmitEditing={() => this.passwordInput.focus()}
                                   placeholder='Adresse email'
                                   placeholderTextColor='white'
                                   onChangeText={(username) => this.setState({username: username })}
                        />

                        { this.props.usernameValidate }

                        <TextInput style = {[Css.input, this.props.passwordValidate ? Css.error : null]}
                                   returnKeyType="go"
                                   ref={(input)=> this.passwordInput = input}
                                   placeholder='Mot de passe'
                                   placeholderTextColor='white'
                                   onChangeText={(password) => this.setState({password: password})}
                                   secureTextEntry
                        />

                        { this.props.passwordValidate }

                        <TouchableOpacity style={Css.buttonContainer} onPress={() => { this.props.LoginAction(this.state.username, this.state.password); this.setState({showIndicator: true})}}>
                            <Text style={Css.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({noAccount: 1})}>
                            <Text style={Css.buttonText}>Pas encore de compte ? Cliquez ici</Text>
                        </TouchableOpacity>
                    </View>
                    )
                : <Inscription InscriptionAction = {this.InscriptionAction} setParentState={newState=>this.setState(newState)} /> }
                {/*onPress = {() => { this.props._retrieveData(); this.props.FacebookLoginAction() }}*/}
                {/*onPress={this.props.FacebookLoginAction()}*/}
                <TouchableOpacity onPress={() => { this.login()}}>
                    <Image
                        style={[Css.logInBtn ]}
                        source={require('../Ressources/Img/fbLogIn.png')}
                         />
                </TouchableOpacity>
                {
                this.state.showIndicator ?
                <View style={{justifyContent: 'center', flexDirection: 'column'}}>
                {/*Code to show Activity Indicator*/}
                    <ActivityIndicator size='large' color="#036BBB" />
                {/*Size can be large/ small*/}
                </View> : null
                }
                {/*<Spinner*/}
                    {/*//visibility of Overlay Loading Spinner*/}
                    {/*visible={this.state.showIndicator}*/}
                    {/*//Text with the Spinner*/}
                    {/*textContent={'Chargement...'}*/}
                    {/*//Text style of the Spinner Text*/}
                    {/*textStyle={{justifyContent: 'center',*/}
                        {/*textAlign: 'center',*/}
                        {/*paddingTop: 30,*/}
                        {/*padding: 8,*/}
                        {/*color: 'white'*/}
                    {/*}}*/}
                {/*/>*/}
            </View>
        )
    }
}

export default Login