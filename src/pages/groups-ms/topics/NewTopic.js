import MyForm from "../../../components/form/MyForm";
import {newTopic} from "../../../services/groups-ms/TopicService";

const NewTopic = () =>{

    const topic = {
        title: null,
        deadline: new Date(),
        unit: null
    }

    return (
        <div className={"form-section"}>
            <h1>NewTopic</h1>
            <MyForm item={topic} actionFunction={newTopic} table="topics" mode="create"/>
        </div>

    )
};

export default NewTopic;