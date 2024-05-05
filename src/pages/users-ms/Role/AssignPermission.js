import MyTable from "../../../components/table/MyTable";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {
    assignPermission,
    getRoleRemainingPermissions
} from "../../../services/users-ms/RoleService";

const AssignPermission = () =>{

    const [permissions, setPermissions] = useState(null)
    const [selectedPermissions, setSelectedPermissions] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    const path = location.pathname.split('/')
    const roleId = path[path.length - 2]

    useEffect(() => {
        getRoleRemainingPermissions(roleId).then((permissions) => setPermissions(permissions))
    }, [roleId]);

    function addPermission(permission, checked){

        const newList = [...selectedPermissions]
        if (checked === false){
            const index = selectedPermissions.indexOf(`${permission.id},${permission.type}`)
            newList.splice(index, 1)
        }else newList.push(`${permission.id},${permission.type}`)

        setSelectedPermissions(newList)

    }

    function handleSubmit(e) {
        e.preventDefault()
        selectedPermissions.forEach((permissionString) => {
            const permission = permissionString.split(',')
            const body = {permission: permission[0],type: permission[1] ,role: roleId}
            assignPermission(body).then(() =>
                console.log(`Permission ${body.permission}, type: ${body.type} Assigned`))
        })
        navigate(`/clipclass/roles/${roleId}`)
    }

    return (
        <div className={"content-2"}>
            <MyTable content={permissions}
                     table={"permissions"}
                     deleteButtonVisible={false}
                     editButtonVisible={false}
                     checkButtonVisible={true}
                     addItemToList={addPermission}
                     style={{height: "600px"}}
            />
            <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
        </div>
    )
}

export default AssignPermission;