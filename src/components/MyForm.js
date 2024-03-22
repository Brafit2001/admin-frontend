import {TableData} from "./TableData";
import {useNavigate} from "react-router-dom";


const MyForm = ({item, actionFunction, table, mode}) => {

    const navigate = useNavigate()
    function handleOnchange(key, e) {
        e.preventDefault()
        item[key.toLowerCase()] = e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault()
        actionFunction(item).then(() => navigate("/" + table))

    }

    return (
        <form className="edit-form" action="">
            {
                TableData[table][mode].map((key, index) => {
                    return (
                        <div key={key}>
                            <label htmlFor="">{key + ": "}</label>
                            <input type="text" defaultValue={item[key.toLowerCase()]}
                                   onChange={(e) => handleOnchange(key, e)}/>
                        </div>
                    )
                })
            }
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
    )

};

export default MyForm;