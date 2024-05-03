import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getAllUsers} from "../../../services/users-ms/UserService";
import {assignRole} from "../../../services/users-ms/RoleService";
import {assignGroup} from "../../../services/groups-ms/GroupService";


const AssignUserToGroup = () => {
    const [users, setUsers] = useState(null)
    const [userId, setUserId] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const groupId = path[path.length - 2]

    useEffect(() => {
        getAllUsers().then((users) => {
            setUsers(users)
            setUserId(users[0].id)
        })
    }, []);

    function handleOnchange(e) {
        e.preventDefault()
        setUserId(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        const body = {user: userId, group: groupId}
        assignGroup(body).then(() => navigate(`/clipclass/groups/${groupId}`))
    }

    return(
        <div>
            <select name={"assign-user"} id={"assign-user"} onChange={(e) => handleOnchange(e)}>
                {users && users.sort().map((user) => (
                    <option value={user.id} key={user.id}>{user.username}</option>
                ))}
            </select>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default AssignUserToGroup;