import axios from 'axios'

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTEwNDUzMDMsImV4cCI6MTcxMTA2MzMwMywidXNlcklkIjoxLCJ1c2VybmFtZSI6Im1hcmNlIn0.SYU1YiPfNnhPDj9OLw93ulXQ6DAoAulwZsTyv5c1dEI"

export const getAllUsers = (setUsers) =>
    axios
        .get(`http://localhost:8080/users/`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => setUsers(response.data.data))
        .catch((error) => console.log(error))