export function getUserObject() {

    return fetch('http://192.168.1.62:8000/api/userByEmail/' + global.getUsername, {
                method: 'GET',
                headers: {
                    'withCredentials': 'true',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization" : global.getJwtToken
                },
            }) .then(response => { return response.json();})
        .then(responseData => {console.log(responseData); return responseData;
        })
        .catch((error) => {
            console.error(error);
        });
}