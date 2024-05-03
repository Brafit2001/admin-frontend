import {Route} from "react-router-dom";
import Users from "../../pages/users-ms/User/Users";
import ReadUser from "../../pages/users-ms/User/ReadUser";
import EditUser from "../../pages/users-ms/User/EditUser";
import NewUser from "../../pages/users-ms/User/NewUser";
import AssignRole from "../../pages/users-ms/User/AssignRole";
import AssignGroup from "../../pages/users-ms/User/AssignGroup";


export const usersRoutes = [
    <Route path="users" element={<Users />} key={0}/>,
    <Route path="users/:userId" element={<ReadUser/>} key={1}/>,
    <Route path="users/:userId/edit" element={<EditUser/>} key={2}/>,
    <Route path="users/new" element={<NewUser />} key={3}/>,
    <Route path="users/:userId/assign-role" element={<AssignRole />} key={4}/>,
    <Route path="users/:userId/assign-group" element={<AssignGroup />} key={5}/>
]
