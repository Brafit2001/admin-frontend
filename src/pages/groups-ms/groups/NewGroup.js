import MyForm from "../../../components/MyForm";
import {newGroup} from "../../../services/groups-ms/GroupService";

const NewGroup = () =>{

    const group = {
        name: null,
        description: null,
        class: null
    }

    return (
        <div>
            <h1>NewGroup</h1>
            <MyForm item={group} actionFunction={newGroup} table="groups" mode="create"/>
        </div>

    )
};

export default NewGroup;