import MyForm from "../../../components/MyForm";
import {newRole} from "../../../services/RoleService";

const NewRole = () =>{

    const role = {
        name: "",
    }

    return (
        <div>
            <h1>NewRole</h1>
            <MyForm item={role} actionFunction={newRole} table="roles" mode="create"/>
        </div>

    )
};

export default NewRole;