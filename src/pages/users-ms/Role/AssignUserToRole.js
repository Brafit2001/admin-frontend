import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {assignRole, getRoleRemainingUsers} from "../../../services/users-ms/RoleService";
import MyTable from "../../../components/table/MyTable";


const AssignUserToRole = () => {
    const [users, setUsers] = useState(null)
    const [selectedUsers, setSelectedUsers] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const roleId = path[path.length - 2]

    useEffect(() => {
        getRoleRemainingUsers(roleId).then((users) => setUsers(users))
    }, [roleId]);

    function addUser(user, checked){

        const newList = [...selectedUsers]
        if (checked === false){
            const index = selectedUsers.indexOf(user.id)
            newList.splice(index, 1)
        }else newList.push(user.id)

        setSelectedUsers(newList)

    }

    function handleSubmit(e) {
        e.preventDefault()
        selectedUsers.forEach((userId) => {
            const body = {user: userId, role: roleId}
            assignRole(body).then(() => console.log(`User ${userId} Assigned`))
        })
        navigate(`/clipclass/roles/${roleId}`)
    }

    return (
        <div className={"content-2"}>
            <MyTable content={users}
                     table={"users"}
                     deleteButtonVisible={false}
                     editButtonVisible={false}
                     checkButtonVisible={true}
                     addItemToList={addUser}
                     style={{height: "600px"}}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)} className={"submit-button"}>
                Submit
            </button>
        </div>
    )
}

export default AssignUserToRole;