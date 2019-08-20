const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NjQ4NDQ0MzEsImV4cCI6MTU2NzQzNjQzMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoibWFnNDgwMjRAZ21haWwuY29tIn0.qNWmo-_l12D9Ev7az37JwxrKbrKGTyloPhAVaUdOMo5Iv3lPL4W8J0PJewdVuaS3ICgA3yT7-B5PoAUT1Mcug-6a7WNldMB6_vG66YzyN_yJiHiRm8b-HR2N6BEeDd5DTTEcQpfjQlvwbvIWJQfBO6efe9B4xqVI62nrm-3D4Wl2rwyiKsVbCQEQHbCYbu2CdLxQ4HRjIT4qrcRTYPuqdfLke11rLwYQ6K6c6vZjlSGTbBQVVYUhIXOCHJy03j2sukI1DcV5cBTR1-7H9stkq9iIFTrq0bIBFE10jFbfNUqKS08h1NN9bRAaZJ4vLNWmBEIcuhyQrPJmBmr7r3oi3ldd8RqMBGeqa-1T-DOzsH7tGGphvwSPMg0TomkJfclEESAerYD31C99-1tBl7IVZ2b-PXFWEaxL1nL5OTRmgEII9oYlR9EIovXNNIAiIyZxxozYpyWO5HP6WML6OFE5ga_2L98FqMbH4baEx7Lh0q3mb084ALG1AbNW3HtYQ5BjRo72MhlL_H0PZ4yRBrhaaUNGg09gEJK0x6JIdLKDO1dSk94UqNzhCc6DjXuh_wKWh9DPRl7cl4faexWtMJ5vrhuG1ZPBy1adzLU8VwxUG1dCpbBkjJ8X1cDwXGcT_1n6twaYtEBVJyaWfr1eGB3HqYQ6UParm5K1DLxoNPoe0yM";

export function getUserObject(userEmail = null) {
    let mailUser = userEmail ? userEmail : global.getUserEmail;

    return fetch('http://192.168.1.62:8000/api/userByEmail/' + mailUser, {
        // return fetch('http://192.168.1.62:8000/api/userByEmail/' + mailUser, {
        method: 'GET',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": global.getJwtToken
        },
    });
}

export function UserHasMatch(userId, secondUserId) {

    return fetch('http://192.168.1.62:8000/api/user_has_match/' + userId + '/' + secondUserId, {
        // return fetch('http://192.168.1.62:8000/api/userByEmail/' + mailUser, {
        method: 'GET',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": global.getJwtToken
        },
    });
}

export function postSponsorShipCode(sponsorshipCode) {

    return fetch('http://192.168.1.62:8000/api/sponsorshipCode/' + global.getCurrentUserId, {
        // return fetch('http://192.168.1.62:8000/api/userByEmail/' + mailUser, {
        method: 'POST',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body: JSON.stringify( {
            sponsorshipCode: sponsorshipCode,
        }),
    });
}

export function patchSponsorShipCode(sponsorshipCode) {

    return fetch('http://192.168.1.62:8000/api/sponsorshipCode/' + global.getCurrentUserId, {
        // return fetch('http://192.168.1.62:8000/api/userByEmail/' + mailUser, {
        method: 'PATCH',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body: JSON.stringify( {
            sponsorshipCode: sponsorshipCode,
        }),
    });
}

export function checkSponsorShipCode(sponsorshipCode) {
    return fetch('http://192.168.1.62:8000/api/checkSponsorshipCode/' + global.getCurrentUserId + '/' + sponsorshipCode, {
        // return fetch('http://192.168.1.62:8000/api/userByEmail/' + mailUser, {
        method: 'GET',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": token
        },
    });
}

export function setDailyPointDate(dailyPointsDoneAtDate) {
    return fetch('http://192.168.1.62:8000/api/setDailyPointDate/' + global.getCurrentUserId, {
        // return fetch('http://192.168.1.62:8000/api/userByEmail/' + mailUser, {
        method: 'PATCH',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": token
        },
        body: JSON.stringify( {
            dailyPointsDoneAtDate: dailyPointsDoneAtDate,
        }),
    });
}

