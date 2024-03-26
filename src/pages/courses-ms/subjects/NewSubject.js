import MyForm from "../../../components/MyForm";
import {newSubject} from "../../../services/courses-ms/SubjectService";

const NewSubject = () =>{

    const subject = {
        title: "",
        year: ""
    }

    return (
        <div>
            <h1>NewSubject</h1>
            <MyForm item={subject} actionFunction={newSubject} table="subjects" mode="create"/>
        </div>

    )
};

export default NewSubject;