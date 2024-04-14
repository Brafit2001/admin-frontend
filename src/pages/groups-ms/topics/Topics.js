import {useEffect, useState} from "react";
import {deleteTopic, getAllTopics} from "../../../services/groups-ms/TopicService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";
import {Filter} from "../../../utils/Filter";
import {TableData} from "../../../components/table/TableData";

const Topics = () => {
    const [topics, setTopics] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = TableData["topics"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));

    const results = !search ? topics : Filter(topics, filterFields, checkedState, search)
    useEffect(() => {
        getAllTopics(setTopics)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Topics"} createPath={"new"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <MyTable content={results} table={"topics"} deleteFunction={deleteTopic}/>
        </div>
    );
};

export default Topics;