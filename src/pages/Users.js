import {useEffect, useState} from "react";
import {getAllUsers} from "../services/UsersService";
import MyTable from "../components/MyTable";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers(setUsers)
    }, []);

    return (
        <div className="content-2">
            <h1>Users</h1>
            <MyTable content={users}/>
        </div>
    );
};

export default Users;