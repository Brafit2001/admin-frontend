import {useEffect, useState} from "react";
import {deleteUser, getAllUsers} from "../../../services/users-ms/UserService";
import MyTable from "../../../components/table/MyTable";



const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers().then((users) => setUsers(users))
    }, []);

    return (
        <div className="content-2">
            <MyTable content={users}
                     table={"users"}
                     deleteFunction={deleteUser}
            />
        </div>
    );
};

export default Users;