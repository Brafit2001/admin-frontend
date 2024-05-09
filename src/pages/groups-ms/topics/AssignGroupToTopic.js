import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getAllUsers} from "../../../services/users-ms/UserService";
import {assignRole} from "../../../services/users-ms/RoleService";
import {getAllTopics} from "../../../services/groups-ms/TopicService";
import {assignTopic, getAllGroups} from "../../../services/groups-ms/GroupService";


const AssignGroupToTopic = () => {
    const [groups, setGroups] = useState(null)
    const [groupId, setGroupId] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const topicId = path[path.length - 2]

    useEffect(() => {
        getAllGroups().then((groups) => {
            setGroups(groups)
            setGroupId(groups[0].id)
        })
    }, []);

    function handleOnchange(e) {
        e.preventDefault()
        setGroupId(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        const body = {topic: topicId, group: groupId}
        assignTopic(body).then(() => navigate(`/clipclass/topics/${topicId}`))
    }

    return(
        <div>
            <select name={"assign-group"} id={"assign-group"} onChange={(e) => handleOnchange(e)}>
                {groups && groups.sort().map((group) => (
                    <option value={group.id} key={group.id}>Id: {group.id} - {group.name} - Class: {group.class}</option>
                ))}
            </select>
            <button type="submit" onClick={(e) => handleSubmit(e)} className={"submit-button"}>
                Submit
            </button>
        </div>
    )
}

export default AssignGroupToTopic;