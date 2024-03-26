import {Route} from "react-router-dom";
import Roles from "../../pages/users-ms/Role/Roles";
import ReadRole from "../../pages/users-ms/Role/ReadRole";
import EditRole from "../../pages/users-ms/Role/EditRole";
import NewRole from "../../pages/users-ms/Role/NewRole";

export const rolesRoutes = [
    <Route path="roles" element={<Roles />} />,
    <Route path="roles/:roleId" element={<ReadRole/>} />,
    <Route path="roles/:roleId/edit" element={<EditRole/>} />,
    <Route path="roles/new" element={<NewRole />} />
]
