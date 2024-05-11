import MyForm from "../../../components/form/MyForm";
import {newRubric} from "../../../services/courses-ms/RubricService";

const NewRubric = () =>{

    const rubric = {
        name: ""
    }

    return (
        <div>
            <h1>NewRubric</h1>
            <MyForm item={rubric}
                    actionFunction={newRubric}
                    table="rubrics"
                    mode="create"
            />
        </div>

    )
};

export default NewRubric;