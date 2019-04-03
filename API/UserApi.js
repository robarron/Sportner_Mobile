// API/UserApi.js

const result = "10";

// export function getUserFromApi1 () {
//     const uri = "https://randomuser.me/api/";
//     const response = await fetch(`${uri}?page=${page}&results=${this.state.results}&seeds=${this.state.seed}`);
//     const jsondata = await response.json();
//     return jsondata.results;
// }

export function getToken(username, password ) {

    return fetch('http://sportnerapii.com:8000/api/login_check')
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}

export function getUserFromApi(result, page) {

    return fetch('https://randomuser.me/api/?results='+ result + '&page=' + page)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
}