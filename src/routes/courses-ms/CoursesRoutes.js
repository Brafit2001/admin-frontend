import Courses from "../../pages/courses-ms/courses/Courses";
import {Route} from "react-router-dom";
import NewCourse from "../../pages/courses-ms/courses/NewCourse";
import ReadCourse from "../../pages/courses-ms/courses/ReadCourse";
import EditCourse from "../../pages/courses-ms/courses/EditCourse";


export const coursesRoutes = [
    <Route path="courses" element={<Courses />} />,
    <Route path="courses/:courseId" element={<ReadCourse/>} />,
    <Route path="courses/:courseId/edit" element={<EditCourse/>} />,
    <Route path="courses/new" element={<NewCourse />} />
]