export function getUsersWithoutCurrentUser(page = 1) {
    return fetch("http://192.168.1.62:8000/api/users_without_me/" + global.getCurrentUserId + '?page=' + page, {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'GET',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
    })
}

export function getUserParameter() {
    return fetch("http://192.168.1.62:8000/api/userParameter/" + global.getCurrentUserId, {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'GET',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
    })
}

export function getUser() {
    getUserParameter().then((responseJson) => {
        if (responseJson.status !== 404 || responseJson.status !== 500) {
            return responseJson.json().then((data) => {

                if (data) {
                    return {
                        sexe: 2,
                        userPhone: data.user.phone_number,
                        userMail: data.user.email,
                        userPlacement: [],
                        displayProfil: data.display_profil,
                        displayPic: data.display_pic,
                        displayMotivations: data.display_motivations,
                        displayCaracSportives: data.display_carac_sportives,
                        displayDispo: data.display_dispo,
                        displayLevel: data.display_level,
                        matchNotif: data.notif_match,
                        msgNotif: data.notif_message,
                        majNotif: data.notif_maj,
                        matchPush: data._match_push,
                        msgPush: data._msg_push
                    }
                } else {
                    return {
                        sexe: 2,
                        userPhone: "Téléphone",
                        userMail: "E-mail",
                        userPlacement: [],
                        displayProfil: true,
                        displayPic: true,
                        displayMotivations: true,
                        displayCaracSportives: true,
                        displayDispo: true,
                        displayLevel: true,
                        matchNotif: true,
                        msgNotif: true,
                        majNotif: true,
                        matchPush: true,
                        msgPush: true
                    }
                }
            });
        }
    });

    getUserObject().then((responseJson) => {
        if (responseJson.status !== 404) {
            responseJson.json().then((data) => {
                global.getCurrentUser = data;
                global.getCurrentUserId = data.id;
                return {
                    sexe: global.getCurrentUser.sexe ? global.getCurrentUser.sexe : 2,
                    userPhone: "Téléphone",
                    userMail: "E-mail",
                    userPlacement: [],
                    displayProfil: true,
                    displayPic: true,
                    displayMotivations: true,
                    displayCaracSportives: true,
                    displayDispo: true,
                    displayLevel: true,
                    matchNotif: true,
                    msgNotif: true,
                    majNotif: true,
                    matchPush: true,
                    msgPush: true,
                };
            })
        } else {
            return {
                sexe: 2,
                userPhone: "Téléphone",
                userMail: "E-mail",
                userPlacement: [],
                displayProfil: true,
                displayPic: true,
                displayMotivations: true,
                displayCaracSportives: true,
                displayDispo: true,
                displayLevel: true,
                matchNotif: true,
                msgNotif: true,
                majNotif: true,
                matchPush: true,
                msgPush: true,
            }
        }
    });
}


export function getImagesWithoutCurrentUser(page) {
    return fetch("http://192.168.1.62:8000/api/images_without_me/" + global.getCurrentUserId + '?page=' + page, {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'GET',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
    })
}

export function getAllImagesWithoutCurrentUser() {
    return fetch("http://192.168.1.62:8000/api/all_images_without_me/" + global.getCurrentUserId, {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'GET',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
    })
}

export function getImagesWithoutCurrentUserAndPaginate() {
    return fetch("http://192.168.1.62:8000/api/images_without_me/" + global.getCurrentUserId, {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'GET',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
    })
}

export function HasUserProfilPicture() {
    return fetch("http://192.168.1.62:8000/api/has_profil_picture/" + global.getCurrentUserId, {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'GET',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : token
        },
    })
}

export function login_check(username, password) {
    return fetch("http://192.168.1.62:8000/api/login_check", {
//         fetch("http:/192.168.15.144:8000/api/login_check", {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( {
            username: username,
            password: password
        }),
    })
}

