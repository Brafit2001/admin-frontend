import Courses from "../../pages/courses-ms/courses/Courses";
import {Route} from "react-router-dom";
import NewCourse from "../../pages/courses-ms/courses/NewCourse";
import ReadCourse from "../../pages/courses-ms/courses/ReadCourse";
import EditCourse from "../../pages/courses-ms/courses/EditCourse";
import NewSubject from "../../pages/courses-ms/subjects/NewSubject";


export const coursesRoutes = [
    <Route path="courses" element={<Courses />} key={0}/>,
    <Route path="courses/:courseId" element={<ReadCourse/>} key={1}/>,
    <Route path="courses/:courseId/edit" element={<EditCourse/>} key={2}/>,
    <Route path="courses/new" element={<NewCourse />} key={3}/>,
    <Route path="courses/:courseId/new-subject" element={<NewSubject />} key={4}/>,
]