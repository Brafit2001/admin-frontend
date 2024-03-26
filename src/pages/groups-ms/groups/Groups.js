import {useEffect, useState} from "react";
import {deleteGroup, getAllGroups} from "../../../services/groups-ms/GroupService";
import {Link} from "react-router-dom";
import MyTable from "../../../components/MyTable";

const Groups = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getAllGroups(setGroups)
    }, []);

    return (
        <div className="content-2">
            <h1>Groups</h1>
            <Link to={"/groups/new"}>New Group</Link>
            <MyTable content={groups} table={"groups"} deleteFunction={deleteGroup}/>
        </div>
    );
};

export default Groups;