export function createMatchProposition(user1, proposed_to) {
    return fetch("http://192.168.1.62:8000/api/match_proposition/" + user1, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( {
            wanted_user: proposed_to
        }),
    })
}

export function register(lastName, firstName, age, sexe, phoneNumber = null, email, password, confirmPassword, fbUserInfo = null) {
    return fetch("http://192.168.1.62:8000/api/register", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify( {
            firstName: firstName,
            lastName: lastName,
            age: age,
            sexe: sexe,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            fbUserInfo: fbUserInfo
        }),
    })
}

export function postImage(pictureNumber, base64) {
    let body = null;

    if (pictureNumber === "profil_pic") {
        body = JSON.stringify( {
            profil_pic: base64,
        });
    } else if (pictureNumber === "pic2") {
        body = JSON.stringify( {
            pic2: base64,
        });
    } else if (pictureNumber === "pic3") {
        body = JSON.stringify( {
            pic3: base64,
        });
    } else if (pictureNumber === "pic4") {
        body = JSON.stringify( {
            pic4: base64,
        });
    } else if (pictureNumber === "pic5") {
        body = JSON.stringify( {
            pic5: base64,
        });
    } else if (pictureNumber === "pic6") {
        body = JSON.stringify( {
            pic6: base64,
        });
    }

    return fetch("http://192.168.1.62:8000/api/image/" + global.getCurrentUserId, {
        // fetch("http://192.168.15.144:8000/api/image", {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'POST',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
        body: body,
    })
}

export function patchImage(pictureNumber, base64) {
    let body = null;

    if (pictureNumber === "profil_pic") {
        body = JSON.stringify( {
            profil_pic: base64,
        });
    } else if (pictureNumber === "pic2") {
        body = JSON.stringify( {
            pic2: base64,
        });
    } else if (pictureNumber === "pic3") {
        body = JSON.stringify( {
            pic3: base64,
        });
    } else if (pictureNumber === "pic4") {
        body = JSON.stringify( {
            pic4: base64,
        });
    } else if (pictureNumber === "pic5") {
        body = JSON.stringify( {
            pic5: base64,
        });
    } else if (pictureNumber === "pic6") {
        body = JSON.stringify( {
            pic6: base64,
        });
    }

    return fetch("http://192.168.1.62:8000/api/images/" + global.getCurrentUserId, {
        // fetch("http://192.168.15.144:8000/api/image", {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'PATCH',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
        body: body,
    })
}

export function suppressImage(pictureNumber) {
    let body = null;

    if (pictureNumber === "profil_pic") {
        body = JSON.stringify( {
            profil_pic: pictureNumber,
        });
    } else if (pictureNumber === "pic2") {
        body = JSON.stringify( {
            pic2: pictureNumber,
        });
    } else if (pictureNumber === "pic3") {
        body = JSON.stringify( {
            pic3: pictureNumber,
        });
    } else if (pictureNumber === "pic4") {
        body = JSON.stringify( {
            pic4: pictureNumber,
        });
    } else if (pictureNumber === "pic5") {
        body = JSON.stringify( {
            pic5: pictureNumber,
        });
    } else if (pictureNumber === "pic6") {
        body = JSON.stringify( {
            pic6: pictureNumber,
        });
    }

    return fetch("http://192.168.1.62:8000/api/images/" + global.getCurrentUserId, {
        // fetch("http://192.168.15.144:8000/api/image", {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'DELETE',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
        body: body,
    })
}

