
export const Filter = (list, filterFields, checkedState, search) => {

    // Comprueba que la lista de valores contiene al menos un elemento de la búsqueda

    const filterCheck = (element) => element && element.toString().toLowerCase().includes(search.toLocaleLowerCase())

    return (
        list.filter((user) =>{
            // Lista de campos a filtrar
            const filteredFields = filterFields.filter((value, index)  => !!checkedState[index])
            // Objecto con campos filtrados
            const picked = Object.fromEntries(
                Object.entries(user)
                    .filter(([key]) => filteredFields.includes(key))
            );
            return Object.values(picked).some(filterCheck)
        })
    )
}