import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import MyTable from "../../../components/MyTable";
import {deleteRole, getAllRoles} from "../../../services/users-ms/RoleService";

const Roles = () => {
    const [roles, setRoles] = useState([])

    useEffect(() => {
        getAllRoles(setRoles).then(() => console.log(roles))
    }, [roles]);

    return (
        <div className="content-2">
            <h1>Roles</h1>
            <Link to={"/roles/new"}>New Role</Link>
            <MyTable content={roles} table={"roles"} deleteFunction={deleteRole}/>
        </div>
    );
};

export default Roles;