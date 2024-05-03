import {TableData} from "../table/TableData";
import {useNavigate} from "react-router-dom";
import {CheckElementInList} from "../../utils/AuxiliarFunctions";
import FieldMap from "./FieldMap";




const MyForm = ({item, actionFunction, table, mode, selectList}) => {

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        actionFunction(item).then(() => navigate("/clipclass/" + table))

    }

    function selectInput(item, key) {

        const keyFields = ["image", "content", "email", "deadline"]
        const selectFields = ["course", "subject", "class", "user", "post", "topic", "type"]
        const integerFields = ["code", "unit", ]

        let fieldType = "default";
        if (key === "content" && table === "votes")  fieldType = "number"
        else if (CheckElementInList(selectFields, key)) fieldType = "select";
        else if (CheckElementInList(integerFields, key)) fieldType = "number";
        else if (CheckElementInList(keyFields, key)) fieldType = key

        return (<FieldMap fieldType={fieldType} fieldKey={key} item={item} table={table} selectList={selectList}/>)

    }

    return (
        <form className="edit-form" action="">
            {
                TableData[table][mode].map((key) => {
                    return (
                        <div key={key}>
                            <label htmlFor="">{key + ": "}</label>
                            {(key !== undefined) && selectInput(item, key)}
                        </div>
                    )
                })
            }
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
    )

};

export default MyForm;