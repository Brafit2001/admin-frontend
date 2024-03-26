import {Route} from "react-router-dom";
import Users from "../../pages/users-ms/User/Users";
import ReadUser from "../../pages/users-ms/User/ReadUser";
import EditUser from "../../pages/users-ms/User/EditUser";
import NewUser from "../../pages/users-ms/User/NewUser";


export const usersRoutes = [
    <Route path="users" element={<Users />}/>,
    <Route path="users/:userId" element={<ReadUser/>} />,
    <Route path="users/:userId/edit" element={<EditUser/>} />,
    <Route path="users/new" element={<NewUser />} />
]
