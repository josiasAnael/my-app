//const URL_HOST='https://apiunicah.herokuapp.com/api';
const URL_HOST='http://localhost:3001/api';

export default {
    Get: (url) => {
        return fetch(`${URL_HOST}${url}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${document.cookie.split('=')[1]}`
            }
        })
            .then(response => response.json())
            .catch(error => console.error(`${error}`));
    },
    Post: (url, data) => {
        return fetch(`${URL_HOST}${url}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${document.cookie.split('=')[1]}`
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .catch(error => console.error(error));
    },
    Put: (url, data) => {
        return fetch(`${URL_HOST}${url}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${document.cookie.split('=')[1]}`
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .catch(error => console.error(error));
    },
    Delete: (url) => {
        return fetch(`${URL_HOST}${url}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${document.cookie.split('=')[1]}`
            }
        })
            .then(response => response.json())
            .catch(error => console.error(error));
    },
    fetcher : (...arg) => fetch(...arg).then(r => r.json()),
    uploadFile: (url, data) => {
        return fetch(`${URL_HOST}${url}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${document.cookie.split('=')[1]}`
            },
            body: data
        })
            .then(response => response.json())
            .catch(error => console.error(error));
    },
    uploadFileUpdate: (url, data) => {
        return fetch(`${URL_HOST}${url}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${document.cookie.split('=')[1]}`
            },
            body: data
        })
            .then(response => response.json())
            .catch(error => console.error(error));
    }
}
