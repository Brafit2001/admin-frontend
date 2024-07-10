import {useLocation} from "react-router-dom";
import {editRubric} from "../../../services/courses-ms/RubricService";
import MyForm from "../../../components/form/MyForm";


const EditRubric = () =>{
    const location = useLocation()
    const rubric = location.state

    return (
        <div className={"form-section"}>
            <h1>EditRubric</h1>
            <MyForm item={rubric}
                    actionFunction={editRubric}
                    table="rubrics"
                    mode={"editable"}
            />
        </div>

    )
};

export default EditRubric;