import {useEffect, useState} from "react";
import {deleteTopic, getAllTopics} from "../../../services/groups-ms/TopicService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Topics = () => {
    const [topics, setTopics] = useState([])
    const [ search, setSearch ] = useState("")

    const results = !search ? topics : topics.filter((topic)=> topic.title.toLowerCase().includes(search.toLocaleLowerCase()))
    useEffect(() => {
        getAllTopics(setTopics)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Topics"} createPath={"new"} setQuery={setSearch} query={search}/>
            <MyTable content={results} table={"topics"} deleteFunction={deleteTopic}/>
        </div>
    );
};

export default Topics;