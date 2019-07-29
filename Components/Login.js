import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import Css from '../Ressources/Css/Css';
import Inscription from './Inscription';
import {register} from "../API/GlobalApiFunctions";

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            noAccount: 0,
        }
    }

    InscriptionAction = (lastName, firstName, age, sexe, phoneNumber, email, password, confirmPassword, passwordsValidate = null) => {
        if (passwordsValidate === null)
        {
            register(lastName, firstName, age, sexe, phoneNumber, email, password, confirmPassword).then((responseJson) => {
                if (responseJson.status === 201) {
                    this.props.LoginAction(email, password)
                }
            }).catch((error, response) => {
                console.log(response);
                return Promise.reject(error);
            });
        }
    };

    render() {
        // const loginActi = this.props._login(this.state.username, this.state.password);
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

                        <TouchableOpacity style={Css.buttonContainer} onPress={() => this.props.LoginAction(this.state.username, this.state.password)}>
                            <Text style={Css.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({noAccount: 1})}>
                            <Text style={Css.buttonText}>Pas encore de compte ? Cliquez ici</Text>
                        </TouchableOpacity>
                    </View>
                    )
                : <Inscription InscriptionAction = {this.InscriptionAction} setParentState={newState=>this.setState(newState)} /> }

            </View>
        )
    }
}

export default Login