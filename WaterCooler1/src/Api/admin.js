import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const postcredential = payload => api.post(`/admin/${id}`, payload)
export const updatedepartment = payload => api.post(`/admin/updatedepartment`, payload)
export const updateemployee = payload => api.post(`/admin/updateemployee`, payload)
export const createdepartment = payload => api.post(`/admin/createdepartment`, payload)
export const deletedepartment = id => api.delete(`/admin/${id}/delete`)


const apis = {
    postcredential,
    updatedepartment,
    updateemployee,
    createdepartment,
    deletedepartment,
}

export default apis