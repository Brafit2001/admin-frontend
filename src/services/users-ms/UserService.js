import axios from 'axios'

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8080/users/`

export const getAllUsers = () =>
    axios
        .get(BASE_URL,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const getUserById = (userId) =>
    axios
        .get(BASE_URL + userId,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const getUserRoles = (userId) =>
    axios
        .get(`${BASE_URL}${userId}/roles`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const getUserGroups = (userId) =>
    axios
        .get(`${BASE_URL}${userId}/groups`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))



export const editUser = (user) => {
    const bodyFormData = new FormData();
    Object.keys(user).forEach((key) => {
        bodyFormData.append(key, user[key]);
    })
    return axios
        .put(BASE_URL + user.id,
            bodyFormData, {
                headers: {
                    "Authorization": "Bearer " + TOKEN,
                    "Content-Type": "multipart/form-data"
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))
}


export const newUser = (user) =>
    axios
        .post(BASE_URL,
            user,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

export const  importUsers = (formData) =>
    axios
        .post(`${BASE_URL}import-csv`, formData,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN,
                    'content-type': 'multipart/form-data'
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const deleteUser = (props) =>
    axios
        .delete(BASE_URL + props.id,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

export const resetPassword = (user) =>
    axios
        .put(`${BASE_URL}${user.id}/reset-password`,user,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const deleteUserRole = (props) =>
    axios
        .delete(`${BASE_URL}${props.userId}/roles/${props.id}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

export const deleteUserGroup = (props) =>
    axios
        .delete(`${BASE_URL}${props.userId}/groups/${props.id}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

