import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import Css from '../Ressources/Css/Css';

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    render() {
        // const loginActi = this.props._login(this.state.username, this.state.password);
        return (

            <View style={Css.main_container_blue}>
                <View style={Css.container_flex_logo}>
                    <Image style={[Css.logo]} source={require('../Ressources/Img/sportnerLogo2.png')}/>
                    <Image style={[Css.logo]} source={require('../Ressources/Img/sportnerLogo.png')}/>
                    <View style={Css.main_container_blue}>
                        <TextInput style = {[Css.input, this.props.usernameValidate ? Css.error : null]}
                                   autoCapitalize="none"
                                   onSubmitEditing={() => this.passwordInput.focus()}
                                   autoCorrect={false}
                                   keyboardType='email-address'
                                   returnKeyType="next"
                                   placeholder='Adresse email'
                                   placeholderTextColor='rgba(225,225,225,0.7)'
                                   onChangeText={(username) => this.setState({username: username })}
                        />

                        { this.props.usernameValidate }

                        <TextInput style = {[Css.input, this.props.passwordValidate ? Css.error : null]}
                                   returnKeyType="go"
                                   ref={(input)=> this.passwordInput = input}
                                   placeholder='Mot de passe'
                                   placeholderTextColor='rgba(225,225,225,0.7)'
                                   onChangeText={(password) => this.setState({password: password})}
                                   secureTextEntry
                        />

                        { this.props.passwordValidate }

                        <TouchableOpacity style={Css.buttonContainer} onPress={() => this.props.LoginAction(this.state.username, this.state.password)}>
                            <Text  style={Css.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Login