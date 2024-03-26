import Topics from "../../pages/groups-ms/topics/Topics";
import {Route} from "react-router-dom";
import ReadTopic from "../../pages/groups-ms/topics/ReadTopic";
import EditTopic from "../../pages/groups-ms/topics/EditTopic";
import NewTopic from "../../pages/groups-ms/topics/NewTopic";


export const topicsRoutes = [
    <Route path="topics" element={<Topics />} />,
    <Route path="topics/:topicId" element={<ReadTopic/>} />,
    <Route path="topics/:topicId/edit" element={<EditTopic/>} />,
    <Route path="topics/new" element={<NewTopic />} />
]