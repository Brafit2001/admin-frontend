import {useEffect, useState} from "react";
import {deleteGroup, getAllGroups} from "../../../services/groups-ms/GroupService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Groups = () => {
    const [groups, setGroups] = useState([])
    const [ search, setSearch ] = useState("")

    const results = !search ? groups : groups.filter((group)=> group.name.toLowerCase().includes(search.toLocaleLowerCase()))
    useEffect(() => {
        getAllGroups(setGroups)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Groups"} createPath={"new"} setQuery={setSearch} query={search}/>
            <MyTable content={results} table={"groups"} deleteFunction={deleteGroup}/>
        </div>
    );
};

export default Groups;