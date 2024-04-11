import {Route} from "react-router-dom";
import Users from "../../pages/users-ms/User/Users";
import ReadUser from "../../pages/users-ms/User/ReadUser";
import EditUser from "../../pages/users-ms/User/EditUser";
import NewUser from "../../pages/users-ms/User/NewUser";


export const usersRoutes = [
    <Route path="users" element={<Users />} key={0}/>,
    <Route path="users/:userId" element={<ReadUser/>} key={1}/>,
    <Route path="users/:userId/edit" element={<EditUser/>} key={2}/>,
    <Route path="users/new" element={<NewUser />} key={3}/>
]
