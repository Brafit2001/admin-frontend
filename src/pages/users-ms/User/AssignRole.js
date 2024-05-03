import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {assignRole, getAllRoles} from "../../../services/users-ms/RoleService";


const AssignRole = () => {

    const [roles, setRoles] = useState(null)
    const [roleId, setRoleId] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const userId = path[path.length - 2]

    useEffect(() => {
        getAllRoles().then((roles) => {
            setRoles(roles)
            setRoleId(roles[0].id)
        })
    }, []);

    function handleOnchange(e) {
        e.preventDefault()
        setRoleId(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault()
        const body = {user: userId, role: roleId}
        assignRole(body).then(() => navigate(`/clipclass/users/${userId}`))
    }

    return(
        <div>
            <select name={"assign-role"} id={"assign-role"} onChange={(e) => handleOnchange(e)}>
                {roles && roles.sort().map((role) => (
                    <option value={role.id} key={role.id}>{role.name}</option>
                ))}
            </select>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default AssignRole;