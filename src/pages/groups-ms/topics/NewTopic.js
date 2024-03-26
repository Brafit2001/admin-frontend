import MyForm from "../../../components/MyForm";
import {newTopic} from "../../../services/groups-ms/TopicService";

const NewTopic = () =>{

    const topic = {
        title: null,
        deadline: null,
        unit: null
    }

    return (
        <div>
            <h1>NewTopic</h1>
            <MyForm item={topic} actionFunction={newTopic} table="topics" mode="create"/>
        </div>

    )
};

export default NewTopic;