import axios from "axios";

const BASE_URL = `http://localhost:8080/roles/`
const TOKEN = localStorage.getItem("token")

export const getAllRoles = (setRoles) =>
    axios
        .get(BASE_URL,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => setRoles(response.data.data))
        .catch((error) => console.log(error))

export const getRoleUsers = (roleId) =>
    axios
        .get(`${BASE_URL}${roleId}/users`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))



export const newRole = (role) =>
    axios
        .post(BASE_URL,
            role,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))

export const deleteRole = (roleId) =>
    axios
        .delete(`${BASE_URL}${roleId}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const deleteRoleUser = (roleId, userId) =>
    axios
        .delete(`${BASE_URL}${roleId}/users/${userId}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const editRole = (role) =>
    axios
        .put(`${BASE_URL}${role.id}`,
            role,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


