import 'whatwg-fetch'

export default function Wfetch(url) {
    return new Promise((resole, reject) => {
        fetch(url).then(response => {
            return response.json()
        }).then(json => {
            resole(json)
        }).catch(err => {
            reject(err)
        })
    })
}