import {editUser, newUser} from "../../services/UserService";
import MyForm from "../../components/MyForm";

const NewUser = () =>{

    const user = {
        username: "",
        name: "",
        surname:  "",
        email: ""
    }

    return (
        <div>
            <h1>NewUser</h1>
            <MyForm item={user} editFunction={newUser} table="users" mode="create"/>
        </div>

    )
};

export default NewUser;