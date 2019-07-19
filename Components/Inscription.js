import React from 'react'
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native'
import Css from '../Ressources/Css/Css';

class Inscription extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lastName: "",
            firstName: "",
            age: "",
            sexe: "",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
            noAccount: 0,
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    render() {
        // const loginActi = this.props._login(this.state.username, this.state.password);
        return (
            <View style={Css.main_container_login}>
                <TextInput style = {[Css.input, this.props.usernameValidate ? Css.error : null]}
                           autoCapitalize="none"
                           autoCorrect={false}
                           returnKeyType="next"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           placeholder='Nom'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           onChangeText={(lastName) => this.setState({lastName: lastName })}
                />
                <TextInput style = {[Css.input, this.props.usernameValidate ? Css.error : null]}
                           autoCapitalize="none"
                           autoCorrect={false}
                           returnKeyType="next"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           placeholder='Prénom'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           onChangeText={(firstName) => this.setState({firstName: firstName })}
                />
                <TextInput style = {[Css.input, this.props.usernameValidate ? Css.error : null]}
                           autoCapitalize="none"
                           autoCorrect={false}
                           returnKeyType="next"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           placeholder='Age'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           onChangeText={(age) => this.setState({age: age })}
                />
                <TextInput style = {[Css.input, this.props.usernameValidate ? Css.error : null]}
                           autoCapitalize="none"
                           autoCorrect={false}
                           returnKeyType="next"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           placeholder='Sexe'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           onChangeText={(sexe) => this.setState({sexe: sexe })}
                />
                <TextInput style = {[Css.input, this.props.usernameValidate ? Css.error : null]}
                           autoCapitalize="none"
                           autoCorrect={false}
                           returnKeyType="next"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           placeholder='Téléphone'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           onChangeText={(phoneNumber) => this.setState({phoneNumber: phoneNumber })}
                />
                <TextInput style = {[Css.input, this.props.usernameValidate ? Css.error : null]}
                           autoCapitalize="none"
                           autoCorrect={false}
                           keyboardType='email-address'
                           returnKeyType="next"
                           onSubmitEditing={() => this.passwordInput.focus()}
                           placeholder='Adresse email'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           onChangeText={(email) => this.setState({email: email})}
                />
                <TextInput style = {[Css.input, this.props.passwordValidate ? Css.error : null]}
                           returnKeyType="go"
                           ref={(input)=> this.passwordInput = input}
                           placeholder='Mot de passe'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           onChangeText={(password) => this.setState({password: password})}
                           secureTextEntry
                />
                <TextInput style = {[Css.input, this.props.passwordValidate ? Css.error : null]}
                           returnKeyType="go"
                           ref={(input)=> this.passwordInput = input}
                           placeholder='Confirmation de votre mot de passe'
                           placeholderTextColor='rgba(225,225,225,0.7)'
                           onChangeText={(confirmPassword) => this.setState({confirmPassword: confirmPassword})}
                           secureTextEntry
                />
                <TouchableOpacity style={Css.buttonContainer} onPress={() => this.props.InscriptionAction(this.state.lastName, this.state.firstName, this.state.age, this.state.sexe, this.state.phoneNumber, this.state.email, this.state.password, this.state.confirmPassword)}>
                    <Text style={Css.buttonText}>S'INSCRIRE</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Inscription