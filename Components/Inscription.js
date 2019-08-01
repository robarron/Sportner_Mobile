import React from 'react'
import {View, Text, TextInput, TouchableOpacity, Picker} from 'react-native'
import Css from '../Ressources/Css/Css';
import * as Validator from "../Validators/InscriptionValidator";
import DatePicker from 'react-native-datepicker'

class Inscription extends React.Component {

    constructor(props) {
        super(props);
        this.lastNameValidate = null;
        this.firstNameValidate = null;
        this.sexeValidate = null;
        this.ageValidate = null;
        this.phoneNumberValidate = null;
        this.emailValidate = null;
        this.passwordsValidate = null;
        this.state = {
            lastName: "",
            firstName: "",
            age: "",
            sexe: "Sexe",
            phoneNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
            noAccount: 0,
            step1: 1,
            step2: 0,
            step3: 0,
        }
        // Ici on va créer les propriétés de notre component custom Search
    }

    FirstValidation = (lastName, firstName, sexe) => {
        this.lastNameValidate = Validator.lastNameValidate(lastName);
        this.firstNameValidate = Validator.firstNameValidate(firstName);
        this.sexeValidate = Validator.sexeValidate(sexe);

        if (this.lastNameValidate || this.firstNameValidate || this.sexeValidate) {
            this.setState({step1: 1, step2: 0 })
        }
    };

    SecondValidation = (age, phoneNumber, email) => {
        this.ageValidate = Validator.ageValidate(age);
        this.phoneNumberValidate = Validator.phoneNumberValidate(phoneNumber);
        this.emailValidate = Validator.emailValidate(email);

        if (this.ageValidate || this.phoneNumberValidate || this.emailValidate ) {
            this.setState({step2: 1, step3: 0 })
        }
    };

    FinalValidation = (password, confirmPassword) => {
        this.passwordsValidate = Validator.passwordsValidate(password, confirmPassword);

        if (this.passwordsValidate) {
            this.setState({step3: 1 })
        }
    };

