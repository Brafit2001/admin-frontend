import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteUserGroup, deleteUserRole, getUserGroups, getUserRoles} from "../../../services/users-ms/UserService";
import MyTable from "../../../components/table/MyTable";
import {deleteGroup} from "../../../services/groups-ms/GroupService";
import {deleteRole} from "../../../services/users-ms/RoleService";
const ReadUser = () =>{
    const [roles, setRoles] = useState(null)
    const [groups, setGroups] = useState(null)
    const location = useLocation()
    const user  = location.state

    useEffect(() => {
        getUserRoles(user.id).then((list) => {
            console.log(list)
            setRoles(list)
        })
        getUserGroups(user.id).then((list) => setGroups(list))
    }, [user.id]);

    return (
        <div className={"content-2"}>
            <h1>ReadUser</h1>
            <div>
                <div className="image">
                    IMAGE: {user.image}
                </div>
                <div className="info">
                    <p>ID: {user.id}</p>
                    <p>NIA: {user.username}</p>
                    <p>NAME: {user.name}</p>
                    <p>SURNAME: {user.surname}</p>
                    <p>EMAIL: {user.email}</p>
                </div>
            </div>
            <h1>Roles:</h1>
            <MyTable content={roles} table={"roles"}
                     deleteFunction={deleteUserRole}
                     extraDeleteParameter={user.id}
                     style={{height: 200}}
            />
            <h1>Groups:</h1>
            <MyTable content={groups} table={"groups"}
                     deleteFunction={deleteUserGroup}
                     extraDeleteParameter={user.id}
                     style={{height: 200}}/>
        </div>

    )
};

export default ReadUser;