import {TableData} from "./table/TableData";
import {useNavigate} from "react-router-dom";
import {CheckElementInList, FormatDateToInput, readImage} from "../utils/AuxiliarFunctions";
import {useState} from "react";


const MyForm = ({item, actionFunction, table, mode, selectList}) => {

    const navigate = useNavigate()
    const [imagePopUp, setImagePopUp] = useState(false)
    const defaultImages = TableData[table]["defaultImages"]
    const baseImageState = new Array(defaultImages.length).fill(false)
    const [imageState, setImageState] = useState(baseImageState);

    function handleOnchange(key, e) {
        e.preventDefault()
        if (key === "image") item[key.toLowerCase()] = e.target.files[0]
        else item[key.toLowerCase()] = e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault()
        actionFunction(item).then(() => navigate("/clipclass/" + table))

    }

    function selectInput(item, key) {
        const dateFields = ["deadline"]
        const multimediaFields = ["image"]
        const integerFields = ["code", "unit", ]
        const selectFields = ["course", "subject", "class", "user", "post", "topic"]
        if (CheckElementInList(selectFields, key)){
            return (
                <select name={key} id={key}>
                    {
                        selectList[key].sort().map((id) => {
                            return <option value={id}>{id}</option>
                        })
                    }
                </select>
            )

        } else if (CheckElementInList(multimediaFields, key)) {
            return (
                <div>
                    <div className="edit-image">
                        <img src={readImage(item, table)} alt=""
                             onClick={() => setImagePopUp(!imagePopUp)}
                             style={{cursor: "pointer"}}
                        />
                    </div>
                    {
                        imagePopUp &&
                        <div className="popup-container">
                            <div className="popup">
                                <button type="button" onClick={() => setImagePopUp(!imagePopUp)}>X</button>
                                <h3>Default Images:</h3>
                                <div className="default-images">
                                    {
                                        Object.keys(defaultImages).map((key, index) =>
                                            <img src={defaultImages[key]} alt=""
                                                 className={imageState[index] ? "button on" : "button off"}
                                                 onClick={() => {
                                                     baseImageState[index] = !imageState[index]
                                                     setImageState(baseImageState)
                                                     item.image = key
                                                 }}
                                            key={key}/>

                                        )
                                    }
                                </div>
                                <input type="file" defaultValue={null} onChange={(e) => handleOnchange(key, e)}/>
                            </div>
                        </div>
                    }

                </div>

            )
        } else if (CheckElementInList(integerFields, key)) {
            return <input type="number" defaultValue={item[key]} onChange={(e) => handleOnchange(key, e)}/>
        } else if (CheckElementInList(dateFields, key)) {
            const date = new Date(item[key.toLowerCase()])
            return <input type="date" defaultValue={FormatDateToInput(date)} onChange={(e) => handleOnchange(key, e)}/>
        } else if (key === "email") {
            return <input type="email" pattern=".+@alumnos.uc3\.es" size="30" required defaultValue={item[key]}
                          onChange={(e) => handleOnchange(key, e)}/>
        } else {
            return <input type="text" defaultValue={item[key.toLowerCase()]} onChange={(e) => handleOnchange(key, e)}/>
        }
    }

    return (
        <form className="edit-form" action="">
            {
                TableData[table][mode].map((key) => {
                    return (
                        <div key={key}>
                            <label htmlFor="">{key + ": "}</label>
                            {selectInput(item, key)}
                        </div>
                    )
                })
            }
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
    )

};

export default MyForm;