import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import MyTable from "../../../components/table/MyTable";
import {deleteGroup, getAllGroups} from "../../../services/groups-ms/GroupService";

const ReadClass = () =>{
    const [groups, setGroups] = useState(null)
    const location = useLocation()
    const class_item  = location.state

    useEffect(() => {
        const params = {class: class_item.id}
        getAllGroups(params).then((groups) => setGroups(groups))
    }, []);

    return (
        <div className={"content-2"}>
            <h1>ReadClass</h1>
            <div>{Object.keys(class_item).map((key) => {
                return (
                    <div>
                        {key + ": " + class_item[key]}
                    </div>
                )
            })}</div>
            <MyTable content={groups} table={"groups"} deleteFunction={deleteGroup} style={{height: 700}}/>
        </div>

    )
};

export default ReadClass;