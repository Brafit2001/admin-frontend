import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUserGroups, getUserRoles} from "../../../services/users-ms/UserService";
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
        <div>
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
            {
                roles ? roles.map((role) => {
                        return (
                            <div>
                                <p>role: {role.name}</p>
                            </div>
                        )
                    }
                ) : <p>No roles</p>
            }
            <h1>Groups</h1>
            {
                groups ? groups.map((group) => {
                    return (
                        <div>
                            <p>Group: {group.name}</p>
                        </div>
                    )
                }) : <p>No Groups</p>
            }
        </div>

    )
};

export default ReadUser;