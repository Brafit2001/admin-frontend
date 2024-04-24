import axios from 'axios'

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8083/groups/`

export const getAllGroups = (setGroups) =>
    axios
        .get(BASE_URL,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => setGroups(response.data.data))
        .catch((error) => console.log(error))


export const getGroupUsers = (userId) =>
    axios
        .get(`${BASE_URL}${userId}/users`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))


export const getGroupTopics = (userId) =>
    axios
        .get(`${BASE_URL}${userId}/topics`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const editGroup = (group) =>
    axios
        .put(BASE_URL + group.id,
            group,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const newGroup = (group) =>
    axios
        .post(BASE_URL,
            group,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))



export const deleteGroup = (groupId) =>
    axios
        .delete(BASE_URL + groupId,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))





