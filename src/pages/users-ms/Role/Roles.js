import {useEffect, useState} from "react";
import MyTable from "../../../components/table/MyTable";
import {deleteRole, getAllRoles} from "../../../services/users-ms/RoleService";
import PageHeader from "../../../components/PageHeader";
import {TableData} from "../../../components/table/TableData";
import {Filter} from "../../../utils/Filter";

const Roles = () => {
    const [roles, setRoles] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = TableData["roles"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));

    const results = !search ? roles : Filter(roles, filterFields, checkedState, search)

    useEffect(() => {
        getAllRoles(setRoles)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Roles"} createPath={"new"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <MyTable content={results} table={"roles"} deleteFunction={deleteRole}/>
        </div>
    );
};

export default Roles;