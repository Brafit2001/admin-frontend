import {useEffect, useState} from "react";
import {deleteGroup, getAllGroups} from "../../../services/groups-ms/GroupService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";
import {TableData} from "../../../components/table/TableData";

import {Filter} from "../../../utils/AuxiliarFunctions";

const Groups = () => {
    const [groups, setGroups] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = TableData["groups"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));

    const results = !search ? groups : Filter(groups, filterFields, checkedState, search)
    useEffect(() => {
        getAllGroups(setGroups)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Groups"} createPath={"new"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <MyTable content={results} table={"groups"} deleteFunction={deleteGroup}/>
        </div>
    );
};

export default Groups;