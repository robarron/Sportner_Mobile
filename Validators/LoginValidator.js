import Css from '../Ressources/Css/Css';
import {Text} from 'react-native'
import React from 'react'
import isEmpty from 'validator/lib/isEmpty';


export function usernameValidate(username) {
    if (isEmpty(username)) {
        const errorUsernameContent = "Veuillez renseigner un identifiant";
        return <Text style = {[Css.input, Css.errorContent]}>
                    {errorUsernameContent}
               </Text>
    } else {
        return null;
    }
}

export function passwordValidate(pw) {
    if (isEmpty(pw)) {
        const errorUsernameContent = "Veuillez renseigner un mot de passe";
        return <Text style = {[Css.input, Css.errorContent]}>
                   {errorUsernameContent}
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