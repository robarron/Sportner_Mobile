import Css from '../Ressources/Css/Css';
import {Text} from 'react-native'
import React from 'react'
import isEmpty from 'validator/lib/isEmpty';


export function lastNameValidate(lastName) {
    if (isEmpty(lastName)) {
        const errorLastNameContent = "Veuillez renseigner un nom";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorLastNameContent}
        </Text>
    } else {
        return null;
    }
}

export function firstNameValidate(firstName) {
    if (isEmpty(firstName)) {
        const errorFirstNameContent = "Veuillez renseigner un prénom";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorFirstNameContent}
        </Text>
    } else {
        return null;
    }
}

export function sexeValidate(sexe) {
    if (sexe === 'Sexe' || !sexe) {
        const errorSexeContent = "Veuillez renseigner une civilité";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorSexeContent}
        </Text>
    } else {
        return null;
    }
}

export function ageValidate(age) {
    if (isEmpty(age)) {
        const errorAgeContent = "Veuillez renseigner un age";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorAgeContent}
        </Text>
    } else if (Number.isNaN(age)) {
        const errorAgeContent = "Veuillez renseigner un nombre";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorAgeContent}
        </Text>
    } else if (age < 18) {
        const errorAgeContent = "Vous devez avoir plus de 18 ans";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorAgeContent}
        </Text>
    }
    else {
        return null;
    }
}

export function phoneNumberValidate(phone) {
    if (isEmpty(phone)) {
        const errorPhoneNumberContent = "Veuillez renseigner un numéro de téléphone";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorPhoneNumberContent}
        </Text>
    } else if (phone.match("^(10|\d)$")) {
        const errorPhoneNumberContent = "Veuillez renseigner un nombre";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorPhoneNumberContent}
        </Text>
    } else if (phone.length !== 10) {
        const errorPhoneNumberContent = "Le numéro doit contenir 10 chiffres";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorPhoneNumberContent}
        </Text>
    }
    else {
        return null;
    }
}

export function emailValidate(email) {
    let reg = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/ ;
    if (reg.test(email) === false)
    {
        const errorEmailContent = "Veuillez renseigner une adresse email valide";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorEmailContent}
        </Text>
    } else {
        return null;
    }
}

export function passwordsValidate(password, confirmPassword) {
    if (password !== confirmPassword)
    {
        const errorPwContent = "Les deux mots de passe ne sont pas identiques";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorPwContent}
        </Text>
    } else {
        return null;
    }
}

export function loginFormValidate(logStatus, username, pw) {
    if (logStatus === 401 && username && pw) {
        const errorLoginContent = "Vos identifiants sont erronés";
        return <Text style = {[Css.input, Css.errorContent]}>
            {errorLoginContent}
        </Text>
    } else {
        return null;
    }
}