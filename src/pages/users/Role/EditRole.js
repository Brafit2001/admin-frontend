import {useLocation} from "react-router-dom";
import MyForm from "../../../components/MyForm";
import {editRole} from "../../../services/RoleService";



const EditRole = () =>{
    const location = useLocation()
    const role = location.state


    return (
        <div>
            <h1>EditRole</h1>
            <MyForm item={role} actionFunction={editRole} table="roles" mode={"editable"}/>
        </div>

    )
};

export default EditRole;