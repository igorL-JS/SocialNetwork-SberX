import * as axios from "axios";

const instance = axios.create({
    baseURL : `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "c889db6b-34d0-4944-9db4-0a9e80ebd04e"
    }
});


export const UsersAPI = {
    getUsers (currentPage, pageSize) {
        return (instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return (response.data)
            }))
    },
    getUsersOnCurrentPage (page, pageSize) {
        return (instance.get(`users?page=${page}&count=${pageSize}`).
        then(response => {
            return (response.data)
        }))
    },
    deleteFollow (id) {
        return (instance.delete(`follow/${id}`)
            .then(response => {
                return (response.data)
            }))
    },
    postFollow (id) {
        return (instance.post(`follow/${id}`)
            .then (response => {
                return (response.data)
            }))
    },
    getAuthMe () {
        return (instance.get(`auth/me`)
                .then(response =>{
                    return (response.data)
                })
        )
    }
};

export const ProfileAPI = {
    getPageProfile (userID) {
        return (instance.get(`profile/`+ userID).
        then (response => {
            return (response.data)
        }))
    },
    getStatus (userID) {
        return (instance.get(`profile/status/`+ userID).
            then (response => {
                return (response.data)
        } ))
    },
    upDateStatus(status) {
        return (instance.put(`profile/status`, {status: status}).
            then(response => {
                return (response.data)
        } ))
    },

};

export const LoginAPI = {
    logIn (email, password,rememberMe) {
        return (instance.post(`auth/login/`, {email: email, password: password, rememberMe: rememberMe})
            .then (response => {
                return (response.data)
        } ))
    },
    logOut () {
        return (instance.delete(`auth/login`)
                .then(response =>{
                    return (response.data)
                })
        )
    },

};

