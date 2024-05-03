import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getAllUsers} from "../../../services/users-ms/UserService";
import {assignRole} from "../../../services/users-ms/RoleService";
import {getAllTopics} from "../../../services/groups-ms/TopicService";
import {assignTopic} from "../../../services/groups-ms/GroupService";


const AssignTopic = () => {
    const [topics, setTopics] = useState(null)
    const [topicId, setTopicId] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const groupId = path[path.length - 2]

    useEffect(() => {
        getAllTopics().then((topics) => {
            setTopics(topics)
            setTopicId(topics[0].id)
        })
    }, []);

    function handleOnchange(e) {
        e.preventDefault()
        setTopicId(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        const body = {topic: topicId, group: groupId}
        assignTopic(body).then(() => navigate(`/clipclass/groups/${groupId}`))
    }

    return(
        <div>
            <select name={"assign-user"} id={"assign-user"} onChange={(e) => handleOnchange(e)}>
                {topics && topics.sort().map((topic) => (
                    <option value={topic.id} key={topic.id}>Id: {topic.id} - {topic.title} - Unit: {topic.unit}</option>
                ))}
            </select>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default AssignTopic;