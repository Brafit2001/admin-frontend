import Classes from "../../pages/courses-ms/classes/Classes";
import {Route} from "react-router-dom";
import ReadClass from "../../pages/courses-ms/classes/ReadClass";
import EditClass from "../../pages/courses-ms/classes/EditClass";
import NewClass from "../../pages/courses-ms/classes/NewClass";


export const classesRoutes = [
    <Route path="classes" element={<Classes />} />,
    <Route path="classes/:classId" element={<ReadClass/>} />,
    <Route path="classes/:classId/edit" element={<EditClass/>} />,
    <Route path="classes/new" element={<NewClass />} />
]