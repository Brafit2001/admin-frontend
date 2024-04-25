import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteRoleUser, getRoleUsers} from "../../../services/users-ms/RoleService";
import {deleteUserRole} from "../../../services/users-ms/UserService";
import MyTable from "../../../components/table/MyTable";

const ReadRole = () =>{
    const [users, setUsers] = useState(null)
    const location = useLocation()
    const role  = location.state

    useEffect(() => {
        getRoleUsers(role.id).then((users) => setUsers(users))
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
            <h1>Users:</h1>
            <MyTable content={users} table={"users"}
                     deleteFunction={deleteRoleUser}
                     extraDeleteParameter={role.id}
                     style={{height: 600}}
            />
        </div>

    )
};

export default ReadRole;