import {useEffect, useState} from "react";
import {deleteTopic, getAllTopics} from "../../../services/groups-ms/TopicService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/MyTable";

const Topics = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getAllTopics(setTopics)
    }, []);

    return (
        <div className="content-2">
            <h1>Topics</h1>
            <Link to={"/topics/new"}>New Topic</Link>
            <MyTable content={topics} table={"topics"} deleteFunction={deleteTopic}/>
        </div>
    );
};

export default Topics;