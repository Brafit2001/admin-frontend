import axios from "axios";
import {checkParams} from "../../utils/AuxiliarFunctions";

const BASE_URL = `http://localhost:8080/roles/`
const TOKEN = localStorage.getItem("token")

export const getAllRoles = (params) =>
    axios
        .get(checkParams(params, BASE_URL),{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const getRoleById = (roleId) =>
    axios
        .get(`${BASE_URL}${roleId}`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
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

export const getRoleRemainingUsers = (roleId) =>
    axios
        .get(`${BASE_URL}${roleId}/users-remaining`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))



export const getRolePermissions = (roleId) =>
    axios
        .get(`${BASE_URL}${roleId}/permissions`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const getRoleRemainingPermissions = (roleId) =>
    axios
        .get(`${BASE_URL}${roleId}/permissions-remaining`,{
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

export const deleteRole = (props) =>
    axios
        .delete(`${BASE_URL}${props.id}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const deleteRoleUser = (props) =>
    axios
        .delete(`${BASE_URL}${props.roleId}/users/${props.id}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const deleteRolePermission = (props) =>
    axios
        .delete(`${BASE_URL}${props.roleId}/permissions/${props.id}?type=${props.type}`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
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

export const assignRole = (body) =>
    axios
        .post(`${BASE_URL}assign-user-to-role`,body,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const assignPermission = (body) =>
    axios
        .post(`${BASE_URL}assign-permission-to-role`,body,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

