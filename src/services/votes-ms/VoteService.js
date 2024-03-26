import axios from 'axios'

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8084/votes/`

export const getAllVotes = (setVotes) =>
    axios
        .get(BASE_URL,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => setVotes(response.data.data))
        .catch((error) => console.log(error))


export const editVote = (vote) =>
    axios
        .put(BASE_URL + vote.id,
            vote,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const newVote = (vote) =>
    axios
        .post(BASE_URL,
            vote,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))



export const deleteVote = (voteId) =>
    axios
        .delete(BASE_URL + voteId,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))





