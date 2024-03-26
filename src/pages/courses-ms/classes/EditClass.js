import {useLocation} from "react-router-dom";
import {editClass} from "../../../services/courses-ms/ClassService";
import MyForm from "../../../components/MyForm";


const EditClass = () =>{
    const location = useLocation()
    const class_item = location.state


    return (
        <div>
            <h1>EditClass</h1>
            <MyForm item={class_item} actionFunction={editClass} table="classes" mode={"editable"}/>
        </div>

    )
};

export default EditClass;