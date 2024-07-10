import {TableData} from "../components/table/TableData";
import {modelData} from "../components/ModelToString";
import {jwtDecode} from "jwt-decode";

const Capitalize = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase()
    const remainingLetters = word.slice(1)
    return (
        firstLetterCap + remainingLetters
    )
}
export default Capitalize;

export function readImage(image, table){
    if (image === null || image === undefined) return ""

    const defautlImages =  TableData[table]["defaultImages"]
    const defaultImagesList = Object.keys(defautlImages)

    if (typeof image === "object") {
        return URL.createObjectURL(image)
    }
    else if (CheckElementInList(defaultImagesList, image)){
        return defautlImages[image]
    }else {
        return `data:image/*;base64,${image}`
    }

}

export const getIdFromPath = (location, table = "users") => {
    const path = location.pathname.split('/')
    return (CheckElementInList(path, table)) ? path[path.indexOf(table) + 1] : null
}

export function checkParams(params, url) {
    if (params !== null && params !== undefined) {
        let chain = "?"
        Object.keys(params).forEach((key) => chain += `${key}=${params[key]}`)
        return url + chain
    } else {
        return url
    }
}

export const containsObject = (obj, list) => {
    list.forEach((element) => {
        if (element.id === obj.id) return true
    })
    return false
}

export const CheckElementInList = (list, element) => {
    return list.some((item) => item === element)
}
export const FormatDateToInput = (date) => {

    const yyyy = date.getFullYear();
    let MM = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
    let hh = date.getHours()
    let mm = date.getMinutes()

    if (dd < 10) dd = '0' + dd;
    if (MM < 10) MM = '0' + MM;
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;

    return yyyy + '-' + MM + '-' + dd + 'T' + hh + ':' + mm;
}
export const Filter = (list, filterFields, checkedState, searchQuery) => {

    // Comprueba que la lista de valores contiene al menos un elemento de la búsqueda

    const filterCheck = (element) => element && element.toString().toLowerCase().includes(searchQuery.toLocaleLowerCase())
    const results = list.filter((item) => {
        // Lista de campos a filtrar
        const filteredFields = filterFields.filter((value, index) => !!checkedState[index])
        // Objecto con campos filtrados
        const picked = Object.fromEntries(
            Object.entries(item)
                .filter(([key]) => filteredFields.includes(key))
        );
        return Object.values(picked).some(filterCheck)
    })
    return (results.length === 0) ? null : results
}

export const parseItemToString = (item, key) => {
    let chain = ""
    modelData[key].forEach((key) => chain += `${key}: ${item[key]} - `)
    return chain
}

export const getLoggedUserId = () => {
    const token = localStorage.getItem("token")
    return jwtDecode(token)["userId"]
}


