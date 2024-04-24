import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getRoleUsers} from "../../../services/users-ms/RoleService";

const ReadRole = () =>{
    const [users, setUsers] = useState(null)
    const location = useLocation()
    const role  = location.state

    useEffect(() => {
        getRoleUsers(role.id).then((users) => setUsers(users))
    }, [role.id]);

    return (
        <div>
            <h1>ReadRole</h1>
            <div>{Object.keys(role).map((key) => {
                return (
                    <div>
                        {key + ": " + role[key]}
                    </div>
                )
            })}</div>
            <h1>Users:</h1>
            {
                users ? users.map((user) => {
                    return (
                        <div>
                            <p>User id: {user.id}</p>
                        </div>
                    )
                }) : <p>No Users</p>
            }
        </div>

    )
};

export default ReadRole;