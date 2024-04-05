import {useEffect, useState} from "react";
import {deleteTopic, getAllTopics} from "../../../services/groups-ms/TopicService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Topics = () => {
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getAllTopics(setTopics)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Topics"} createPath={"/topics/new"}/>
            <MyTable content={topics} table={"topics"} deleteFunction={deleteTopic}/>
        </div>
    );
};

export default Topics;