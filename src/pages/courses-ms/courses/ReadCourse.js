import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import MyTable from "../../../components/table/MyTable";
import {deleteSubject, getAllSubjects} from "../../../services/courses-ms/SubjectService";
import {getCourseBydId} from "../../../services/courses-ms/CourseService";

const ReadCourse = () =>{
    const [subjects, setSubjects] = useState(null)
    const location = useLocation()
    const [course, setCourse] = useState(location.state)
    const path = location.pathname.split('/')
    const courseId = path[path.length - 1]

    useEffect(() => {
        !course && getCourseBydId(courseId).then((course) => setCourse(course))
        const params = {course: courseId}
        getAllSubjects(params).then((subjects) => setSubjects(subjects))
    }, [course, courseId]);

    return (
        <div className={"content-2"}>
            {course &&
                <div style={{height: "100%"}}>
                    <h1>ReadCourse</h1>
                    <div>{Object.keys(course).map((key) => {
                        return (
                            <div>
                                {key + ": " + course[key]}
                            </div>
                        )
                    })}</div>
                    <MyTable content={subjects}
                             createPath={"new-subject"}
                             table={"subjects"}
                             deleteFunction={deleteSubject}
                    />
                </div>
            }

        </div>

    )
};

export default ReadCourse;