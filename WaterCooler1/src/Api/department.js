import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const getemployee = id => api.get(`/${id}`)
export const getAlldepartment = id => api.get(`/`)

const apis = {
    getemployee,
    getAlldepartment,
}

export default apis