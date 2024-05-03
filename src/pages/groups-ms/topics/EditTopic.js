import {useLocation} from "react-router-dom";
import {editTopic} from "../../../services/groups-ms/TopicService";
import MyForm from "../../../components/form/MyForm";


const EditTopic = () =>{
    const location = useLocation()
    const topic = location.state


    return (
        <div>
            <h1>EditTopic</h1>
            <MyForm item={topic} actionFunction={editTopic} table="topics" mode={"editable"}/>
        </div>

    )
};

export default EditTopic;