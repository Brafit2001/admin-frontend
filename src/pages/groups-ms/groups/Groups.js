import {useEffect, useState} from "react";
import {deleteGroup, getAllGroups} from "../../../services/groups-ms/GroupService";
import MyTable from "../../../components/table/MyTable";

const Groups = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getAllGroups(setGroups)
    }, []);

    return (
        <MyTable content={groups} table={"groups"} deleteFunction={deleteGroup}/>
    );
};

export default Groups;