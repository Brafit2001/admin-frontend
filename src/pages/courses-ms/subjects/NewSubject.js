import MyForm from "../../../components/form/MyForm";
import {newSubject} from "../../../services/courses-ms/SubjectService";
import {useEffect, useState} from "react";
import {getAllCourses} from "../../../services/courses-ms/CourseService";
import {useLocation} from "react-router-dom";
import {getIdFromPath} from "../../../utils/AuxiliarFunctions";

const NewSubject = () =>{

    const [courses, setCourses] = useState(null)
    const location = useLocation()
    const courseId = parseInt(getIdFromPath(location, "courses"))

    useEffect(() => {
        !courseId && getAllCourses().then((courses) => setCourses(courses))
    }, [courseId]);

    const subject = {
        code: null,
        title: null,
        course: courses ? courses[0]["id"] : courseId
    }

    return (
        <div className={"form-section"}>
            <h1>NewSubject</h1>
            <MyForm item={subject}
                    actionFunction={newSubject}
                    table="subjects"
                    mode={courseId ? "createWithCourseId" : "create"}
                    selectList={courses ? {course: courses} : null}
            />
        </div>

    )
};

export default NewSubject;