    render() {
        return (
            <View style={Css.main_container_login}>
                {this.state.step1 === 1 ?
                    (
                        <View style={{ borderWidth: 0 }}>
                            <TextInput style = {[Css.input, this.lastNameValidate ? Css.error : null]}
                                       returnKeyType="next"
                                       onSubmitEditing={() => this.firstNameInput.focus()}
                                       placeholder={ this.state.lastName ? this.state.lastName : 'Nom' }
                                       placeholderTextColor='white'
                                       onChangeText={(lastName) => this.setState({lastName: lastName })}
                            />

                            { this.lastNameValidate }

                            <TextInput style = {[Css.input, this.firstNameValidate ? Css.error : null]}
                                       autoCapitalize="none"
                                       autoCorrect={false}
                                       returnKeyType="next"
                                       ref={(input)=> this.firstNameInput = input}
                                       placeholder={ this.state.firstName ? this.state.firstName : 'Prénom' }
                                       placeholderTextColor='white'
                                       onChangeText={(firstName) => this.setState({firstName: firstName })}
                            />
                            { this.firstNameValidate }

                            <Picker selectedValue = {this.state.sexe} onValueChange={(itemValue, itemIndex) =>
                                this.setState({sexe: itemValue})}
                                itemStyle={[Css.picker, this.sexeValidate ? Css.error : null ]}
                                value={this.state.sexe}
                            >
                                <Picker.Item label = "Sexe" value = "null" />
                                <Picker.Item label = "Homme" value = "homme" />
                                <Picker.Item label = "Femme" value = "femme" />
                            </Picker>

                            { this.sexeValidate }

                            <TouchableOpacity style={Css.buttonContainer} onPress={() => { this.setState({step2: 1, step1 : 0 }); this.FirstValidation(this.state.lastName, this.state.firstName, this.state.sexe) }}>
                                <Text style={Css.buttonText}>SUIVANT</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null}
                {this.state.step2 === 1 ?
                    (
                        <View>
                            <DatePicker
                                style = {[Css.datePicker, this.ageValidate ? Css.error : null]}
                                date={this.state.age}
                                mode="date"
                                placeholder={ this.state.age ? this.state.age : 'Age' }
                                format="YYYY-MM-DD"
                                minDate="1900-01-01"
                                maxDate="now"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        marginLeft: 36,
                                        borderWidth: 0,
                                        color: '#fff',
                                    }
                                }}
                                onDateChange={(date) => {this.setState({age: date})}}
                            />

                            { this.ageValidate }

                            <TextInput style = {[Css.input, this.phoneNumberValidate ? Css.error : null]}
                                       autoCapitalize="none"
                                       autoCorrect={false}
                                       returnKeyType="next"
                                       ref={(input)=> this.phoneInput = input}
                                       onSubmitEditing={() => this.emailInput.focus()}
                                       placeholder={ this.state.phoneNumber ? this.state.phoneNumber : 'Téléphone' }
                                       placeholderTextColor='white'
                                       onChangeText={(phoneNumber) => this.setState({phoneNumber: phoneNumber })}
                            />

                            { this.phoneNumberValidate }

                            <TextInput style = {[Css.input, this.emailValidate ? Css.error : null]}
                                       autoCapitalize="none"
                                       autoCorrect={false}
                                       keyboardType='email-address'
                                       returnKeyType="next"
                                       ref={(input)=> this.emailInput = input}
                                       placeholder={ this.state.email ? this.state.email : 'Adresse email' }
                                       placeholderTextColor='white'
                                       onChangeText={(email) => this.setState({email: email})}
                            />

                            { this.emailValidate }

                            <View style = {[Css.buttonWrapper]}>
                                <TouchableOpacity style={Css.buttonContainerInscription} onPress={() => this.setState({step1: 1, step2: 0 })}>
                                    <Text style={Css.buttonText2}>PRECEDENT</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Css.buttonContainerInscription} onPress={() => { this.setState({step3: 1, step2: 0 }); this.SecondValidation(this.state.age, this.state.phoneNumber, this.state.email) }}>
                                    <Text style={Css.buttonText2}>SUIVANT</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null }
                {this.state.step3 === 1 ?
                    (
                        <View>
                            <TextInput style = {[Css.input, this.passwordsValidate ? Css.error : null]}
                                       returnKeyType="go"
                                       ref={(input)=> this.passwordInput = input}
                                       onSubmitEditing={() => this.confirmPasswordInput.focus()}
                                       placeholder={ this.state.password ? this.state.password : 'Mot de passe' }
                                       placeholderTextColor='white'
                                       onChangeText={(password) => this.setState({password: password})}
                                       secureTextEntry
                            />
                            <TextInput style = {[Css.input, this.passwordsValidate ? Css.error : null]}
                                       returnKeyType="go"
                                       ref={(input)=> this.confirmPasswordInput = input}
                                       placeholder={ this.state.confirmPassword ? this.state.confirmPassword : 'Confirmation de votre mot de passe' }
                                       placeholderTextColor='white'
                                       onChangeText={(confirmPassword) => this.setState({confirmPassword: confirmPassword})}
                                       secureTextEntry
                            />

                            { this.passwordsValidate }

                            <View style = {[Css.buttonWrapper]}>
                                <TouchableOpacity style={Css.buttonContainerInscription} onPress={() => this.setState({step2: 1, step3: 0 })}>
                                    <Text style={Css.buttonText2}>PRECEDENT</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={Css.buttonContainerInscription} onPress={() => { this.FinalValidation(this.state.password, this.state.confirmPassword); this.props.InscriptionAction(this.state.lastName, this.state.firstName, this.state.age, this.state.sexe, this.state.phoneNumber, this.state.email, this.state.password, this.state.confirmPassword, this.passwordsValidate) }}>
                                    <Text style={Css.buttonText2}>S'INSCRIRE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : null}
                <TouchableOpacity onPress={() => this.props.setParentState({noAccount: 0})}>
                    <Text style={Css.buttonText}>Vous avez un compte ? Connectez vous ici</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Inscription