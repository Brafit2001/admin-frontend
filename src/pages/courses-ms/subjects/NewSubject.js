import MyForm from "../../../components/form/MyForm";
import {newSubject} from "../../../services/courses-ms/SubjectService";
import {useEffect, useState} from "react";
import {getAllCourses} from "../../../services/courses-ms/CourseService";
import {useLocation} from "react-router-dom";

const NewSubject = () =>{

    const [coursesIds, setCoursesIds] = useState([])

    const path = useLocation().pathname.split('/')
    const courseId = parseInt(path[path.length - 2]) || null

    useEffect(() => {
        getAllCourses().then((courses) => setCoursesIds(courses.map((course) => course.id)))
    }, []);

    const subject = {
        code: "",
        title: "",
        course: courseId ? courseId : coursesIds.sort()[0]
    }

    return (
        <div>
            <h1>NewSubject</h1>
            <MyForm item={subject}
                    actionFunction={newSubject}
                    table="subjects"
                    mode="create"
                    selectList={{course: coursesIds}}
            />
        </div>

    )
};

export default NewSubject;