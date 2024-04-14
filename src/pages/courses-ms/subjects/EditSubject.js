import {useLocation} from "react-router-dom";
import {editSubject} from "../../../services/courses-ms/SubjectService";
import MyForm from "../../../components/MyForm";
import {useEffect, useState} from "react";
import {getAllCourses} from "../../../services/courses-ms/CourseService";


const EditSubject = () =>{
    const [coursesIds, setCoursesIds] = useState([])
    const location = useLocation()
    const subject = location.state

    useEffect(() => {
        getAllCourses().then((courses) => setCoursesIds(courses.map((course) => course.id)))
    }, []);

    return (
        <div>
            <h1>EditSubject</h1>
            <MyForm item={subject}
                    actionFunction={editSubject}
                    table="subjects"
                    mode={"editable"}
                    selectList={{course: coursesIds}}
            />
        </div>

    )
};

export default EditSubject;