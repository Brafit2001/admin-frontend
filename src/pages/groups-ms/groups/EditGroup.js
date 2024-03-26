import {useLocation} from "react-router-dom";
import {editGroup} from "../../../services/groups-ms/GroupService";
import MyForm from "../../../components/MyForm";


const EditGroup = () =>{
    const location = useLocation()
    const groups = location.state


    return (
        <div>
            <h1>EditGroup</h1>
            <MyForm item={groups} actionFunction={editGroup} table="groups" mode={"editable"}/>
        </div>

    )
};

export default EditGroup;