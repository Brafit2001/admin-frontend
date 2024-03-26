import axios from 'axios'

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8084/posts/`

export const getAllPosts = (setPosts) =>
    axios
        .get(BASE_URL,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => setPosts(response.data.data))
        .catch((error) => console.log(error))


export const editPost = (post) =>
    axios
        .put(BASE_URL + post.id,
            post,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const newPost = (post) =>
    axios
        .post(BASE_URL,
            post,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))



export const deletePost = (postId) =>
    axios
        .delete(BASE_URL + postId,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))





