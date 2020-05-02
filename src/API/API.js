import * as axios from "axios";

const instance = axios.create({
    baseURL : `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "c889db6b-34d0-4944-9db4-0a9e80ebd04e"
    }
});


export const UsersAPI = {
    getPageProfile (userID) {
        return (instance.get(`profile/`+ userID).
        then (response => {
            return (response.data)
        }))
    },
    getUsers (currentPage, pageSize) {
        return (instance.get(`users?page=${currentPage}&count=${pageSize}`/*, {withCredentials: true}*/)
            .then(response => {
                return (response.data)
            }))
    },
    getUsersOnCurrentPage (page, pageSize) {
        return (instance.get(`users?page=${page}&count=${pageSize}`/*, {withCredentials: true}*/).
        then(response => {
            return (response.data)
        }))
    },
    deleteFollow (id) {
        return (instance.delete(`follow/${id}`/*, settings*/)
            .then(response => {
                return (response.data)
            }))
    },
    postFollow (id) {
        return (instance.post(`follow/${id}`, {}/*, settings*/)
            .then (response => {
                return (response.data)
            }))
    },
    getAuthMe () {
        return (instance.get(`auth/me`/*, {withCredentials: true}*/)
                .then(response =>{
                    return (response.data)
                })
        )
    }

}

