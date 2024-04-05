import {useEffect, useState} from "react";
import MyTable from "../../../components/table/MyTable";
import {deleteRole, getAllRoles} from "../../../services/users-ms/RoleService";
import PageHeader from "../../../components/PageHeader";

const Roles = () => {
    const [roles, setRoles] = useState([])

    const [searchQuery, setSearchQuery] = useState("");

    const data = roles.filter((role) => {
        return  role.name.toLowerCase().includes(searchQuery.toLowerCase())
    });

    useEffect(() => {
        getAllRoles(setRoles).then(() => console.log(roles))
    }, [roles]);

    return (
        <div className="content-2">
            <PageHeader title={"Roles"} createPath={"/roles/new"} setQuery={setSearchQuery} query={searchQuery}/>
            <MyTable content={data} table={"roles"} deleteFunction={deleteRole}/>
        </div>
    );
};

export default Roles;