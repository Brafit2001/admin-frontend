import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    deleteRolePermission,
    deleteRoleUser, getRoleById,
    getRolePermissions,
    getRoleUsers
} from "../../../services/users-ms/RoleService";
import MyTable from "../../../components/table/MyTable";

const ReadRole = () =>{
    const [users, setUsers] = useState(null)
    const [permissions, setPermissions] = useState(null)
    const location = useLocation()

    const path = location.pathname.split('/')
    const roleId = path[path.length - 1]
    const [role, setRole]  = useState(location.state)

    useEffect(() => {
        !role && getRoleById(roleId).then((role) => {
            setRole(role)
        })
        getRoleUsers(roleId).then((users) => setUsers(users))
        getRolePermissions(roleId).then((permissions) => setPermissions(permissions))
    }, [role, roleId]);

    return (
        <div className={"content-2"}>
            {role &&
                <div style={{height: "100%"}}>
                    <h1>ReadRole</h1>
                    <div>{Object.keys(role).map((key) => {
                        return (
                            <div>
                                {key + ": " + role[key]}
                            </div>
                        )
                    })}</div>

                    <MyTable content={users}
                             table={"users"}
                             createPath={"assign-user"}
                             deleteFunction={deleteRoleUser}
                             deleteProps={{roleId: role.id}}
                             style={{height: 200}}
                             editButtonVisible={false}/>
                    <MyTable content={permissions}
                             table={"permissions"}
                             createPath={"assign-permission"}
                             deleteFunction={deleteRolePermission}
                             deleteProps={{roleId: role.id}}
                             style={{height: 200}}
                             editButtonVisible={false}/>
                </div>
            }

        </div>

    )
};

export default ReadRole;