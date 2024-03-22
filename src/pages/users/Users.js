import {useEffect, useState} from "react";
import {getAllUsers} from "../../services/UserService";
import MyTable from "../../components/MyTable";
import {Link} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers(setUsers)
    }, []);

    return (
        <div className="content-2">
            <h1>Users</h1>
            <Link to={"/users/new"}>New user</Link>
            <MyTable content={users}/>
        </div>
    );
};

export default Users;