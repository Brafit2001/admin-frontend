import {useLocation} from "react-router-dom";
import {editSubject} from "../../../services/courses-ms/SubjectService";
import MyForm from "../../../components/MyForm";


const EditSubject = () =>{
    const location = useLocation()
    const subject = location.state


    return (
        <div>
            <h1>EditSubject</h1>
            <MyForm item={subject} actionFunction={editSubject} table="subjects" mode={"editable"}/>
        </div>

    )
};

export default EditSubject;