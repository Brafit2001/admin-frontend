import axios from 'axios'

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8081/classes/`

export const getAllClasses = (setClasses) =>
    axios
        .get(BASE_URL,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => setClasses(response.data.data))
        .catch((error) => console.log(error))


export const editClass = (class_item) =>
    axios
        .put(BASE_URL + class_item.id,
            class_item,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const newClass = (class_item) =>
    axios
        .post(BASE_URL,
            class_item,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))



export const deleteClass = (class_itemId) =>
    axios
        .delete(BASE_URL + class_itemId,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))





