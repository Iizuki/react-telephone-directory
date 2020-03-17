//This file handles communication with the json server.

import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(baseUrl, newPerson)
    return request.then(response => response.data)
}

const remove = (person) => {
    return axios.delete(`${baseUrl}/${person.id}`)
}

export default {getAll, create, remove}