import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    deleteRolePermission,
    deleteRoleUser,
    getRolePermissions,
    getRoleUsers
} from "../../../services/users-ms/RoleService";
import MyTableOld from "../../../components/table/MyTableOld";
import MyTable from "../../../components/table/MyTable";
import {deleteUserRole} from "../../../services/users-ms/UserService";

const ReadRole = () =>{
    const [users, setUsers] = useState(null)
    const [permissions, setPermissions] = useState(null)
    const location = useLocation()
    const role  = location.state

    useEffect(() => {
        getRoleUsers(role.id).then((users) => setUsers(users))
        getRolePermissions(role.id).then((permissions) => setPermissions(permissions))
    }, [role.id]);

    return (
        <div className={"content-2"}>
            <h1>ReadRole</h1>
            <div>{Object.keys(role).map((key) => {
                return (
                    <div>
                        {key + ": " + role[key]}
                    </div>
                )
            })}</div>

            <MyTable content={users} table={"users"}
                        deleteFunction={deleteRoleUser}
                        deleteProps={{roleId: role.id}}
                        style={{height: 200}}
            />
            <MyTable content={permissions} table={"permissions"}
                        deleteFunction={deleteRolePermission}
                        deleteProps={{roleId: role.id}}
                        style={{height: 200}}
            />
        </div>

    )
};

export default ReadRole;