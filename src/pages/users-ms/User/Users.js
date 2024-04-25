import {useEffect, useState} from "react";
import {deleteUser, getAllUsers} from "../../../services/users-ms/UserService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";
import {TableData} from "../../../components/table/TableData";
import {Filter} from "../../../utils/AuxiliarFunctions";

const Users = () => {

    const [users, setUsers] = useState([])
    const [ search, setSearch ] = useState("")
    const filterFields = TableData["users"]["filter"]
    const [checkedState, setCheckedState] = useState(new Array(filterFields.length).fill(true));


    const results = !search ? users : Filter(users, filterFields, checkedState, search)

    useEffect(() => {
        getAllUsers().then((users) => setUsers(users))
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Users"} createPath={"new"} setQuery={setSearch} query={search} filter={checkedState} setFilter={setCheckedState}/>
            <MyTable content={results} table={"users"} deleteFunction={deleteUser}/>
        </div>
    );
};

export default Users;