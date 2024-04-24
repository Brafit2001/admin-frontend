import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getGroupTopics, getGroupUsers} from "../../../services/groups-ms/GroupService";

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
        <div>
            <h1>ReadGroup</h1>
            <div>{Object.keys(group).map((key) => {
                return (
                    <div>
                        {key + ": " + group[key]}
                    </div>
                )
            })}</div>
            <h1>Users:</h1>
            {
                users ? users.map((user) => {
                    return (
                        <div>
                            <p>User: {user.username}</p>
                        </div>
                    )
                }) : <p>No users</p>
            }
            <h1>Topics:</h1>
            {
                topics ? topics.map((topic) => {
                    return (
                        <div>
                            <p>Topic: {topic.title}</p>
                        </div>
                    )
                }) : <p>No Topics</p>
            }
        </div>

    )
};

export default ReadGroup;