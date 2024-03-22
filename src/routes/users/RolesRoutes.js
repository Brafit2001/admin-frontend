import {Route} from "react-router-dom";
import Roles from "../../pages/users/Role/Roles";
import ReadRole from "../../pages/users/Role/ReadRole";
import EditRole from "../../pages/users/Role/EditRole";
import NewRole from "../../pages/users/Role/NewRole";

export const rolesRoutes = [
    <Route path="roles" element={<Roles />} />,
    <Route path="roles/:roleId" element={<ReadRole/>} />,
    <Route path="roles/:roleId/edit" element={<EditRole/>} />,
    <Route path="roles/new" element={<NewRole />} />
]
