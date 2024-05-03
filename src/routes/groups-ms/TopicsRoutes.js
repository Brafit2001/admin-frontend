import Topics from "../../pages/groups-ms/topics/Topics";
import {Route} from "react-router-dom";
import ReadTopic from "../../pages/groups-ms/topics/ReadTopic";
import EditTopic from "../../pages/groups-ms/topics/EditTopic";
import NewTopic from "../../pages/groups-ms/topics/NewTopic";
import AssignGroupToTopic from "../../pages/groups-ms/topics/AssignGroupToTopic";


export const topicsRoutes = [
    <Route path="topics" element={<Topics />} key={0}/>,
    <Route path="topics/:topicId" element={<ReadTopic/>} key={1}/>,
    <Route path="topics/:topicId/edit" element={<EditTopic/>} key={2}/>,
    <Route path="topics/new" element={<NewTopic />} key={3}/>,
    <Route path="topics/:topicId/assign-group" element={<AssignGroupToTopic/>} key={4}/>
]