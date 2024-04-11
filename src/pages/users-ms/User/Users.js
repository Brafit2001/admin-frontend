import {useEffect, useState} from "react";
import {deleteUser, getAllUsers} from "../../../services/users-ms/UserService";
import MyTable from "../../../components/table/MyTable";
import PageHeader from "../../../components/PageHeader";

const Users = () => {
    const [users, setUsers] = useState([])
    const [ search, setSearch ] = useState("")

    const results = !search ? users : users.filter((user)=> user.username.toLowerCase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        getAllUsers(setUsers)
    }, []);

    return (
        <div className="content-2">
            <PageHeader title={"Users"} createPath={"new"} setQuery={setSearch} query={search}/>
            <MyTable content={results} table={"users"} deleteFunction={deleteUser}/>
        </div>
    );
};

export default Users;