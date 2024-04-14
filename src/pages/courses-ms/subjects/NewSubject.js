import MyForm from "../../../components/MyForm";
import {newSubject} from "../../../services/courses-ms/SubjectService";
import {useEffect, useState} from "react";
import {getAllCourses} from "../../../services/courses-ms/CourseService";

const NewSubject = () =>{
    const [coursesIds, setCoursesIds] = useState([])
    const subject = {
        title: "",
        year: ""
    }

    useEffect(() => {
        getAllCourses().then((courses) => setCoursesIds(courses.map((course) => course.id)))
    }, []);

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