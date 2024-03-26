import {useLocation} from "react-router-dom";
import {editUser} from "../../../services/users-ms/UserService";
import MyForm from "../../../components/MyForm";


const EditUser = () =>{
    const location = useLocation()
    const user = location.state


    return (
        <div>
            <h1>EditUser</h1>
            <MyForm item={user} actionFunction={editUser} table="users" mode={"editable"}/>
        </div>

    )
};

export default EditUser;