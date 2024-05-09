import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    deleteGroupTopic,
    deleteGroupUser, getGroupById,
    getGroupTopics,
    getGroupUsers
} from "../../../services/groups-ms/GroupService";
import MyTable from "../../../components/table/MyTable";

const ReadGroup = () =>{
    const [users, setUsers] = useState(null)
    const [topics, setTopics] = useState(null)
    const location = useLocation()
    const path = location.pathname.split("/")
    const groupId = path[path.length - 1]
    const [group, setGroup] = useState(location.state)

    useEffect(() => {
        !group && getGroupById(groupId).then((group) => setGroup(group))
        getGroupTopics(groupId).then((topics) => setTopics(topics))
        getGroupUsers(groupId).then((users) => setUsers(users))
    }, [group, groupId]);

    return (
        <div className={"content-2"}>
            {group &&
                <div className={"content-3"}>
                    <h1>ReadGroup</h1>
                    <div>{Object.keys(group).map((key) => {
                        return (
                            <div>
                                {key + ": " + group[key]}
                            </div>
                        )
                    })}</div>
                    <MyTable content={users} table={"users"}
                             createPath={"assign-user"}
                             deleteFunction={deleteGroupUser}
                             deleteProps={{groupId: group.id}}
                             style={{height: 400}}
                             editButtonVisible={false}/>
                    <MyTable content={topics} table={"topics"}
                             createPath={"assign-topic"}
                             deleteFunction={deleteGroupTopic}
                             deleteProps={{groupId: group.id}}
                             style={{height: 400}}
                             editButtonVisible={false}/>
                </div>
            }
        </div>

    )
};

export default ReadGroup;