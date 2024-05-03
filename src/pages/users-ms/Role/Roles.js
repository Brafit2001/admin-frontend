import {useEffect, useState} from "react";
import {deleteRole, getAllRoles} from "../../../services/users-ms/RoleService";
import MyTable from "../../../components/table/MyTable";


const Roles = () => {
    const [roles, setRoles] = useState([])

    useEffect(() => {
        getAllRoles().then((roles) => setRoles(roles))
    }, []);

    return (
        <div className="content-2">
            <MyTable content={roles} table={"roles"} deleteFunction={deleteRole}/>
        </div>
    );
};

export default Roles;