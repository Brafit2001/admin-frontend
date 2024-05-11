import {Route} from "react-router-dom";
import Rubrics from "../../pages/courses-ms/rubrics/Rubrics";
import ReadRubric from "../../pages/courses-ms/rubrics/ReadRubric";
import EditRubric from "../../pages/courses-ms/rubrics/EditRubric";
import NewRubric from "../../pages/courses-ms/rubrics/NewRubric";
import AssignSubject from "../../pages/courses-ms/rubrics/AssignSubject";

export const rubricsRoutes = [
    <Route path="rubrics" element={<Rubrics />} key={0} />,
    <Route path="rubrics/:rubricId" element={<ReadRubric/>} key={1}/>,
    <Route path="rubrics/:rubricId/edit" element={<EditRubric/>} key={2}/>,
    <Route path="rubrics/new" element={<NewRubric />} key={3}/>,
    <Route path="rubrics/:rubricId/assign-subject" element={<AssignSubject/>} key={4}/>
]