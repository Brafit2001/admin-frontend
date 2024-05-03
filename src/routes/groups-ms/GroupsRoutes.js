import Groups from "../../pages/groups-ms/groups/Groups";
import {Route} from "react-router-dom";
import ReadGroup from "../../pages/groups-ms/groups/ReadGroup";
import EditGroup from "../../pages/groups-ms/groups/EditGroup";
import NewGroup from "../../pages/groups-ms/groups/NewGroup";
import AssignUserToGroup from "../../pages/groups-ms/groups/AssignUserToGroup";
import AssignTopic from "../../pages/groups-ms/groups/AssignTopic";


export const groupsRoutes = [
    <Route path="groups" element={<Groups/>}/>,
    <Route path="groups/:groupId" element={<ReadGroup/>} />,
    <Route path="groups/:groupId/edit" element={<EditGroup/>} />,
    <Route path="groups/new" element={<NewGroup />} />,
    <Route path="groups/:groupId/assign-user" element={<AssignUserToGroup/>} />,
    <Route path="groups/:groupId/assign-topic" element={<AssignTopic/>} />
]