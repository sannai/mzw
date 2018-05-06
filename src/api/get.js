const queryString = require('querystring')

function checkStatus(response) {
    if(response.status === 401) {
        return response;
    }
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export async function get(uri, query, token='') {
    let header = {}
    if(token) {
        header = {
            Authorization: token
        }
    } else {
        header = {}
    }
    const response = await fetch(`${uri}?${queryString.stringify(query)}`,{
        method:'GET',
        headers: {
            ...header
        }
    })
    checkStatus(response)
    const data = await response.json()
    return data
}