export function modifyUserInfo(
    motivation,
    userSportCarac,
    sexe,
    city,
    favoriteSport,
    level,
    mondayDispoBeginning,
    mondayDispoClosing,
    tuesdayDispoBeginning,
    tuesdayDispoClosing,
    wednesdayDispoBeginning,
    wednesdayDispoClosing,
    thursdayDispoBeginning,
    thursdayDispoClosing,
    fridayDispoBeginning,
    fridayDispoClosing,
    saturdayDispoBeginning,
    saturdayDispoClosing,
    sundayDispoBeginning,
    sundayDispoClosing)
{

    return fetch("http://192.168.1.62:8000/api/users/" + global.getCurrentUserId, {
        // fetch("http://192.168.15.144:8000/api/image", {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'PATCH',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
        body: JSON.stringify( {
            motivation: motivation,
            userSportCarac: userSportCarac,
            sexe: sexe,
            city: city,
            favoriteSport: favoriteSport,
            level: level,
            mondayDispoBeginning: mondayDispoBeginning,
            mondayDispoClosing: mondayDispoClosing,
            tuesdayDispoBeginning: tuesdayDispoBeginning,
            tuesdayDispoClosing: tuesdayDispoClosing,
            wednesdayDispoBeginning: wednesdayDispoBeginning,
            wednesdayDispoClosing: wednesdayDispoClosing,
            thursdayDispoBeginning: thursdayDispoBeginning,
            thursdayDispoClosing: thursdayDispoClosing,
            fridayDispoBeginning: fridayDispoBeginning,
            fridayDispoClosing: fridayDispoClosing,
            saturdayDispoBeginning: saturdayDispoBeginning,
            saturdayDispoClosing: saturdayDispoClosing,
            sundayDispoBeginning: sundayDispoBeginning,
            sundayDispoClosing: sundayDispoClosing
        }),
    });
}

export function postUserParameters(
    userPhone,
    userMail,
    userPlacement,
    distance,
    sexe,
    minAge,
    maxAge,
    displayProfil,
    displayPic,
    displayMotivations,
    displayCaracSportives,
    displayDispo,
    displayLevel,
    matchNotif,
    msgNotif,
    majNotif,
    matchPush,
    msgPush,
)
{
    return fetch("http://192.168.1.62:8000/api/userParameter/" + global.getCurrentUserId, {
        // fetch("http://192.168.15.144:8000/api/image", {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'POST',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
        body: JSON.stringify( {
            userPhone:             userPhone,
            userMail:              userMail,
            userPlacement:         userPlacement,
            distance:              distance,
            sexe:                  sexe,
            minAge:                minAge,
            maxAge:                maxAge,
            displayProfil:         displayProfil,
            displayPic:            displayPic,
            displayMotivations:    displayMotivations,
            displayCaracSportives: displayCaracSportives,
            displayDispo:          displayDispo,
            displayLevel:          displayLevel,
            matchNotif:            matchNotif,
            msgNotif:              msgNotif,
            majNotif:              majNotif,
            matchPush:             matchPush,
            msgPush:               msgPush,
        }),
    });
}

export function patchUserParameters(
    userPhone,
    userMail,
    userPlacement,
    distance,
    sexe,
    minAge,
    maxAge,
    displayProfil,
    displayPic,
    displayMotivations,
    displayCaracSportives,
    displayDispo,
    displayLevel,
    matchNotif,
    msgNotif,
    majNotif,
    matchPush,
    msgPush,
)
{
    return fetch("http://192.168.1.62:8000/api/userParameter/" + global.getCurrentUserId, {
        method: 'PATCH',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization" : global.getJwtToken
        },
        body: JSON.stringify( {
            userPhone:             userPhone,
            userMail:              userMail,
            userPlacement:         userPlacement,
            distance:              distance,
            sexe:                  sexe,
            minAge:                minAge,
            maxAge:                maxAge,
            displayProfil:         displayProfil,
            displayPic:            displayPic,
            displayMotivations:    displayMotivations,
            displayCaracSportives: displayCaracSportives,
            displayDispo:          displayDispo,
            displayLevel:          displayLevel,
            matchNotif:            matchNotif,
            msgNotif:              msgNotif,
            majNotif:              majNotif,
            matchPush:             matchPush,
            msgPush:               msgPush,
        }),
    });
}

