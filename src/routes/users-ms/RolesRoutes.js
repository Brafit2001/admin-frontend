import {Route} from "react-router-dom";
import Roles from "../../pages/users-ms/Role/Roles";
import ReadRole from "../../pages/users-ms/Role/ReadRole";
import EditRole from "../../pages/users-ms/Role/EditRole";
import NewRole from "../../pages/users-ms/Role/NewRole";
import AssignUserToRole from "../../pages/users-ms/Role/AssignUserToRole";
import AssignPermission from "../../pages/users-ms/Role/AssignPermission";

export const rolesRoutes = [
    <Route path="roles" element={<Roles />} key={0} />,
    <Route path="roles/:roleId" element={<ReadRole/>} key={1} />,
    <Route path="roles/:roleId/edit" element={<EditRole/>} key={2} />,
    <Route path="roles/new" element={<NewRole />} key={3} />,
    <Route path="roles/:roleId/assign-user" element={<AssignUserToRole/>} key={4} />,
    <Route path="roles/:roleId/assign-permission" element={<AssignPermission/>} key={5} />
]
