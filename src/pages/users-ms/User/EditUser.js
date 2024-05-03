import {useLocation} from "react-router-dom";
import {editUser, resetPassword} from "../../../services/users-ms/UserService";
import MyForm from "../../../components/form/MyForm";


const EditUser = () =>{
    const location = useLocation()
    const user = location.state

    function handleOnClick(){
        let text = "Are you sure you want to reset the password?";
        // eslint-disable-next-line no-restricted-globals
        if (confirm(text) === true) {
            resetPassword(user).then((message) => console.log(message))
        }
    }

    return (
        <div>
            <h1>EditUser</h1>
            <MyForm item={user} actionFunction={editUser} table="users" mode={"editable"}/>
            <button onClick={handleOnClick} style={{marginTop: 30}}>Send Reset Password Email</button>
        </div>

    )
};

export default EditUser;