import Subjects from "../../pages/courses-ms/subjects/Subjects";
import {Route} from "react-router-dom";
import ReadSubject from "../../pages/courses-ms/subjects/ReadSubject";
import EditSubject from "../../pages/courses-ms/subjects/EditSubject";
import NewSubject from "../../pages/courses-ms/subjects/NewSubject";


export const subjectsRoutes = [
    <Route path="subjects" element={<Subjects />} />,
    <Route path="subjects/:subjectId" element={<ReadSubject/>} />,
    <Route path="subjects/:subjectId/edit" element={<EditSubject/>} />,
    <Route path="subjects/new" element={<NewSubject />} />
]