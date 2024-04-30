import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {deleteUserGroup, deleteUserRole, getUserGroups, getUserRoles} from "../../../services/users-ms/UserService";
import MyTable from "../../../components/table/MyTable";
import {readImage} from "../../../utils/AuxiliarFunctions";
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
            <div className={"image-info"}>
                <div className="image">
                    <img src={readImage(user, "users")} alt=""/>
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
                     deleteProps={{userId: user.id}}
                     style={{height: 200}}
            />
            <h1>Groups:</h1>
            <MyTable content={groups} table={"groups"}
                     deleteFunction={deleteUserGroup}
                     deleteProps={{userId: user.id}}
                     style={{height: 200}}/>
        </div>

    )
};

export default ReadUser;