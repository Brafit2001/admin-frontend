import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getAllUsers} from "../../../services/users-ms/UserService";
import {assignRole} from "../../../services/users-ms/RoleService";


const AssignUserToRole = () => {
    const [users, setUsers] = useState(null)
    const [userId, setUserId] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const roleId = path[path.length - 2]

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
        const body = {user: userId, role: roleId}
        assignRole(body).then(() => navigate(`/clipclass/roles/${roleId}`))
    }

    return(
        <div>
            <select name={"assign-user"} id={"assign-user"} onChange={(e) => handleOnchange(e)}>
                {users && users.sort().map((user) => (
                    <option value={user.id} key={user.id}>{user.name}</option>
                ))}
            </select>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default AssignUserToRole;