import axios from 'axios'
import {checkParams} from "../../utils/AuxiliarFunctions";

const TOKEN = localStorage.getItem("token")
const BASE_URL = `http://localhost:8081/subjects/`

export const getAllSubjects = (params) =>
    axios
        .get(checkParams(params, BASE_URL),{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const getSubjectById = (subjectId) =>
    axios
        .get(BASE_URL + subjectId,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const getSubjectRubrics = (subjectId) =>
    axios
        .get(`${BASE_URL}${subjectId}/rubrics`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const getSubjectRemainingRubrics = (subjectId) =>
    axios
        .get(`${BASE_URL}${subjectId}/remaining-rubrics`,{
            headers: {
                "Authorization": "Bearer " + TOKEN
            }
        })
        .then((response) => response.data.data)
        .catch((error) => console.log(error))

export const assignRubric = (body) =>
    axios
        .post( `${BASE_URL}assign-rubric-to-subject`,
            body,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const deleteSubjectRubric = (props) =>
    axios
        .delete(`${BASE_URL}${props["subjectId"]}/rubrics/${props.id}`,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const editSubject = (subject) =>
    axios
        .put(BASE_URL + subject.id,
            subject,{
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))


export const newSubject = (subject) =>
    axios
        .post(BASE_URL,
            subject, {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))



export const deleteSubject = (props) =>
    axios
        .delete(BASE_URL + props.id,
            {
                headers: {
                    "Authorization": "Bearer " + TOKEN
                }
            })
        .then((response) => response)
        .catch((error) => console.log(error))





