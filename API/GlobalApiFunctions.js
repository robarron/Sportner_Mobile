export function getUserObject() {

    return fetch('http://192.168.1.62:8000/api/userByEmail/' + global.getUserEmail, {
                method: 'GET',
                headers: {
                    'withCredentials': 'true',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization" : global.getJwtToken
                },
            }).then((responseJson) => {
                console.log(responseJson);
                if (responseJson.status !== 404) {
                    responseJson.json().then((data) =>
                    {
                        global.getCurrentUser = data[0];
                        global.getCurrentUserId = data[0].id;
                    });
                }
    })

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

export function register(lastName, firstName, age, sexe, phoneNumber, email, password, confirmPassword) {
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
            confirmPassword: confirmPassword
        }),
    })
}

export function postImage(formData) {
    return fetch("http://192.168.1.62:8000/api/image", {
        // fetch("http://192.168.15.144:8000/api/image", {
        // fetch("http://10.42.170.230:8000/api/login_check", {
        method: 'POST',
        headers: {
            'withCredentials': 'true',
            'Accept': 'application/json',
            'content-type': 'multipart/form-data',
            "Authorization" : global.getJwtToken
        },
        body: formData,
    })
}
