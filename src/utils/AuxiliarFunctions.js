import {TableData} from "../components/table/TableData";

const Capitalize = (word) => {
    const firstLetterCap = word.charAt(0).toUpperCase()
    const remainingLetters = word.slice(1)
    return (
        firstLetterCap + remainingLetters
    )
}
export default Capitalize;

export function readImage(item, table){
    if (item === null || item === undefined) return ""

    const defautlImages =  TableData[table]["defaultImages"]
    const defaultImagesList = Object.keys(defautlImages)

    if (typeof item.image === "object") {
        return URL.createObjectURL(item.image)
    }
    else if (CheckElementInList(defaultImagesList, item.image)){
        return defautlImages[item.image]
    }else {
        return `data:image/png;base64,${item.image}`
    }

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

export const CheckElementInList = (list, element) => {
    return list.some((item) => item === element)
}
export const FormatDateToInput = (date) => {
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + '-' + mm + '-' + dd;
}
export const Filter = (list, filterFields, checkedState, search) => {

    // Comprueba que la lista de valores contiene al menos un elemento de la búsqueda

    const filterCheck = (element) => element && element.toString().toLowerCase().includes(search.toLocaleLowerCase())

    return (
        list.filter((user) => {
            // Lista de campos a filtrar
            const filteredFields = filterFields.filter((value, index) => !!checkedState[index])
            // Objecto con campos filtrados
            const picked = Object.fromEntries(
                Object.entries(user)
                    .filter(([key]) => filteredFields.includes(key))
            );
            return Object.values(picked).some(filterCheck)
        })
    )
}