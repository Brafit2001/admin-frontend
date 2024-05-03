import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {assignGroup, getAllGroups} from "../../../services/groups-ms/GroupService";


const AssignGroup = () => {

    const [groups, setGroups] = useState(null)
    const [groupId, setGroupId] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const userId = path[path.length - 2]

    useEffect(() => {
        getAllGroups().then((groups) => {
            setGroups(groups)
            setGroupId(groups[0].id)
        })
    }, [userId]);

    function handleOnchange(e) {
        e.preventDefault()
        setGroupId(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        const body = {user: userId, group: groupId}
        assignGroup(body).then(() => navigate(`/clipclass/users/${userId}`))
    }

    return(
        <div>
            <select name={"assign-group"} id={"assign-group"} onChange={(e) => handleOnchange(e)}>
                {groups && groups.sort().map((group) => (
                    <option value={group.id} key={group.id}>{group.name}</option>
                ))}
            </select>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default AssignGroup;