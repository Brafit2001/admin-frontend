import {useEffect, useState} from "react";
import {deleteGroup, getAllGroups} from "../../../services/groups-ms/GroupService";
import MyTable from "../../../components/table/MyTable";

const Groups = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        getAllGroups().then((groups) => setGroups(groups))
    }, []);

    return (
        <div className="content-2">
            <MyTable content={groups} table={"groups"} deleteFunction={deleteGroup}/>
        </div>
    );
};

export default Groups;