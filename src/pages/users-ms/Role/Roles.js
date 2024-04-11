import {useEffect, useState} from "react";
import MyTable from "../../../components/table/MyTable";
import {deleteRole, getAllRoles} from "../../../services/users-ms/RoleService";
import PageHeader from "../../../components/PageHeader";

const Roles = () => {
    const [roles, setRoles] = useState([])
    const [ search, setSearch ] = useState("")

    const results = !search ? roles : roles.filter((role)=> role.name.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        getAllRoles(setRoles)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Roles"} createPath={"new"} setQuery={setSearch} query={search}/>
            <MyTable content={results} table={"roles"} deleteFunction={deleteRole}/>
        </div>
    );
};

export default Roles;