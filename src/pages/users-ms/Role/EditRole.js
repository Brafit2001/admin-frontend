import {useLocation} from "react-router-dom";
import MyForm from "../../../components/form/MyForm";
import {editRole} from "../../../services/users-ms/RoleService";



const EditRole = () =>{
    const location = useLocation()
    const role = location.state


    return (
        <div className={"form-section"}>
            <h1>EditRole</h1>
            <MyForm item={role} actionFunction={editRole} table="roles" mode={"editable"}/>
        </div>

    )
};

export default EditRole;