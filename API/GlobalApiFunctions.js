const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NjQ4NDQ0MzEsImV4cCI6MTU2NzQzNjQzMSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoibWFnNDgwMjRAZ21haWwuY29tIn0.qNWmo-_l12D9Ev7az37JwxrKbrKGTyloPhAVaUdOMo5Iv3lPL4W8J0PJewdVuaS3ICgA3yT7-B5PoAUT1Mcug-6a7WNldMB6_vG66YzyN_yJiHiRm8b-HR2N6BEeDd5DTTEcQpfjQlvwbvIWJQfBO6efe9B4xqVI62nrm-3D4Wl2rwyiKsVbCQEQHbCYbu2CdLxQ4HRjIT4qrcRTYPuqdfLke11rLwYQ6K6c6vZjlSGTbBQVVYUhIXOCHJy03j2sukI1DcV5cBTR1-7H9stkq9iIFTrq0bIBFE10jFbfNUqKS08h1NN9bRAaZJ4vLNWmBEIcuhyQrPJmBmr7r3oi3ldd8RqMBGeqa-1T-DOzsH7tGGphvwSPMg0TomkJfclEESAerYD31C99-1tBl7IVZ2b-PXFWEaxL1nL5OTRmgEII9oYlR9EIovXNNIAiIyZxxozYpyWO5HP6WML6OFE5ga_2L98FqMbH4baEx7Lh0q3mb084ALG1AbNW3HtYQ5BjRo72MhlL_H0PZ4yRBrhaaUNGg09gEJK0x6JIdLKDO1dSk94UqNzhCc6DjXuh_wKWh9DPRl7cl4faexWtMJ5vrhuG1ZPBy1adzLU8VwxUG1dCpbBkjJ8X1cDwXGcT_1n6twaYtEBVJyaWfr1eGB3HqYQ6UParm5K1DLxoNPoe0yM";

export function getUserObject(userEmail = null) {
    let mailUser = userEmail ? userEmail : global.getUserEmail;

    return fetch('http://172.20.10.3:8000/api/userByEmail/' + "romain.barron@gmail.com", {
        // return fetch('http://172.20.10.3:8000/api/userByEmail/' + mailUser, {
        method: 'GET',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": global.getJwtToken
        },
    });
}


export function getUsersWithoutCurrentUser(page = 1) {
    return fetch("http://172.20.10.3:8000/api/users_without_me/" + global.getCurrentUserId + '?page=' + page, {
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

export function getImagesWithoutCurrentUser(userId, page) {
    return fetch("http://172.20.10.3:8000/api/images_without_me/" + userId + '?page=' + page, {
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
    return fetch("http://172.20.10.3:8000/api/has_profil_picture/" + 7, {
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
    return fetch("http://172.20.10.3:8000/api/login_check", {
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

export function register(lastName, firstName, age, sexe, phoneNumber = null, email, password, confirmPassword, fbUserInfo = null) {
    return fetch("http://172.20.10.3:8000/api/register", {
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

    return fetch("http://172.20.10.3:8000/api/image/" + 7, {
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

    return fetch("http://172.20.10.3:8000/api/images/" + 7, {
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

    return fetch("http://172.20.10.3:8000/api/images/" + 7, {
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