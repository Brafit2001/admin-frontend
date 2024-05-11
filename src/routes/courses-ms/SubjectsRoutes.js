import Subjects from "../../pages/courses-ms/subjects/Subjects";
import {Route} from "react-router-dom";
import ReadSubject from "../../pages/courses-ms/subjects/ReadSubject";
import EditSubject from "../../pages/courses-ms/subjects/EditSubject";
import NewSubject from "../../pages/courses-ms/subjects/NewSubject";
import NewClass from "../../pages/courses-ms/classes/NewClass";
import AssignRubric from "../../pages/courses-ms/subjects/AssignRubric";


export const subjectsRoutes = [
    <Route path="subjects" element={<Subjects />} key={0} />,
    <Route path="subjects/:subjectId" element={<ReadSubject/>} key={1}/>,
    <Route path="subjects/:subjectId/edit" element={<EditSubject/>} key={2}/>,
    <Route path="subjects/new" element={<NewSubject />} key={3}/>,
    <Route path="subjects/:subjectId/new-class" element={<NewClass/>} key={4}/>,
    <Route path="subjects/:subjectId/assign-rubric" element={<AssignRubric/>} key={5}/>
]