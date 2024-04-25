import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    deleteGroupTopic,
    deleteGroupUser,
    getGroupTopics,
    getGroupUsers
} from "../../../services/groups-ms/GroupService";
import MyTable from "../../../components/table/MyTable";

const ReadGroup = () =>{
    const [users, setUsers] = useState(null)
    const [topics, setTopics] = useState(null)
    const location = useLocation()
    const group  = location.state

    useEffect(() => {
        getGroupTopics(group.id).then((topics) => setTopics(topics))
        getGroupUsers(group.id).then((users) => setUsers(users))
    }, [group.id]);

    return (
        <div className={"content-2"}>
            <h1>ReadGroup</h1>
            <div>{Object.keys(group).map((key) => {
                return (
                    <div>
                        {key + ": " + group[key]}
                    </div>
                )
            })}</div>
            <h1>Users:</h1>
            <MyTable content={users} table={"users"}
                     deleteFunction={deleteGroupUser}
                     extraDeleteParameter={group.id}
                     style={{height: 200}}
            />
            <h1>Topics:</h1>
            <MyTable content={topics} table={"topics"}
                     deleteFunction={deleteGroupTopic}
                     extraDeleteParameter={group.id}
                     style={{height: 200}}
            />
        </div>

    )
};

export default ReadGroup;