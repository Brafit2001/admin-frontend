import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {assignRole} from "../../../services/users-ms/RoleService";
import MyTable from "../../../components/table/MyTable";
import {getUserRemainingRoles} from "../../../services/users-ms/UserService";


const AssignRole = () => {

    const [roles, setRoles] = useState(null)
    const [selectedRoles, setSelectedRoles] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const userId = path[path.length - 2]

    useEffect(() => {
        getUserRemainingRoles(userId).then((roles) => setRoles(roles))
    }, [userId]);

    function addRole(role, checked){

        const newList = [...selectedRoles]
        if (checked === false){
            const index = selectedRoles.indexOf(role.id)
            newList.splice(index, 1)
        }else newList.push(role.id)

        setSelectedRoles(newList)

    }

    function handleSubmit(e) {
        e.preventDefault()
        selectedRoles.forEach((roleId) => {
            const body = {user: userId, role: roleId}
            assignRole(body).then(() => console.log("Role Assigned"))
        })
        navigate(`/clipclass/users/${userId}`)
    }

    return(
        <div className={"content-2"}>
            <MyTable content={roles}
                     table={"roles"}
                     deleteButtonVisible={false}
                     editButtonVisible={false}
                     checkButtonVisible={true}
                     addItemToList={addRole}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default AssignRole;