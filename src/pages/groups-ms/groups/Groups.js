import {useEffect, useState} from "react";
import {deleteGroup, getAllGroups} from "../../../services/groups-ms/GroupService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Groups = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getAllGroups(setGroups)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Groups"} createPath={"/groups/new"}/>
            <MyTable content={groups} table={"groups"} deleteFunction={deleteGroup}/>
        </div>
    );
};

export default Groups;