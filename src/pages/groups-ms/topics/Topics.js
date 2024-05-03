import {useEffect, useState} from "react";
import {deleteTopic, getAllTopics} from "../../../services/groups-ms/TopicService";
import MyTable from "../../../components/table/MyTable";

const Topics = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getAllTopics().then((topics) => setTopics(topics))
    }, []);

    return (
        <div className="content-2">
            <MyTable content={topics} table={"topics"} deleteFunction={deleteTopic}/>
        </div>
    );
};

export default Topics;