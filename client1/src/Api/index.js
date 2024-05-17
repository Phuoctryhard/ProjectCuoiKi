import axios from 'axios'

const API = axios.create({ baseURL: 'http://wandertour.ddns.net:5000' })

export const getTotalPage = () => {
  return fetch('/data/view/').then((res) => {
    return res.json()
  })
}

export const comment = (value, id) => API.post(`/post/${id}/commentPost`, { value })
