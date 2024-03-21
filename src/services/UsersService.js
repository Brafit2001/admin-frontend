import axios from 'axios'

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTEwMTYwNjYsImV4cCI6MTcxMTAzNDA2NiwidXNlcklkIjoxLCJ1c2VybmFtZSI6Im1hcmNlIn0.NihYrTcq8qszOzNKQk0z8degbBDcNhKNlh_plMwwBw0"

export const getAllUsers = (setUsers) =>
    axios
        .get(`http://localhost:8080/users/`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => setUsers(response.data.data))
        .catch((error) => console.log(error))