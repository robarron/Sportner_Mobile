export function getUserFromApi(result, page) {

    return fetch('https://randomuser.me/api/?results='+ result + '&page=' + page)
        .then((response) => response.json())
        .catch((error) => {
            console.error(error);
        });
}
