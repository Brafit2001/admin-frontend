import axios from 'axios'

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTExMDAwNjMsImV4cCI6MTcxMTExODA2MywidXNlcklkIjoxLCJ1c2VybmFtZSI6Im1hcmNlIn0.WYE2lPS_TtcaRqbUdjnr4gdY59_IM7o1v36iRKpY0yY"

export const getAllUsers = (setUsers) =>
    axios
        .get(`http://localhost:8080/users/`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => setUsers(response.data.data))
        .catch((error) => console.log(error))


export const editUser = (user) =>{
    axios
        .put(`http://localhost:8080/users/${user.id}`,
            user,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))
}

export const newUser = (user) =>{
    axios
        .post(`http://localhost:8080/users/`,
            user,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))
}


export const deleteUser = (userId) =>
    axios
        .delete(`http://localhost:8080/users/${userId}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))





