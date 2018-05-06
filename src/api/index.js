import fetch from './fetch'

export function getDatail(id) {
    let url = `https://m.maizuo.com/v4/api/film/${id}?__t=1525314948139`
    return fetch(url)
}