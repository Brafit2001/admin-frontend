import Classes from "../../pages/courses-ms/classes/Classes";
import {Route} from "react-router-dom";
import ReadClass from "../../pages/courses-ms/classes/ReadClass";
import EditClass from "../../pages/courses-ms/classes/EditClass";
import NewClass from "../../pages/courses-ms/classes/NewClass";
import NewGroup from "../../pages/groups-ms/groups/NewGroup";


export const classesRoutes = [
    <Route path="classes" element={<Classes />} key={0} />,
    <Route path="classes/:classId" element={<ReadClass/>} key={1} />,
    <Route path="classes/:classId/edit" element={<EditClass/>} key={2}/>,
    <Route path="classes/new" element={<NewClass />} key={3} />,
    <Route path="classes/:classId/new-group" element={<NewGroup/>} key={4}/>,
]